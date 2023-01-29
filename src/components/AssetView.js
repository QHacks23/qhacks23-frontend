import React from "react";
import ProductPage from "./ProductPage";
import Listingcard from "./ProductPage";
import tree_view from "../assets/tree_view.png";

const testNFT = {
  imageUrl: tree_view,
  name: "Forest Lot #1",
  description: "This is a lot in the Alberta Dolan Forest",
  price: "100",
  location: "Alberta, CA",
};

function AssetView() {
  const [nft, setNft] = React.useState({});

  const getDataFromCID = async (cid) => {
    const response = await fetch(`https://ipfs.io/ipfs/${cid}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    setNft(data);
  };

  React.useEffect(() => {
    // const cid = window.location.pathname.split("/")[2];
    const cid = "bafyreihpdg4nkdsb7vvaft7oqiixg2n5y45d3ufjlhxcvgk5dan4l3odya";
    getDataFromCID(cid);
  }, []);

  return (
    <div style={styles.container}>
      <ProductPage nft={testNFT} />
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
