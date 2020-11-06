require('dotenv').config()
const express = require('express');
const path =require('path')
const app = express();
const PORT=process.env.PORT || 3000;
const mongoose = require('mongoose') 
const session =require('express-session');
const MongoDbStore =require('connect-mongo')(session)


const Menu =require('./app/models/menu')
const APIRoutes=require('./routes/api');



const store = new MongoDbStore({
    mongooseConnection:mongoose.connection,
    collection:'session'
})
app.use(session({
    name : 'app.sid',
    secret: process.env.COOKIE_SECRET,//"1234567890QWERTY",
    resave: true,
    store: store,
    saveUninitialized: true,
    cookie:{maxAge:1000*24*60*60}
}));
app.use(express.static(path.join(__dirname,'/public')))
app.use(express.json())

//Session


const MONGO_URI = 'mongodb+srv://pump-db:pump123@pump-db.bn4vh.mongodb.net/pump-db'

app.use('/pizza',APIRoutes);


mongoose.connect(MONGO_URI,()=>{
   
    app.listen(PORT,()=>{
       
    console.log(`Listening on PORT : ${PORT}`)
    console.log(path.join(__dirname));
});
})


