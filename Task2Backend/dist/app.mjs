import express from 'express';
import fs from 'fs';
const app = express();
const PORT = 3000; // Choose any port you prefer
app.use(express.json());
// Endpoint: /ping
app.get('/ping', (req, res) => {
    res.send('True');
});
// Endpoint: /submit
app.post('/submit', (req, res) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    // Logic to save submission to db.json (use fs.writeFileSync or fs.writeFile)
    // Example:
    const submission = { name, email, phone, github_link, stopwatch_time };
    const submissions = JSON.parse(fs.readFileSync('./src/db.json', 'utf-8'));
    submissions.push(submission);
    fs.writeFileSync('./src/db.json', JSON.stringify(submissions, null, 2));
    res.status(200).send('Submission received');
});
// Endpoint: /read
app.get('/read', (req, res) => {
    const { index } = req.query;
    const submissions = JSON.parse(fs.readFileSync('./src/db.json', 'utf-8'));
    if (index && typeof index === 'string') {
        const idx = parseInt(index, 10);
        if (idx >= 0 && idx < submissions.length) {
            res.json(submissions[idx]);
        }
        else {
            res.status(404).send('Submission not found');
        }
    }
    else {
        res.status(400).send('Invalid index parameter');
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
