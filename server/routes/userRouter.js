const express = require ('express');
const router = express.Router();
const userController  = require("../controllers/userController")
const auth = require('../middleware/authMiddleware')
router.get('/profile/:id',
    // auth.varifyAuthToken, 
    userController.getProfile)

module.exports = router;