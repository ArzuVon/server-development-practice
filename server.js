"use strict";

const express = require("express");

const hello = (req, res) => {
    res.status(200).send("Hello, World"); //this handle app.get invokes the hello ad the / gets called and it sends hback a 200 okay and then sends the hello world
};

const data = (req, res) => {
    res.status(200).send({
        name: "Von",
        role: "Developer",
    });
};
const app = express();

app.get("/", hello); //handle happens at the end and gives data back. Endpoint to port 3000

app.get("/data", data);
// ---

function start(port){
    app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
    app,
    start,
};
