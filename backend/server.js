require('dotenv').config();
const express = require('express');
const app = express();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const session = require('express-session');
const path = require('path');

const port = 3000;

app.use(express.static(path.join(__dirname, 'src')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {
    console.log('server started on port ' + port);
})