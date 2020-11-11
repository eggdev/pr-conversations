const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { IncomingWebhook } = require("@slack/webhook");

const url = process.env.SLACK_WEBHOOK_URL;
const webhook = new IncomingWebhook(url);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const port = process.env.PORT || 5000;

app.post("/slack-hooks", async (req) => {
  const { body } = req;
  console.log(body);
  //   await webhook.send({
  //       text:
  //   })
});

app.listen(port, () => {});
