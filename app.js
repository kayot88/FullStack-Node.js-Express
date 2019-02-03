const express = require('express');
const authRouter = require('./routes/authRoutes');
const app = express();


//localhost:5000/api/auth/login
app.use('/api/auth', authRouter);



module.exports = app;