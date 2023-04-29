const User = require("../models/user");
const validateUser = require("../validation/Users.validation.signup");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

exports.signup = (req, res, next) => {
  const { err, isValid } = validateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(err);
    } else {
      bcrypt.hash(req.body.password, 10).then((hash) => {
        const user = new User({
          email: req.body.email,
          password: hash,
          nom: req.body.nom,
          prenom: req.body.prenom,
          dateEntree: req.body.dateEntree,
          dateNaissance: req.body.dateNaissance,
          type: req.body.type,
        });
        User.findOne({ email: req.body.email }).then((exist) => {
          if (exist) {
            err.email = "user exist";
            res.status(404).json(err);
          } else {
            user
              .save()
              .then(() =>
                res.status(201).json({ message: "utilisateur crée!" })
              )
              .catch((error) => res.status(500).json({ error }));
          }
        });
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        res
          .status(401)
          .json({ message: "email ou mots de passe est incorrecte" });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              res
                .status(401)
                .json({ message: "email ou mots de passe  incorrecte!" });
            } else {
              res.status(200).json({
                userId: user._id,
                token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
                  expiresIn: "26h",
                }),
                type: user.type,
              });
            }
          })
          .catch((error) => {
            res.status(500).json({ error });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

/*

 */

exports.FindAllUsers = async (req, res, next) => {
  try {
    const data = await User.find();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.FindSinglUsers = async (req, res, next) => {
  try {
    const data = await User.findOne({ _id: req.params.id }); //req.params.id pour prendre l URL de chaque id
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.UpdateUsers = async (req, res, next) => {
  const { err, isValid } = validateUser(req.body);

  try {
    if (!isValid) {
      res.status(404).json(err);
    } else {
      const data = await User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );
      res.status(201).json(data);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.Deleteusers = async (req, res, next) => {
  try {
//Job.deleteOne({ _id: req.params.id });
    const data = await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "user deleted" });
  } catch (error) {
    res.status(500).json({ error });
  }
};
