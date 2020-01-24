require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const NAME = process.env.NAME

// Route files
const testRoutes = require('./routes/test');

app.use('/test', testRoutes);

app.listen(PORT, () => console.log(`${NAME}'s server running on port: ${PORT}`));