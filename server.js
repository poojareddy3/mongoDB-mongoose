const User = require('./models/user');

const express = require('express');
const PORT = process.env.PORT || 3000;

const db = require('./db/index');

const app = express();

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send("This is Users Server");
})

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
})

app.get('/users/:id', async (req, res) => {
    try{
        const { id } = req.params
        const displayUser = await User.findById(id);
        if(!displayUser) throw Error('User not found!');
        res.json(displayUser);
    } catch(e) {
        console.log(e);
        res.json('User not found!');
    }
})