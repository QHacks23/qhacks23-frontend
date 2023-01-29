import React from "react";
import GalleryIcon from "./GalleryIcon";
import bush from "../assets/bush.png";
import Popup from "reactjs-popup";
import AssetView from "./AssetView";
import { useNavigate } from "react-router-dom";

function Marketplace() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container" style={styles.container}>
        <div className="header" style={styles.header}>
          <div className="title" style={styles.title}>
            <img src={bush} alt="logo" style={{ height: "10vh" }} />
            <h1>Marketplace</h1>
          </div>
        </div>
        <div className="createButton" style={styles.createButton}>
          <button
            style={styles.button}
            onClick={() => {
              navigate("/createAsset");
            }}
          >
            {" "}
            Create Collection{" "}
          </button>
        </div>
        <h2
          style={{
            fontFamily: "Montserrat",
            fontSize: 30,
            margin: "0 2vw",
            marginTop: "2vh",
            marginBottom: "-2vh",
          }}
        >
          Explore
        </h2>
        <hr
          style={{
            color: "rgba(0, 0, 0, 0.7)",
            marginTop: "2rem",
            width: "100%",
          }}
        />
        <div className="content" style={styles.content}>
          <GalleryIcon
            image="https://picsum.photos/200/300"
            name="Collection 1"
          />
          <GalleryIcon
            image="https://picsum.photos/200/300"
            name="Collection 2"
          />
          <GalleryIcon
            image="https://picsum.photos/200/300"
            name="Collection 3"
          />
          <GalleryIcon
            image="https://picsum.photos/200/300"
            name="Collection 4"
          />
          <GalleryIcon
            image="https://picsum.photos/200/300"
            name="Collection 5"
          />
          <GalleryIcon
            image="https://picsum.photos/200/300"
            name="Collection 6"
          />
          <GalleryIcon
            image="https://picsum.photos/200/300"
            name="Collection 6"
          />
          <GalleryIcon
            image="https://picsum.photos/200/300"
            name="Collection 6"
          />
          <GalleryIcon
            image="https://picsum.photos/200/300"
            name="Collection 6"
          />
          <GalleryIcon
            image="https://picsum.photos/200/300"
            name="Collection 6"
          />
          <GalleryIcon
            image="https://picsum.photos/200/300"
            name="Collection 6"
          />
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
    // height: "100vh",
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
    marginTop: "3vh",
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
  createButton: {
    display: "flex",
    flexDirection: "row",
    fontSize: "calc(10px + 3vmin)",
    color: "black",
    justifyContent: "flex-end",
    marginTop: "2vh",
  },
  button: {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius: "12px",
    position: "absolute",
    right: "8vw",
    top: "5vh",
    fontFamily: "VT323",
    fontSize: "calc(5px + 2vmin)",
  },
};
