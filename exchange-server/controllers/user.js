'use strict';

const User = require('mongoose'),
    User = mongoose.model('User');


exports.get_all_users = (req, res) => {
    User.find({}, (err, users) => {
        if (err)
            res.send(err);
        res.json(users);
    });
};


exports.insert_a_user = function (req, res) {
    var new_user = new User(req.body);
    new_user.save((err, user) => {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.get_a_user = function (req, res) {
    User.findById(req.params._id, (err, user) => {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.update_a_user = (req, res) => {
    User.findOneAndUpdate({
        _id: req.params._id
    }, req.body, {
        new: true
    }, (err, user) => {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.delete_a_user = (req, res) => {
    User.remove({
        _id: req.params._id
    }, (err, user) => {
        if (err)
            res.send(err);
        res.json({
            message: 'user successfully deleted'
        });
    });
};