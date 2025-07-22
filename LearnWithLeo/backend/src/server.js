// filepath: c:\Users\User\Desktop\MERN STACK ASSIGNMENTS\WEEK 8 (FINAL PROJECT)\week-8-capstone_-CodeWithCal-W\LearnWithLeo\backend\src\server.js
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/learnwithleo';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

  