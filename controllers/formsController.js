var express = require("express");
var exchangeRoutes = express.Router();
var FormsService = require("../services/formsService");
const formObj = new FormsService();


exchangeRoutes.get("/getAllForms", async (req, res) => {
  res.send(await formObj.getAllForms().then((res) => res));
});

exchangeRoutes.post("/send", async (req, res) => {
  const body = req.body;
  console.log(body);
  return res.send({ result: await formObj.addForm(body).then((res) => res) });
});


module.exports = exchangeRoutes;
