const express = require("express");
const router = express.Router();
const transactionsArray = require("../models/transaction");
const { nanoid } = require("nanoid")

router.get("/", (req, res) => {
  res.status(200).send(transactionsArray);
});

const err = (id) => `Can not find transaction with id: ${id}!`;

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const transaction = transactionsArray.find(
    (transaction) => transaction.id === id
  );
  if (transaction) {
    res.status(200).send(transaction);
  } else {
    res.status(404).json({ error: err(id) });
  }
});

router.post("/", (req, res) => {
  const currentTransaction = { id: nanoid(2), ...req.body }
  transactionsArray.push(currentTransaction)
  res.status(201).send(transactionsArray[transactionsArray.length - 1])
})

module.exports = router;
