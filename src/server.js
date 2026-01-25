const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = app;
