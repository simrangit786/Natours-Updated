const express = require('express');
const morgan = require('morgan');
const app = new express();
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const tourController = require('./controllers/tourController');

app.use(morgan('dev'))
app.use(express.json())

var router = express.Router();

// router.param('id',tourController.checkId);


app.use((req,res,next) => {
    console.log("Hello from the middleware...!")
    next();

})

app.use((req,res,next) => {
    console.log("enter")
    req.requestTime = new Date().toISOString();
    next();
})

app.use('/api/v1/tours',tourRouter);
app.use('api/v1/users',userRouter);


module.exports = app ;