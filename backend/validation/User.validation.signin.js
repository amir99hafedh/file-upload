const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function validateUserSignIn(data) {
  let err = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!validator.isEmail(data.email)) {
    err.email = "required Email";
  }
  if (validator.isEmpty(data.password)) {
    err.password = "required password";
  }

  return {
    err,
    isValid: isEmpty(err),
  };
};
