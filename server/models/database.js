const mongoose = require('mongoose');
require("dotenv").config({path: '.env'});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB Connected 🐅');
});

// Models
require('./Category');
require('./Recipe');