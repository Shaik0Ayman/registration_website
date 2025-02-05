const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files (CSS, JS, etc.) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
app.post('/register', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);
    res.json({ message: 'Registration successful!', data: formData });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
