const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const authRouter = require('./routes/authRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const positionRoutes = require('./routes/positionRoutes');
// const errorHandlers = require('./handlers/errorHandlers');
const keys = require('./config/keys');
const app = express();

mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
.then(() =>   console.log('MongoDB connected'))
.catch(error => console.log(error))

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());

//localhost:5000/api/auth/login
app.use('/api/auth', authRouter);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);

// app.use(errorHandlers.notFound);



module.exports = app;