const express = require('express');
var util = require('util');
var fs = require('fs');
var path = require('path');

const app = express();
const router = express.Router();

const port = 3000;

router.use(function (req, res, next) {
    util.log('/' + req.method + " for " + req.url);

    if(req.url.match(/.js$/)){
        var jsPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(jsPath, "UTF-8");
        res.writeHead(200, {"Content-type": "text/javascript"});
        fileStream.pipe(res);
    }

    next();
});

router.get('/', function (req, res) {
    res.send("Welcome to app.js!!!!");
});


app.use(express.static("./views"), router).listen(port, function () {
    util.log('Example app listening on port 3000!!')
});
