import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import backIcon from "../assets/icons/back-icon.svg";
import moreIcon from "../assets/icons/more-icon.svg";
import bagIcon from "../assets/icons/bag-icon.svg";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [selectedSKU, setSelectedSKU] = useState(null);
  const [stockPrice, setStockPrice] = useState(null);
  const [loadingStockPrice, setLoadingStockPrice] = useState(false);
  const [loadingProduct, setLoadingProduct] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoadingProduct(true);
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/products/" + id
        );
        const product = await response.json();
        setSelectedSKU(product.minPriceSku?.code);
        setData(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoadingProduct(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchStockPrice = async () => {
      if (selectedSKU) {
        try {
          setLoadingStockPrice(true);
          const response = await fetch(
            import.meta.env.VITE_API_URL + "/stock-price/" + selectedSKU
          );
          const stockPriceData = await response.json();
          setStockPrice(stockPriceData);
        } catch (error) {
          console.error("Error fetching stock price:", error);
        } finally {
          setLoadingStockPrice(false);
        }
      }
    };

    fetchStockPrice();
  }, [selectedSKU]);

  return (
    <div className="product-detail-page">
      <div className="nav-bar">
        <button
          type="button"
          className="btn"
          onClick={() => navigate("/products")}
        >
          <img src={backIcon} alt="Menu Icon" width={24} height={24} />
        </button>
        <p className="nav-title">Detail</p>
        <button type="button" className="btn">
          <img src={moreIcon} alt="Menu Icon" width={24} height={24} />
        </button>
      </div>

      {data ? (
        <div className="product-details">
          <div className={`product-image ${loadingProduct ? "skeleton" : ""}`}>
            <img src={data?.image} alt={data?.brand} />
          </div>
          <div className="product-info">
            <div className="product-header">
              <div className="product-name">
                <h1>{data.brand}</h1>
                <p>
                  Origin: {data.origin} | Stock:{" "}
                  <span className={loadingStockPrice ? "skeleton" : ""}>
                    {stockPrice?.stock}
                  </span>
                </p>
              </div>
              <div
                className={`product-price ${
                  loadingStockPrice ? "skeleton" : ""
                }`}
              >
                <h2>
                  {stockPrice?.price
                    ? Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(Number(stockPrice.price) * 0.01)
                    : "Loading..."}
                </h2>
              </div>
            </div>
            <div className="product-description">
              <h3>Description</h3>
              <div className="description-text">
                <p className={expanded ? "expanded" : ""}>
                  Information: {data.information}
                </p>
                <button
                  className="read-more-btn"
                  onClick={() => setExpanded((prev) => !prev)}
                >
                  {expanded ? "Read less" : "Read more"}
                </button>
              </div>
            </div>
            <h3>Size</h3>
            <div style={{ display: "flex" }}>
              {data.skus.map((sku) => (
                <button
                  className={`btn-outline ${
                    selectedSKU === sku.code ? "active" : ""
                  }`}
                  key={sku.code}
                  onClick={() => {
                    setSelectedSKU(sku.code);
                  }}
                >
                  {sku.name}
                </button>
              ))}
            </div>
            <div className="product-actions">
              <button type="button" className="btn btn-primary-outline">
                <img src={bagIcon} alt="Bag Icon" width={24} height={24} />
              </button>
              <button disabled={!stockPrice?.stock} className="btn btn-primary">
                {stockPrice?.stock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
};

export default ProductDetailPage;
