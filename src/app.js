//? Dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config();

//? Files
const config = require('../config')
const db = require('./utils/database');
const initModel = require('./models/initModel')
const userRouter = require('./users/users.router');
const authRouter = require('./auth/auth.router')

//? Initial Configs

const app = express();
//? Enable incoming JSON data
app.use(express.json());
//? Enable cors
app.use(cors());

const PORT = process.env.PORT || 4000

//? Authenticate DB
db.authenticate()
    .then( () => console.log('Database Authenticated!'))
    .catch(err => console.log(err))
//? Sync DataBase Models
db.sync()
    .then( () => console.log('Database Synced!'))
    .catch(err => console.log(err))

//? Initialize my models relations
initModel()


//? Routes v1
app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Ok!',
        routes: {
            users: ""
        }
    })
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
});