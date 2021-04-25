const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT|| 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{useNewUrlParser : true,useCreateIndex : true, useUnifiedTopology: true})
// .then(()=>{
//     console.log(`connection to database established`)
// }).catch(err=>{
//     console.log(`db error ${err.message}`);
//     process.exit(-1)
// });
const connection = mongoose.connection;

connection.once('open',() => {
    console.log("Mongoose database connection established succsessfully"); 
})

const TaskRouter = require('./routes/task');

app.use('/task',TaskRouter);


app.listen(port,() => {
    console.log('server is running on port : ',port);
})