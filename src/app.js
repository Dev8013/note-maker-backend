const express = require('express');

const app = express();

app.use(express.json());

const notes = [
    {
        'title': 'Note 1',
        'desc': 'This is the first note'
    }
];

//title and desc - from user (POST)

app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.status(201).json({ message: 'Note created successfully' });
});

app.get('/notes', (req, res) => {
    res.status(200).json({notes: notes, message: 'Notes fetched successfully'});
});

app.delete('/notes/:index',(req, res) => {
    const index = req.params.index;
    console.log('Index to delete:', index);
    delete notes[index];
    res.status(200).json({message: 'Note deleted successfully'});
});

app.patch('/notes/:index', (req, res) => {
    const index = req.params.index;
    console.log('Index to update:', index);
    const {desc} = req.body;
    notes[index].desc = desc;
    res.status(200).json({message: 'Note updated successfully'});
})

module.exports = app;