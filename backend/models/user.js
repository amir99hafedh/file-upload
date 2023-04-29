const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");
const { required } = require("nodemon/lib/config");

const userSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateEntree: { type: Date, required: true },
  dateNaissance: { type: Date, required: true },
  type: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
