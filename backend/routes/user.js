const express = require("express");

const router = express.Router();

/*const {
  Deleteusers,
  FindAllUsers,
  FindSinglUsers,
  UpdateUsers,
} = require("../controllers/user");*/

const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);

router.post("/login", userCtrl.login);

router.get("/users", userCtrl.FindAllUsers);

router.get("/users/:id", userCtrl.FindSinglUsers);

router.put("/users/:id", userCtrl.UpdateUsers);

router.delete("/users/:id", userCtrl.Deleteusers);

module.exports = router;
