const expess = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

//Set Storage Engine


//Init App
const app = expess();

//EJS
app.set('view engine', 'ejs');

//Public Folder
app.use(expess.static('./public'));

app.get('/', (req, res) => res.render('index'));

const port = 3000;

app.listen(port, () => console.log(`Server stared on port: ${port}`));