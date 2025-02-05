const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Default route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Registration Backend!');
});

// Endpoint to handle form submissions
app.post('/register', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);
    res.json({ message: 'Registration successful!', data: formData });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
