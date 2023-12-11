const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Defining API endpoints
app.get('/api/players', async (req, res) => {
  try {
    const response = await axios.get('https://www.balldontlie.io/api/v1/players');
    const players = response.data;
    res.json(players);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});