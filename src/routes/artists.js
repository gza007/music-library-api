const express = require('express');
const artistController = require('../controllers/artists');

const router = express.Router();

router.post('/', artistController.create);
router.get('/', artistController.list);
router.get('/:artistId', artistController.findOne);
router.patch('/:artistId', artistController.patch);
router.delete('/:artistId', artistController.delete);

module.exports = router;
