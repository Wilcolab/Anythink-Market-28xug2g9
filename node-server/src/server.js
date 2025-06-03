

const express = require('express');

const app = express();
const PORT = 8001;

app.use(express.json());

const tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

/**
 * Root endpoint.
 * 
 * @route GET /
 * @returns {string} 200 - Returns a greeting message.
 */
app.get('/', (req, res) => {
    res.send('Hello World');
});

/**
 * Add a task.
 * 
 * @route POST /tasks
 * @param {Object} req.body - The request body.
 * @param {string} req.body.text - The text of the task to add.
 * @returns {Object} 200 - Returns a success message.
 * @returns {Object} 400 - Returns an error message if task text is missing or invalid.
*/
app.post('/tasks', (req, res) => {
    const { text } = req.body;
    if (typeof text !== 'string' || !text.trim()) {
        return res.status(400).json({ message: 'Task text is required' });
    }
    tasks.push(text);
    res.json({ message: 'Task added successfully' });
});


/**
 * Get all tasks.
 * 
 * @route GET /tasks
 * @returns {Object} 200 - Returns an object containing the list of tasks.
*/
app.get('/tasks', (req, res) => {
    res.json({ tasks });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});