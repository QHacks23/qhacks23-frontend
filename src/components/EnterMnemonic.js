import React, { useState } from "react";
// import IPFS from "../client/IPFS";
import { createAsset } from "../client/Requests";
import auth from "../firebase";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EnterMnemonic() {
  const navigate = useNavigate();
  const location = useLocation();
  const newAsset = location.state;
  const [mnemonic, setMnemonic] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = async (e) => {
    console.log("submitting");
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", newAsset.image);
    // formData.append(
    //   "pinataMetadata",
    //   JSON.stringify({
    //     name: newAsset.name,
    //     carbonClass: newAsset.carbonClass,
    //     description: newAsset.description,
    //     cost: newAsset.cost,
    //     size: newAsset.size,
    //     geoLoc: newAsset.geoLoc,
    //   })
    // );
    // formData.append("pinataOptions", JSON.stringify({ cidVersion: 0 }));

    const resFile = await axios({
      method: "post",
      // url: `${process.env.PINATA_BASE}/pinning/pinFileToIPFS`,
      url: "http://192.168.2.20:8080/upload",
      data: formData,
      maxBodyLength: "Infinity",
      headers: {
        // pinata_api_key: "26ea08629b6b4dbe6f47",
        // pinata_secret_api_key:
        //   "ee9b724e917d4927639bd4e6fcd33c54925464492ad95928f2cfb684905e6b16",
        "Content-Type": "multipart/form-data; boundary=${formData._boundary}",
      },
    });

    const ImgHash = resFile.data.IpfsHash;
    console.log(ImgHash);

    // const updates = JSON.stringify({
    //   ipfsPinHash: ImgHash,
    //   name: newAsset.name,
    //   keyvalues: {
    //     carbonClass: newAsset.carbonClass,
    //     description: newAsset.description,
    //     cost: newAsset.cost,
    //     size: newAsset.size,
    //     geoLoc: newAsset.geoLoc,
    //   },
    // });

    // const updateRes = await axios({
    //   method: "put",
    //   url: "https://api.pinata.cloud/pinning/hashMetadata",
    //   headers: {
    //     pinata_api_key: "26ea08629b6b4dbe6f47",
    //     pinata_secret_api_key:
    //       "ee9b724e917d4927639bd4e6fcd33c54925464492ad95928f2cfb684905e6b16",
    //     "Content-Type": "application/json",
    //   },
    //   data: updates,
    // });

    const data = JSON.stringify({
      // pinataMetadata: {
      //   name: `JSON-${newAsset.name}`,
      // },
      // pinataOptions: {
      //   cidVersion: 1,
      // },
      // pinataContent: {
      name: newAsset.name,
      carbonClass: newAsset.carbonClass,
      description: newAsset.description,
      cost: newAsset.cost,
      size: newAsset.size,
      geoLoc: newAsset.geoLoc,
      img: ImgHash,
      // },
    });

    const formDataJson = new FormData();
    formDataJson.append("text", data);

    const jsonFile = await axios({
      method: "post",
      // url: `${process.env.PINATA_BASE}/pinning/pinJSONToIPFS`,
      url: "http://192.168.2.20:8080/upload",
      data: formDataJson,
      headers: {
        // pinata_api_key: "26ea08629b6b4dbe6f47",
        // pinata_secret_api_key:
        //   "ee9b724e917d4927639bd4e6fcd33c54925464492ad95928f2cfb684905e6b16",
        // "Content-Type": "application/json",
        "Content-Type": "multipart/form-data; boundary=${formData._boundary}",
      },
    });

    console.log(jsonFile.data.IpfsHash);

    const userId = auth.currentUser.uid;
    console.log(userId);

    console.log(newAsset.cost);
    const create = await createAsset(
      jsonFile.data.IpfsHash,
      mnemonic,
      parseInt(newAsset.cost),
      userId
    );
    console.log(create);
    if (create) {
      navigate("/Marketplace");
    } else {
      setError("Incorrect Mnemonic");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputContainer} onSubmit={onSubmit}>
        <h1 style={styles.mainHeader}>Confirm Creation</h1>
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
          <h2 style={styles.singleHeader}>Create Asset</h2>
        </button>
      </div>
    </div>
  );
}

export default EnterMnemonic;

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
