const express = require('express');
const path = require('path');

const app = express();

//automatically render index.html and allow other html pages in path
app.use('/flowbite', express.static(path.join(__dirname,'node_modules/flowbite/dist')))

app.use('/', express.static('public',{extensions: ['html']}));


//if not found, send back to index
app.get('*', (req, res) => { res.redirect('/') })

//find port automatically or 3000 if local
const port = process.env.port||3000;

//listens for http requests using app
app.listen(port, '0.0.0.0', ()=>{
    console.log("Connected...")
});