const express = require("express")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Budget App Server Running")
})

const transactionController = require("./controllers/transactionsController")
app.use("/transactions", transactionController)

module.exports = app;