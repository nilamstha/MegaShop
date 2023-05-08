const express = require("express");
const app = express();
require("dotenv").config();

const userRoute = require('./routes/user')
const dbConnect = require("./connection/dbConnect");

app.use(express.json());
app.use("/", userRoute)

dbConnect();
const User = require('./model/user')

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
