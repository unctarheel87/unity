const express = require("express");
const path = require("path");
const passport = require("passport");
const PORT = process.env.PORT || 5000;
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes');
const stockRoutes = require('./routes/stockRoutes');
const advisorRoutes = require('./routes/advisorRoutes');
const messageRoutes = require('./routes/messageRoutes');

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
app.use(passport.session());

app.use('/client', userRoutes)
app.use('/stocks', stockRoutes)
app.use('/advisor', advisorRoutes)
app.use('/messages', messageRoutes)

//configure passport User
const User = require('./models/User');
passport.use('user-local', new LocalStrategy(User.authenticate()));

//configure passport Advisor
const Advisor = require('./models/Advisor');
passport.use('advisor-local', new LocalStrategy(Advisor.authenticate()));

//serialize logic
passport.serializeUser(function(user, done) {
  const key = {
    id: user.id,
    type: user.userType
  }
  done(null, key);
})

passport.deserializeUser(function(key, done) {
  const Model = key.type === 'type1' ? User : Advisor; 
  Model.findOne({
    _id: key.id
  }, '-salt -password', function(err, user) {
    done(err, user);
  })
})


// Define API routes here
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/unity";

mongoose.connect(MONGODB_URI);

//socket.io
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => { 
  console.log('user connected...')
  socket.on('message', msg => {
    io.emit('message', msg );
  })
  socket.on('message2', msg => {
    io.emit('message2', msg );
  })
});

server.listen(PORT, () => console.log("server is running at " + PORT));

