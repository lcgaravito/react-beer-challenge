import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";

const ProductListPage = () => {
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + "/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const products = await response.json();
      setData(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>ProductListPage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quia
        maiores ex laborum fugit repudiandae qui ad atque ea eius illum quis
        nesciunt nam quibusdam incidunt aliquid, tempore cum hic?
      </p>
      {data.length > 0 ? (
        <ul>
          {data.map((product) => (
            <li key={product.id}>
              <Link
                to={`/products/${product.id}-${product.brand
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {product.brand}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ProductListPage;
