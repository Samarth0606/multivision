const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');
const productRoutes = require('./routes/product');

//conecting mongoose
mongoose.connect('mongodb://localhost:27017/esspee', {
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                useFindAndModify:false
            })
            .then(()=>{
                console.log("DB connected");
            })
            .catch(err=>{
                console.log("DB not connected");
                console.log(err);
            });

            //data seeding
            // seedDB();


app.set('view engine','ejs');
app.set('views' , path.join(__dirname,'/views'));

app.use(express.static(path.join(__dirname,'/public')));



app.use(productRoutes);

app.get('/',(req,res)=>{
    res.send("welcome to ESSPEE Entertainments !!!");
})



app.listen(3000,()=>{
    console.log("server running at port 3000");
})