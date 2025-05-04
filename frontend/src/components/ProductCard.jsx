import React from "react";
import plusIcon from "../assets/icons/plus-icon.svg";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(
      `/products/${product.id}-${product.brand
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    );
  };
  return (
    <div
      onClick={handleClick}
      className="flex flex-col justify-between items-center bg-white rounded-lg cursor-pointer shadow-md hover:shadow-2xl"
    >
      <h2 className="text-xl text-center font-bold mt-1 p-1">
        {product.brand}
      </h2>
      <img
        src={product.image}
        alt={product.brand}
        className="w-full h-48 object-scale-down rounded-t-lg"
      />
      <div className="flex justify-between items-center w-full">
        <p className="text-lg font-semibold px-2">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(Number(product.minPriceSku.price) * 0.01)}
        </p>

        <button
          type="button"
          className="flex flex-col cursor-pointer rounded-tl-lg rounded-br-lg p-2 shadow-md hover:shadow-xl bg-orange-400 hover:bg-orange-500"
        >
          <img src={plusIcon} alt="Menu Icon" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
