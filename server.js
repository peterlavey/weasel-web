/*jslint node:true, es5:true */
'use strict';

const minimist = require('minimist');
const port = Number(process.env.PORT || 3005);
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type', 'application/json');

    next();
});

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static('./public'));

const router = express.Router();

router.get('/', (req, res) => res.sendFile("./public/index.html"));

app.use(router);

app.listen(port, ()=> console.log("Node server running on http://localhost:" + port));
