const express = require('express')
const addNewUsers = required('../controller/user')
const router = express.Router()

//create
router.post("/register", async (req, res) => {
  const data = await Users.create(req.body);
});

//read
router.get("/users", async (req, res) => {
  const data = await Users.find();
  res.json({ usersList: data });
});

//update
router.put("/change-password/:id", async (req, res) => {
  const data = await Users.findByIdAndUpdate(req.params.id, req.body);
});

//delete
router.delete("/users/:id", async (req, res) => {
  const data = await Users.findByIdAndDelete(req.params.id);
});

exports.default = router
