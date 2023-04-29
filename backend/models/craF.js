const mongoose = require("mongoose");

const craFreelencerSchema = mongoose.Schema({
  selectedDate: {type: Date } ,
  presence: { type: Number },
  absence: { type: Number },
});

module.exports = mongoose.model("CraF", craFreelencerSchema);
