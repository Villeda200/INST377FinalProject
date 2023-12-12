const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const port = 3000;

// this allows us to use all files in the public folder
app.use(express.static(__dirname + '/public'))

// GET, which serves the index.html page
app.get("/", (req, res) => {
  res.sendFile("public/html/index.html", { root: __dirname })
})

// GET, which serves the about.html page
app.get("/about", (req, res) => {
  res.sendFile("public/html/about.html", { root: __dirname })
})

// GET, which serves the catalog.html page
app.get("/catalog", (req, res) => {
  res.sendFile("public/html/catalog.html", { root: __dirname })
})

// example GET endpoint, which returns the current date
app.get("/current_date", (req, res) => {
  res.send(new Date())
})

app.listen(port)

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