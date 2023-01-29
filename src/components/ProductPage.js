import React from "react";
import "./ProductPage.css";
import QuantityButton from "./QuantityButton";
import tree_view from "../assets/tree_view.png";
import { redirect, useNavigate } from "react-router-dom";

function ProductPage({ nft }) {
  const navigate = useNavigate();
  const initBuyAsset = async (e) => {
    e.preventDefault();
    const buyJson = {
      tokenId: nft.tokenId,
    };
    navigate("/buyMnemonic", { state: buyJson });
  };
  return (
    <div className="product-page">
      <div className="product-image">
        <img src={nft.image || tree_view} alt={nft.name} />
      </div>
      <div className="product-info">
        <h2 className="product-name">Name: {nft.name}</h2>
        <p className="product-description">Desc: {nft.description}</p>
        <div className="product-details">
          <span className="product-price">Cost: {nft.cost} HBAR</span>
        </div>
        <p className="Product-description">Loc: {nft.geoLoc}</p>
        <button className="buy-button" onClick={initBuyAsset}>
          Buy
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
