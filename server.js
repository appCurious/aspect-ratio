const express = require('express');
const fs = require('fs');


const app = express();

app.use(express.static(__dirname));

app.get("/", function (req, res) {
	
	res.sendFile('index.html');
	
});



const server = app.listen(50022, function () {
	
	console.log('running on 50022');
});


  
  