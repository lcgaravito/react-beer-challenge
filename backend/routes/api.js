const express = require("express");
const router = express.Router();
const products = require("../data/products");
const stockPrice = require("../data/stock-price.js");

router.get("/products", (req, res) => {
  const productsWithStockPrice = products.map((product) => {
    const skusWithStockPrice = product.skus.map((sku) => {
      const stockPriceFound = stockPrice[sku.code];
      return {
        ...sku,
        stock: stockPriceFound ? stockPriceFound.stock : null,
        price: stockPriceFound ? stockPriceFound.price : null,
      };
    });

    const availableSkus = skusWithStockPrice.filter(
      (sku) => sku.stock > 0 && sku.price !== null
    );
    const minPriceSku = availableSkus.reduce((min, sku) => {
      return !min || sku.price < min.price ? sku : min;
    }, null);

    return {
      ...product,
      skus: skusWithStockPrice,
      minPriceSku: minPriceSku
        ? {
            code: minPriceSku.code,
            name: minPriceSku.name,
            price: minPriceSku.price,
          }
        : null,
    };
  });
  res.json(productsWithStockPrice);
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
