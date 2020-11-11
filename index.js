const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.post("/slack-hooks", (req, res) => {
  console.log(req);
});

app.listen(port, () => console.log("were up"));
