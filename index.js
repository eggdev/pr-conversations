const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { IncomingWebhook } = require("@slack/webhook");

const url = process.env.SLACK_WEBHOOK_URL;
const webhook = new IncomingWebhook(url);

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", () => {
  console.log("here");
});

app.post("/slack-hooks", async (req) => {
  const { body } = req;
  console.log(body);
  //   await webhook.send({
  //       text:
  //   })
});

app.listen(port, () => console.log("were up"));
