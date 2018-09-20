const express = require('express'),
    bodyparser = require('body-parser'),
    massive = require('massive'),
    controller = require(__dirname+'/controller.js'),
    app = express();

require('dotenv').config();

app.use(bodyparser.json())

const port  = process.env.SERVER_PORT || 3000;
massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db',db);
    app.listen(port, ()=>{
        console.log(`Listening HARD on port ${port}`)
    });
}).catch(err=>{
    console.log(`Error connection to database`, err.message)
})

//////////////////////ENDPOINTS//////////////////////

app.get('/api/houses', controller.read);