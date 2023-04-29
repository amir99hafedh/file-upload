const mongoose = require("mongoose");

const craSalarieSchema = mongoose.Schema({
  userId: {type: String},
  selectedDate: {type: String} ,
  rtt: { type: Number },
  presence: { type: Number },
  absence : {type: Number},
  congeSansSolde: { type: Number },
  maladie : {type: Number},
  
});

module.exports = mongoose.model("CraS", craSalarieSchema);
