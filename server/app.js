// Main imports
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

// DB Import
const connectDB = require('./config/database.js');

// Access Environment Variables
require('dotenv').config();

// Main App Initialization
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: '*' }));

// Serve our static build files
app.use(express.static(path.join(__dirname, '../client/build')));

// Provides great rout logging in our console for debugging
app.use(morgan('combined'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/transactions', require('./routes/api/transactions'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/rates', require('./routes/api/rates'));

// Serving react on routes unused by previous routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Startup
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`The API Server is listening on port: ${PORT}`);
});