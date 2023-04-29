const express = require("express");

const router = express.Router();


const factureCtrl = require("../controllers/facture");

router.post("/", factureCtrl.createFacture);

module.exports = router;
