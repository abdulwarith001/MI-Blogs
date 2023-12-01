require('dotenv').config()
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
})

const port = process.env.PORT
app.listen(port, () => console.log("Server started..."));
