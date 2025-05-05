import React, { useEffect } from "react";
import { useState } from "react";
import userImg from "../assets/icons/User.jpg";
import menuIcon from "../assets/icons/menu-icon.svg";
import { ProductCard } from "../components";

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
    <div className="p-4">
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="flex flex-col bg-white cursor-pointer rounded-lg p-2 shadow-md hover:shadow-xl"
        >
          <img src={menuIcon} alt="Menu Icon" width={24} height={24} />
        </button>
        <img
          className="rounded-full"
          src={userImg}
          alt="Logo"
          width={40}
          height={40}
        />
      </div>
      <div className="mt-8">
        <p className="text-gray-500">Hi Mr. Michael,</p>
        <h1 className="text-2xl mb-2">Welcome Back!</h1>
        <p className="font-bold mb-2">Our Products</p>
        {data.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
