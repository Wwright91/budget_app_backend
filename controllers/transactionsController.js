const express = require("express");
const router = express.Router();
const transactionsArray = require("../models/transaction");

router.get("/", (req, res) => {
  res.status(200).send(transactionsArray);
});

module.exports = router;
