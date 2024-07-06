const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Budget App Server Running");
});

const transactionController = require("./controllers/transactionsController");
app.use("/transactions", transactionController);

module.exports = app;
