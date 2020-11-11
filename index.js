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

app.post("/slack-hooks", async (req, res) => {
  const { body } = req;
  const { comment, repository, pull_request } = body;
  await webhook.send({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `New Comment in <${comment.html_url}|${repository.name}#${pull_request.number}>`,
        },
      },
    ],
  });
  return res.json(body);
});

app.listen(port, () => {});
