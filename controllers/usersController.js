var express = require("express");
var userRoutes = express.Router();
var UsersService = require("../services/usersService");
const userObj = new UsersService();


userRoutes.get("/getAllUsers", async (req, res) => {
  res.send(await userObj.getAllUsers().then((res) => res));
});

userRoutes.post("/addNewUser", async (req, res) => {
  const body = req.body;
  console.log(body);
  return res.send({ result: await userObj.addNewUser(body).then((res) => res) });
});
userRoutes.delete("/deleteByName/:name", async (req, res) => {
  console.log(req.params);
  return res
    .status(200)   
    .send({ result: await userObj.deleteUser(req.params.name).then((res) => res) });
});


userRoutes.put("/editUser", (req, res) => {
  const body  = req.body;
  console.log("edit body", body);
  userObj.updateUser(body);
  return res.status(200).json({
    message: "updated successfully!",
  });
});
module.exports = userRoutes;
