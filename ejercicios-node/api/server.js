var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());


var frutas=["Fresa","Mango","Manzana"];

var router = express.Router();

router.get('/',function(req, res){
	res.json("Holaaaa!!");
});
router.get('/frutas',function(req, res){
	res.json(frutas);
});
router.post('/fruta',function(req, res){
	console.log(req.body.name);
	frutas.push(req.body.name);
	res.json("Fruta creada");
});
router.get('/fruta/:fruta_id',function(req, res){
	res.json(frutas[req.params.fruta_id]);
});














app.use('/api',router);

app.listen(8080);
console.log("Server iniciado");













