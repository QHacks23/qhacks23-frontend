import React, { useState } from "react";

function CreateAsset() {
  const [name, setName] = useState("");
  const [carbonClass, setCarbonClass] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [size, setSize] = useState("");
  const [geoLoc, setGeoLoc] = useState("");
  const [img, setImg] = useState("");

  const onSubmit = (e) => {
    console.log("submitting");
    e.preventDefault();
    if (
      name == "" ||
      carbonClass == "" ||
      description == "" ||
      cost == "" ||
      size == "" ||
      geoLoc == "" ||
      img == ""
    ) {
      alert("Please fill out all fields");
      return;
    }

    const newAsset = {
      name,
      carbonClass,
      description,
      cost,
      size,
      geoLoc,
      img,
    };
  };

  return (
    <div style={styles.container}>
      <form style={styles.inputContainer}>
        <h1 style={styles.mainHeader}>Create Asset</h1>
        <h2 style={styles.singleHeader}>Asset Name</h2>
        <input
          style={styles.singleInput}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h2 style={styles.singleHeader}>Asset Description</h2>
        <input
          style={styles.singleInput}
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <h2 style={styles.singleHeader}>Asset Price</h2>
        <input
          style={styles.singleInput}
          type="text"
          onChange={(e) => {
            setCost(e.target.value);
          }}
        />
        <h2 style={styles.singleHeader}>Asset Quantity</h2>
        <input
          style={styles.singleInput}
          type="text"
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
        <h2 style={styles.singleHeader}>Asset Category</h2>
        <input
          style={styles.singleInput}
          type="text"
          onChange={(e) => {
            setCarbonClass(e.target.value);
          }}
        />
        <h2 style={styles.singleHeader}>Asset Location</h2>
        <input
          style={styles.singleInput}
          type="text"
          onChange={(e) => {
            setGeoLoc(e.target.value);
          }}
        />
        <h2 style={styles.singleHeader}>Upload Image</h2>
        <div className="file-uploader">
          <input type="file" onChange={() => {}} />
        </div>
        <button style={styles.submitButton} onClick={onSubmit}>
          <h2 style={styles.singleHeader}>Create Asset</h2>
        </button>
      </form>
    </div>
  );
}

export default CreateAsset;

const styles = {
  container: {
    backgroundColor: "#3B493C",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // height: "100vh",
    color: "white",
    fontSize: "calc(10px + 2vmin)",
    padding: "5vh 5vw",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "1rem",
    width: "75%",
    minHeight: "50vh",
    color: "black",
    fontSize: "calc(10px + 2vmin)",
    padding: "5vh 5vw",
  },
  singleHeader: {
    fontFamily: "VT323",
    fontSize: "calc(10px + 2vmin)",
    // margin: "0 10vw",
    // marginLeft: "-10vw",
    alignItems: "flex-start",
  },
  mainHeader: {
    fontFamily: "VT323",
    fontSize: "calc(30px + 2vmin)",
    margin: "0 10vw",
    left: "-10vw",
  },
  singleInput: {
    width: "80%",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    margin: "0.5rem",
    fontFamily: "VT323",
  },
  submitButton: {
    backgroundColor: "#3B493C",
    color: "white",
    width: "80%",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    margin: "0.5rem",
    fontFamily: "VT323",
    // paddingBottom: "1rem",
  },
};
