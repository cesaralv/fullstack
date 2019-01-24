const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const frutasRouter = require('./routes/frutas');

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.get('/',function(req, res){
  res.json({message: 'Bienvenido al store Proteco'});
});

app.use('/api',frutasRouter);

app.listen(8080);
console.log("Server iniciado");













