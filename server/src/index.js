const express = require("express");
const app = express();
require("dotenv").config();

const userRoutes = require('./routes/user')

const dbConnect = require("./connection/dbConnect");

app.use(express.json());
app.use("/", userRoutes)

dbConnect();
const User = require('./model/user')

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
