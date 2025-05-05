import express from "express";
import products from "../data/products.js";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to load dynamically stock-price.js
const getStockPrice = async () => {
  const filePath = path.resolve(__dirname, "../data/stock-price.js");
  const { default: stockPrice } = await import(
    filePath + `?cacheBust=${Date.now()}`
  ); // Avoid cache
  return stockPrice;
};

router.get("/products", async (req, res) => {
  const stockPrice = await getStockPrice(); // Load updated data
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

router.get("/products/:id", async (req, res) => {
  const stockPrice = await getStockPrice(); // Load updated data
  const productId = parseInt(req.params.id, 10);
  const product = products.find((item) => item.id === productId);
  if (product) {
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
    product.minPriceSku = minPriceSku
      ? {
          code: minPriceSku.code,
          name: minPriceSku.name,
        }
      : null;
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

router.get("/stock-price/:sku", async (req, res) => {
  const stockPrice = await getStockPrice(); // Load updated data
  const sku = req.params.sku;
  const stockPriceFound = stockPrice[sku];
  if (!stockPriceFound) {
    return res.status(404).json({ message: "Stock price not found" });
  }
  res.json(stockPriceFound);
});

export default router;
