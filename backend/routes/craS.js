const express = require('express');

const auth = require('../middleware/auth');

const router = express.Router();

const craSCtrl = require('../controllers/craS');

router.post('/', craSCtrl.createCraS);

router.put('/:id', craSCtrl.modifierCraS);

router.delete('/:id', craSCtrl.supprimercraS);

router.get('/',  craSCtrl.getallcraS);

router.get('/:id',  craSCtrl.getOnecraS);

module.exports = router;