const express = require('express');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const cors = require('cors');

const port = 2023;
const host = 'localhost';
const app = express();
app.use(cors());  //incoming request hadler
app.options("*", cors());
app.use(express.json());
app.use('/', routes); //all incoming req will be redirected 
//DataBase connectivity                    databasename
mongoose.connect('mongodb://127.0.0.1:27017/blogData', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        //it creates server
        app.listen(port, host, () => {
            console.log(`server is running  at ${host}:${port}`);

        });
    }).catch(err => console.log(err))