const { Position } = require('./db.js');
const { urlencoded } = require('body-parser');
const { json } = require('body-parser');
const cors = require('cors');
const express = require('express');



var app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(json())
app.use(urlencoded({
    extended: true
}));

app.get('/Position/', async function(request, result){
    Position.getData((error,row,func)=>{
        console.log(row)
        result.json(row)
    })
   
})




app.listen(process.env.PORT || 8080);

console.log(8080)