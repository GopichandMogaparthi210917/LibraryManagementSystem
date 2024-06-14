const express = require('express');
const router = express.Router();
const { createPublisher, readPublisher, updatePublisher, deletePublisher } = require('./models/Publisher');

// Create a new Publisher
router.post('/publishers', async (req, res) => {
    try {
        const publisher = await createPublisher(req.body);
        res.status(201).json(publisher);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a Publisher by ID
router.get('/publishers/:id', async (req, res) => {
    try {
        const publisher = await readPublisher(req.params.id);
        if (!publisher) {
            return res.status(404).json({ error: 'Publisher not found' });
        }
        res.json(publisher);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a Publisher by ID
router.put('/publishers/:id', async (req, res) => {
    try {
        const publisher = await updatePublisher(req.params.id, req.body);
        if (!publisher) {
            return res.status(404).json({ error: 'Publisher not found' });
        }
        res.json(publisher);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a Publisher by ID
router.delete('/publishers/:id', async (req, res) => {
    try {
        const publisher = await deletePublisher(req.params.id);
        if (!publisher) {
            return res.status(404).json({ error: 'Publisher not found' });
        }
        res.json({ message: 'Publisher deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;