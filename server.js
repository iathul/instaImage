//Importing the required packages

const express = require('express');
const ig      = require('instagram-node').instagram();
const dotenv  = require('dotenv');
dotenv.config()

const app     = express();

app.use(express.static(__dirname +'/public'));
app.set('view engine', 'ejs');

ig.use({
    access_token: process.env.token,
});

app.get('/', (req,res)=> {
    ig.user_self_media_recent((err,medias,pagination,remaining,limit)=>{
        res.render('pages/index',{grams:medias});
    })
    //res.render('pages/index');
});

var PORT = 3000;

app.listen(PORT, () => {
    console.log(`server started at PORT ${PORT}`);
})