import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/products/" + id
        );
        const product = await response.json();
        setData(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      <button onClick={() => navigate("/products")}>Back</button>
      <h1>ProductDetailPage</h1>
      {data ? (
        <div>
          <h2>{data.brand}</h2>
          <img src={data.image} alt={data.brand} width={200} />
          <p>Style: {data.style}</p>
          <p>Substyle: {data.substyle}</p>
          <p>ABV: {data.abv}</p>
          <p>Origin: {data.origin}</p>
          <p>Information: {data.information}</p>
          <h3>Available SKUs:</h3>
          <ul>
            {data.skus.map((sku) => (
              <li key={sku.code}>{sku.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
};

export default ProductDetailPage;
