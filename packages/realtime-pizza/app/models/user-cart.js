const mongoose = require('mongoose')
const Schema =mongoose.Schema

const UserSchema=new Schema({
    userId:{
        type:mongoose.Types.ObjectId ,
        ref: "User",
        required:true
    },
    items:{
        type: Object,
        default: {},

        required:true
    },
    totalQty:{
        type:Number,
        default: 0,
        required:true
    },
    totalPrice:{
        type:Number,
        default: 0,
        required:true
    }
})

const User = mongoose.model('UserCart',UserSchema)
module.exports = User;