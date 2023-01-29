import React from "react";
import "./ProductPage.css";
import QuantityButton from "./QuantityButton";

function ProductPage({ nft }) {
  return (
    <div className="product-page">
      <div className="product-image">
        <img src={nft.imageUrl} alt={nft.name} />
      </div>
      <div className="product-info">
        <h2 className="product-name">{nft.name}</h2>
        <p className="product-description">{nft.description}</p>
        <div className="product-details">
          <span className="product-price">{nft.price} HBAR</span>
        </div>
        <p className="Product-description">{nft.location}</p>
        <button className="buy-button">Buy</button>
      </div>
    </div>
  );
}

export default ProductPage;
