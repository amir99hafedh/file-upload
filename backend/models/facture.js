const mongoose = require("mongoose");

const factureSchema = mongoose.Schema({
  selectedDate: { type: Date, required: true },
  commantaire: { type: String },
  image: { type: Object, required: true },
});

module.exports = mongoose.model("Facture", factureSchema);
