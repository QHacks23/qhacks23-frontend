import React from "react";
import ProductPage from "./ProductPage";
import Listingcard from "./ProductPage";
import tree_view from "../assets/tree_view.png";

const testNFT = {
  imageUrl: tree_view,
  name: "Forest Lot #1",
  description: "This is a lot in the Alberta Dolan Forest",
  price: "100",
  location: "Alberta, CA"


}

function AssetView() {
  return (
    <div style={styles.container}>
      <ProductPage nft={testNFT}/>
    </div>
  );
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
