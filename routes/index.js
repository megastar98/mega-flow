var express = require('express');
var router = express.Router();
var formidable = require('formidable');

const GuestController = require('../controllers/GuestController');
const passport = require('../config/passport');
const uploadFile = require('../middleware/multer');

/* GET home page. */
router.get('/', (req,res)=>{
    res.render('index',{title:'Mega-Flow'});
});

router.post('/login',GuestController.authenticateUser);

router.get('/login',GuestController.getLogin); 

router.get('/register',GuestController.getRegister);

router.post('/register',GuestController.register);

//forgot password
router.get('/reset_password',GuestController.getResetPass)

router.post('/reset_password',GuestController.resetUserPass);

module.exports = router;
