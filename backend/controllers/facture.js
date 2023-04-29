const Facture = require("../models/Facture");


/*exports.createFacture  = async(req, res, next) => {
  const {selectedDate , commantaire , image} = req.body;

  try{
    if(image){

    }
  }catch(error){

  }
}*/

exports.createFacture = (req, res, next) => {
  const facture = new Facture({
    ...req.body,
   
  });
  facture
    .save()
    .then(() => {
      res.status(201).json({ message: "Facture envoyer" });
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};