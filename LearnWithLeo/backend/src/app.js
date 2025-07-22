const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const storyRoutes = require('./routes/storyRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;