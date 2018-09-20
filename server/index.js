const express = require('express'),
    bodyparser = require('body-parser'),
    massive = require('massive'),
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