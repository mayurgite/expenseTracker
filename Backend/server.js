const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const entryRoutes = require('./routes/EntryRoute');

// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/entries', entryRoutes);

// Server listening
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
