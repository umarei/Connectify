const express = require('express');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(express.json());

// Default route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Connectify API!');
});

// API Routes
app.use('/api', contactRoutes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;
