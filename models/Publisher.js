const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Publisher schema
const publisherSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true }
});

// Create the Publisher model
const Publisher = mongoose.model('Publisher', publisherSchema);

// Create a Publisher instance
const createPublisher = async (data) => {
    try {
        const publisher = new Publisher(data);
        return await publisher.save();
    } catch (error) {
        throw new Error('Error creating publisher: ' + error.message);
    }
};

// Read a Publisher instance by ID
const readPublisher = async (id) => {
    try {
        return await Publisher.findById(id);
    } catch (error) {
        throw new Error('Error reading publisher: ' + error.message);
    }
};

// Update a Publisher instance by ID
const updatePublisher = async (id, data) => {
    try {
        return await Publisher.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
        throw new Error('Error updating publisher: ' + error.message);
    }
};

// Delete a Publisher instance by ID
const deletePublisher = async (id) => {
    try {
        return await Publisher.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Error deleting publisher: ' + error.message);
    }
};

module.exports = {
    createPublisher,
    readPublisher,
    updatePublisher,
    deletePublisher
};
