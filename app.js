let express = require("express");
let app = express();
let bodyParser = require("body-parser");
var cors = require('cors')
let formsRouter = require("./controllers/formsController");

app.use(bodyParser.json());
app.use(cors());

app.use("/forms", formsRouter);
app.listen(3004, () => {
  console.log("app is running on port 3004");
});
