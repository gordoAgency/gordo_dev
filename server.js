// server.js
const express = require('express');
const port = process.env.PORT || 5000;
var path = require('path');
var serveStatic = require('serve-static');
const app = express();
app.use(serveStatic(__dirname + "/dist"));
app.get(/.*/, function (req, res){
    res.sendfile(__dirname+"/dist/index.html")
});

app.listen(port);
console.log('server started ' + port);