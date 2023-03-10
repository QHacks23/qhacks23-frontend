import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useState } from "react";
import Popup from "reactjs-popup";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function GalleryIcon(props) {
  const location = useLocation();
  const [hover, setHover] = useState(false);
  const asset = {
    name: props.name,
    image: props.image,
    description: props.description,
    cost: props.cost,
    geoLoc: props.geoLoc,
    tokenId: props.tokenId
  };

  const navigate = useNavigate();
  return (
    <div
      className="gallery-icon"
      style={styles.galleryIcon}
      onClick={() => {
        console.log(`/${props.baseDir}/${props.viewType}`);
        navigate(`/${props.baseDir}/${props.viewType}`, { state: asset });
      }}
    >
      <img
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        src={props.image ? props.image : "https://via.placeholder.com/150"}
        style={{
          ...styles.image,
          ...(hover ? styles.imageHover : null),
        }}
      />
      <div className="name" style={styles.name}>
        {props.name || "Name"}
      </div>
    </div>
  );
}

export default GalleryIcon;

const styles = {
  galleryIcon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "max(20vw, 200px)",
    height: "max(20vw, 200px)",
    margin: "2rem",
    backgroundColor: "white",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "1rem",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "1rem",
  },
  imageHover: {
    height: "105%",
    width: "105%",
  },
  name: {
    fontFamily: "VT323",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "black",
    margin: "1rem 0",
  },
  hover: {},
};
