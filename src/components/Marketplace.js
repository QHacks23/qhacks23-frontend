import React, {useState, useEffect} from "react";
import GalleryIcon from "./GalleryIcon";
import bush from "../assets/bush.png";
import Popup from "reactjs-popup";
import AssetView from "./AssetView";
import {getAssets} from "../client/Requests";


function Marketplace() {
  const [listings, setListings] = useState([])

  const getAllListings = async () => {
    const rslt = await getAssets()
    setListings(rslt.nft)
  }

  useEffect(() => {
    getAllListings().then(() => { console.log("good")})
  });

  return (
    <div>
      <div className="container" style={styles.container}>
        <div className="header" style={styles.header}>
          <div className="title" style={styles.title}>
            <img src={bush} alt="logo" style={{ height: "10vh" }} />
            <h1>Marketplace</h1>
          </div>
        </div>
        <h2
          style={{ fontFamily: "Montserrat", fontSize: 30, margin: "0 10vw" }}
        >
          Explore
        </h2>
        <hr
          style={{
            color: "rgba(0, 0, 0, 0.7)",
            marginTop: "2rem",
            width: "77%",
          }}
        />
        <div className="content" style={styles.content}>
          {listings.map((item) => {return <GalleryIcon image="https://picsum.photos/200/300" name={item.token}/>})}
        </div>
      </div>
    </div>
  );
}

export default Marketplace;

const styles = {
  container: {
    fontFamily: "Montserrat",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    color: "black",
    fontSize: "calc(10px + 2vmin)",
    padding: "0 5vw",
  },
  header: {
    fontFamily: "VT323",
    display: "flex",
    flexDirection: "column",
    fontSize: "calc(20px + 2vmin)",
    color: "black",
    margin: "0 7vw",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    fontSize: "calc(20px + 2vmin)",
    color: "black",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    fontSize: "calc(10px + 3vmin)",
    color: "black",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};
