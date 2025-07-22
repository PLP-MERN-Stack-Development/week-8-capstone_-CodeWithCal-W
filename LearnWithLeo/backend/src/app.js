const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const storyRoutes = require('./routes/storyRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/stories', storyRoutes);

module.exports = app;