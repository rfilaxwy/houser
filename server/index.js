const express = require('express'),
    bodyparser = require('body-parser'),
    massive = require('massive'),
    controller = require(__dirname+'/controller.js'),
    app = express(),
    cors= require('cors')

require('dotenv').config();
app.use(cors());
app.use(bodyparser.json());


let db
const port  = process.env.SERVER_PORT;
massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db',db);
    //Outside for enterprise. 
    app.listen(port, ()=>{
        console.log(`Listening HARD on port ${port}`)
    });
}).catch(err=>{
    console.log(`Error connection to database`, err.message)
})

//////////////////////ENDPOINTS//////////////////////

app.get('/api/houses', controller.read);
app.delete('/api/houses/:id',controller.delete);
app.put('/api/houses',controller.post);