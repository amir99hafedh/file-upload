const CraF = require('../models/craF')

exports.createCraF = (req, res, next) => {
  const craf = new CraF({
    ...req.body,
  });
  craf
    .save()
    .then(() => {
      res.status(201).json({ message: "cra freelencer crée!!" });
    })
    .catch((error) => {
      res.startus(404).json({ error });
    });
};

exports.modifierCraF = (req, res, next) => {
  const craF = new CraF({
    ...req.body,
  });
  CraF.updateOne({ _id: req.params.id }, craF)
    .then(() => {
      res.status(201).json({ message: "cra freelencer modifié" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.supprimercraF = (req, res, next) => {
  CraF.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "cra freelencer supprimeé" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getallcraF = (req, res, next) => {
  CraF.find()
    .then((craFs) => {
      res.status(200).json(craFs);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getOnecraF = (req, res, next) => {
  CraF.findOne({ _id: req.params.id })
    .then((craF) => {
      res.status(200).json(craF);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
