const CraS = require("../models/CraS");

exports.createCraS = (req, res, next) => {
  const craS = new CraS({
    ...req.body,
  });
  craS
    .save()
    .then(() => {
      res.status(201).json({ message: "cra salarie crée!!" });
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

exports.modifierCraS = (req, res, next) => {
  const craS = new CraS({
    ...req.body,
  });
  CraS.updateOne({ _id: req.params.id }, craS)
    .then(() => {
      res.status(201).json({ message: "cra salarie modifié" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.supprimercraS = (req, res, next) => {
  CraS.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "cra salarie supprimeé" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getallcraS = (req, res, next) => {
  // var regex = new RegExp("/^" + req.query.date + /i");
  CraS.find({
    userId: req.query.id,
    selectedDate: { $regex: req.query.date },
  })
    .then((craSs) => {
      res.status(200).json(craSs);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getOnecraS = (req, res, next) => {
  CraS.findOne({ _id: req.params.id })
    // const userId = req.params.userId;
    // const date = req.query.date;
    .then((craS) => {
      res.status(200).json(craS);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
