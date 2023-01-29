import React from "react";
import ProductPage from "./ProductPage";
import Listingcard from "./ProductPage";
import tree_view from "../assets/tree_view.png";
import { useLocation } from "react-router-dom";

function AssetView() {
  const location = useLocation();
  const asset = location.state;

  return <div style={styles.container}>{<ProductPage nft={asset} />}</div>;
}

export default AssetView;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    color: "black",
    fontSize: "calc(10px + 2vmin)",
    padding: "0 5vw",
  },
};
