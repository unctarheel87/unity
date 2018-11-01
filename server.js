const express = require("express");
const path = require("path");
const passport = require("passport");
const PORT = process.env.PORT || 3001;
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes');
const stockRoutes = require('./routes/stockRoutes');

const app = express();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session())

app.use(userRoutes)
app.use('/stocks', stockRoutes)

//configure passport
var User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Define API routes here
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/unity";

mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

