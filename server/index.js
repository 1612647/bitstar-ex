let express = require('express');
let app = express();
let port = 3000;

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    // res.send('<h1>Hello world>');
    res.sendFile('../exchange-client/public/index.html');
});

app.listen(3000, function () {

});