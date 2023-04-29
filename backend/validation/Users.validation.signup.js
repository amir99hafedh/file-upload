const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function validateUser(data) {
  let err = {};
  data.nom = !isEmpty(data.nom) ? data.nom : "";
  data.prenom = !isEmpty(data.prenom) ? data.prenom : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.dateEntree = !isEmpty(data.dateEntree) ? data.dateEntree : "";
  data.dateNaissance = !isEmpty(data.dateNaissance) ? data.dateNaissance : "";

  if (validator.isEmpty(data.nom)) {
    err.nom = "required nom";
  }
  if (validator.isEmpty(data.prenom)) {
    err.prenom = "required prenom";
  }
  if (!validator.isEmail(data.email)) {
    err.email = "required Email";
  }
  if (validator.isEmpty(data.password)) {
    err.password = "required password";
  }
  if (validator.isEmpty(data.dateEntree)) {
    err.dateEntree = "required dateEntree";
  }
  if (validator.isEmpty(data.dateNaissance)) {
    err.dateNaissance = "required dateNaissance";
  }

  return {
    err,
    isValid: isEmpty(err),
  };
};
