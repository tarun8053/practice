const express = require('express');
const { createUser, getAllUser, upadateUser } = require('../controller/user');
const router = express.Router();

router.get('/',getAllUser);
router.post('/',createUser);
router.put('/:id',upadateUser );

module.exports = router;
