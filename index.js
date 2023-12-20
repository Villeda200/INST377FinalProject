const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000



app.use(bodyParser.json())

// this allows us to use all files in the public folder
app.use(express.static(__dirname + '/public'))

// GET, which serves the index.html page
app.get("/", (req, res) => {
    res.sendFile("public/html/about.html", { root: __dirname })
})

// GET, which serves the about.html page
app.get("/home", (req, res) => {
    res.sendFile("public/html/home.html", { root: __dirname })
})

// GET, which serves the catalog.html page
app.get("/help", (req, res) => {
    res.sendFile("public/html/help.html", { root: __dirname })
})


// GET, which serves the index.html page
app.get("/vinnyPhoto", (req, res) => {
  res.sendFile("public/images/vinnyPhoto.jpg", { root: __dirname })
})

// GET, which serves the index.html page
app.get("/davidPhoto", (req, res) => {
  res.sendFile("public/images/davidPhoto.jpg", { root: __dirname })
})

// GET, which serves the index.html page
app.get("/chideraPhoto", (req, res) => {
  res.sendFile("public/images/chideraPhoto.jpg", { root: __dirname })
})


// example GET endpoint, which returns the current date
app.get("/current_date", (req, res) => {
  res.send(new Date())
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});