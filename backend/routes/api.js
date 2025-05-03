const express = require("express");
const router = express.Router();
const products = require("../data/products");
const stockPrice = require("../data/stock-price.js");

router.get("/products", (req, res) => {
  res.json(products);
});

router.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((item) => item.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

router.get("/stock-price/:sku", (req, res) => {
  const sku = req.params.sku;
  const stockPriceFound = stockPrice[sku];
  if (!stockPriceFound) {
    return res.status(404).json({ message: "Stock price not found" });
  }
  res.json(stockPriceFound);
});

module.exports = router;
