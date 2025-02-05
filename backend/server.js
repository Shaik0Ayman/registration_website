const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from "public" (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve frontend (if hosting it from backend)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
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
