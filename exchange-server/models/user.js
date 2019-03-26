const mongoose = require('mongoose');

//Định nghĩa một schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    name: String,
    age: Number
});

// Biên dịch mô hình từ schema
// const User = mongoose.model('User', UserSchema);

module.exports = User;