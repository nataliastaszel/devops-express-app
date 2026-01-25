const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

const products = [
  { id: 1, name: "Keyboard", price: 100 },
  { id: 2, name: "Mouse", price: 50 },
];

app.get("/products", (req, res) => {
  res.json(products);
});

module.exports = app;
