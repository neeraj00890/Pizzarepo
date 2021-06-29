const Menu = require('../models/menu');

function homeController(){
    return {
          getAllPizzas: async (req,res,next)=>{
            let totalQty=0;
            if(req.session.cart){
                totalQty =req.session.cart.totalQty
            }
        
           //   console.log(req.session.cart);
        res.json({...await Menu.find(),totalCartCount:totalQty})
        }
    }   
}


module.exports=homeController;