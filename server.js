const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/advice', async(req, res)=>{
    try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching advice' });
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})