const express = require("express");
const http = require("http");
const os = require("os");

const app = express();

app.get("/", (req, res) => {

  var options = {
    host: "api",
    port: 5000,
    path: "/"
  };

  var response = http.get(options, function (response) {
    var bodyChunks = [];
    response.on('data', function (chunk) {
      bodyChunks.push(chunk);
    }).on('end', function () {
      var body = Buffer.concat(bodyChunks);
      console.log('BODY: ' + body);
      res.send("Hello World from javascript on " + os.hostname() + "\nfrontend version 1.0\n" + body);
    })
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});