//Importing the required packages

const express = require('express');
const ig      = require('instagram-node').instagram();

const app     = express();

app.use(express.static(__dirname +'/public'));
app.set('view engine', 'ejs');

app.get('/', (req,res)=> {
    res.render('pages/index');
});

var PORT = 3000;

app.listen(PORT, () => {
    console.log(`server started at PORT ${PORT}`);
})