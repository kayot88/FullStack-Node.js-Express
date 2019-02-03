const express = require('express');
const authRouter = require('./routes/authRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const positionRoutes = require('./routes/positionRoutes');
const app = express();


//localhost:5000/api/auth/login
app.use('/api/auth', authRouter);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);



module.exports = app;