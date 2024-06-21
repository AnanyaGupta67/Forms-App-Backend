import express = require('express');
import path = require('path');
import fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/ping', (req: express.Request, res: express.Response) => {
    res.send('True');
});

app.post('/submit', (req: express.Request, res: express.Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;

    const submission = { name, email, phone, github_link, stopwatch_time };
    const submissions = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8'));
    submissions.push(submission);
    fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(submissions, null, 2));

    res.status(200).send('Submission received');
});

app.get('/read', (req: express.Request, res: express.Response) => {
    const { index } = req.query;
    const submissions = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8'));

    if (index && typeof index === 'string') {
        const idx = parseInt(index, 10);
        if (idx >= 0 && idx < submissions.length) {
            res.json(submissions[idx]);
        } else {
            res.status(404).send('Submission not found');
        }
    } else {
        res.status(400).send('Invalid index parameter');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
