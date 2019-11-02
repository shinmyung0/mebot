const express = require("express");
const path = require("path");
const dialogflow = require("./api/dialogflowClient");

const app = express();

const frontendDir = "build";
const port = process.env.PORT || 4000;
const askApiPath = process.env.REACT_APP_ASK_API || "/api/ask";

app.use(express.static(path.join(__dirname, frontendDir)));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, frontendDir, "index.html"));
});

app.post(askApiPath, (req, res) => {
  if (req.body) {
    console.log(
      `[${new Date().toUTCString()}] Got a message from frontend: ${JSON.stringify(
        req.body
      )}`
    );

    dialogflow
      .sayToBot(req.body.message, req.body.sessionId)
      .then(botResponse => {
        console.log(
          `[${new Date().toUTCString()}] Received bot response: ${JSON.stringify(
            botResponse
          )}`
        );
        return res.send(botResponse);
      });
  } else {
    console.error(
      `[${new Date().toUTCString()}] No body in POST request to ${askApiPath}`
    );
    res.status(400).send("Bad Request");
  }
});

console.log(`Starting server on PORT ${port}`);

app.listen(port);
