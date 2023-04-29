const express = require('express');

const auth = require('../middleware/auth');

const router = express.Router();

const jobCtrl = require('../controllers/job');


router.post('/', jobCtrl.createJob);

router.put('/:id', jobCtrl.modifyJob);

router.delete('/:id', jobCtrl.deleteJob);

router.get('/', jobCtrl.jetAllJob);

router.get('/:id',  jobCtrl.getOneJob);







module.exports = router;
