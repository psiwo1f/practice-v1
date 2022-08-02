const express = require("express");
const mongoose = require("mongoose");

const [uname, pass, dbServer, dbName] = ["root", "example", "mongo-db", "db-1"];

const mongoURI = `mongodb://${uname}:${pass}@${dbServer}:27017/?authSource=admin`;

// const mongoURI = `mongodb://root:example@mongo-db:27017/?authSource=admin`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection

db.on('error', (err) => {
    console.log('err... ', err);
})

db.once('open', () => {
    console.log('Db connected...!')
})
const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
    res.send('hello server!5');
});

app.listen(PORT, () => {
  console.log("Server listening on PORT ", PORT);
});
