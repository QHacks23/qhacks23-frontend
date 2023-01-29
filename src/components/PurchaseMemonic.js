import React, { useState } from "react";
// import IPFS from "../client/IPFS";
import {buyAsset, createAsset, sellAsset} from "../client/Requests";
import auth from "../firebase";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PurchaseMnemonic() {
  const navigate = useNavigate();
  const location = useLocation();
  const asset = location.state;
  const [mnemonic, setMnemonic] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = async (e) => {
    console.log("submitting");
    e.preventDefault();
    const userId = auth.currentUser.uid;
    console.log(userId);
    console.log(asset.tokenId)
    console.log(mnemonic)
    const create = await sellAsset(userId, asset.tokenId, mnemonic);
    console.log(create);
    if (create) {
      navigate("/profile");
    } else {
      setError("Incorrect Mnemonic");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputContainer} onSubmit={onSubmit}>
        <h1 style={styles.mainHeader}>Confirm Sale of Asset</h1>
        <h2 style={styles.singleHeader}>Verify Mnemonic</h2>
        <input
          style={styles.singleInput}
          type="text"
          onChange={(e) => {
            setMnemonic(e.target.value);
          }}
        />
        <p style={styles.error}>{error}</p>
        <button style={styles.submitButton} onClick={onSubmit}>
          <h2 style={styles.singleHeader}>Sell Asset</h2>
        </button>
      </div>
    </div>
  );
}

export default PurchaseMnemonic;

const styles = {
  container: {
    backgroundColor: "#3B493C",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
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
  error: {
    fontFamily: "VT323",
    fontSize: "calc(10px + 2vmin)",
    alignItems: "flex-start",
    color: "red",
    marginBottom: "0rem",
  },
};
