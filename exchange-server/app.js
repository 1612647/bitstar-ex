const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

//mongoose
const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/Test'; //Db name
mongoose.connect(mongoDB); //Thiết lập connection
mongoose.Promise = global.Promise; //Ép mongoose sử dụng thư viện promise
const db = mongoose.connection; //Lấy kết nối mặc định
db.on('error', console.error.bind(console, 'MongoDB connection error:')); //Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
usersRouter(app)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;