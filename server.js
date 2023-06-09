const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require("./app");

dotenv.config({path: './config.env'})

const db = process.env.DATABASE.replace('PASSWORD',process.env.DATABASE_PASSWORD);
console.log(db)

mongoose.connect(db,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(con => {
    // console.log(con.connection);
    console.log("DB connection successfull");
}).catch(err => {
    console.log(err,"error")
})

const port = 7000;
app.listen(port,() => {
    console.log(`app is listening on port ${port}`);
})