const express = require("express");

const auth = require("../middleware/auth");

const router = express.Router();

const craFCtrl = require("../controllers/craF");

router.post("/", craFCtrl.createCraF);

router.put("/:id", craFCtrl.modifierCraF);

router.delete("/:id", craFCtrl.supprimercraF);

router.get("/", craFCtrl.getallcraF);

router.get("/:id", craFCtrl.getOnecraF);

module.exports = router;
