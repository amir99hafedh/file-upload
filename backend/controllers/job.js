const Job = require("../models/job");

exports.createJob = (req, res, next) => {
  const job = new Job({
    ...req.body,
  });
  job
    .save()
    .then(() => {
      res.status(201).json({ message: "job crée!" });
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

exports.modifyJob = (req, res, next) => {
  Job.updateOne(
    { _id: req.params.id },
    { titre: req.body.titre, description: req.body.description }
  )
    .then(() => {
      res.status(201).json({ message: "job modifié", status:200 });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteJob = (req, res, next) => {
  Job.deleteOne({ _id: req.params.id })
    .then((res) => {
      res.status(200).json({ message: "job supprimeé", status: 200 });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.jetAllJob = (req, res, next) => {
  Job.find()
    .then((Jobs) => {
      res.status(200).json(Jobs);
    })
    .catch((error) => {
      res.status(400).json({ eroor });
    });
};

exports.getOneJob = (req, res, next) => {
  Job.findOne({ _id: req.params.id })
    .then((job) => {
      res.status(200).json(job);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
