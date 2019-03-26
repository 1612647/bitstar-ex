let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,

    mongoose = require('mongoose'),
    UserModel = require('./models/model'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Test');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var routes = require('./routes/router'); //importing route
routes(app); //register the route

app.listen(port, function () {

});


//404 error
app.use(function (req, res) {
    res.status(405).send({
        url: req.originalUrl + ' not found'
    })
});