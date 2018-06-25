const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

//define middelware

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//API Routes
app.use(routes);

//Send other requests to React
//This should be the last route described
app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "./client/build/index.html"));
});

mongoose.connect((process.env.MONGODB_URI) || "mongodb://localhost/nytreact");

app.listen(PORT, () => {
    console.log (`🌎 ==> Server now on port ${PORT}!`);
});