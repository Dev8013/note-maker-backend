const express = require('express');

const app = express();

app.use(express.json());

//title and desc - from user (POST)

app.post('/notes', (req, res) => {
    const {title, desc} = req.body;
    console.log(`Title: ${title}, Description: ${desc}`);
    res.status(201).json({ message: 'Note created successfully' });
});



module.exports = app;