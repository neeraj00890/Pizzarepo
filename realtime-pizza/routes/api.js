const express=require('express')
const router =express.Router();

const cartController = require('../app/controller/customers/cartController')
const homeController = require('../app/controller/homeController')
const authorizationController= require('../app/controller/authController')



router.get('/fetchAll',homeController().getAllPizzas);
router.post('/updateCart',cartController().updateCart);
router.get('/getCart',cartController().getCart);

router.post('/signUp',authorizationController().signup);
router.post('/login',authorizationController().login);







module.exports=router