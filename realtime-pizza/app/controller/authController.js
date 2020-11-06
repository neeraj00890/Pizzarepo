
const User=require('../models/user')
const bcrypt = require('bcryptjs')
function authController(){
    return {
        signup: async (req,res,next)=>{
            const hashedPassword= await bcrypt.hash(req.body.password,12)
            const user=new User({
                name:req.body.name,
                username:req.body.userName,
                password:hashedPassword,
            })

           await user.save()
           res.json({success:true})

        },
        login:async (req,res,next)=>{
          
           let dbuser = await User.findOne({username:req.body.username}) 
           if(dbuser){
               console.log(dbuser);
           let doMatch = await bcrypt.compare(req.body.password,dbuser.password);
           console.log(doMatch);
           if(doMatch){
               res.json({...dbuser._doc,success:true})
           }
           }
           

        }
    }
}



module.exports=authController;