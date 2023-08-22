const express = require('express');
const app = express();


app.use(express.json());


app.post('/sort', (req, res) => {
    try {
        const numbers = req.body.numbers;

        if (!numbers || !Array.isArray(numbers)) {
            return res.status(400).json({ error: 'Invalid ' });
        }

        const sortedNumbers = numbers.slice().sort((a, b) => a - b);

        res.json({ sortedNumbers });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred.' });
    }
});

const PORT = 8008;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
