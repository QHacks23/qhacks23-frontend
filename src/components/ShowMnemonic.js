import React, { useState } from "react";
import IPFS from "../client/IPFS";
import { createAsset } from "../client/Requests";
import auth from "../firebase";
import {redirect, useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ShowMnemonic() {
    const navigate = useNavigate();
    const location = useLocation();
    const mnemonic = location.state;
    const [error, setError] = useState(false);
    console.log(mnemonic)
    const onSubmit = async (e) => {
        navigate("/profile")
    };

    return (
        <div style={styles.container}>
            <div style={styles.inputContainer} onSubmit={onSubmit}>
                <h1 style={styles.mainHeader}>This is your Private Key</h1>
                <h2 style={styles.singleHeader}>DO NOT Loose It! Write it down</h2>
                <h2 style={styles.singleHeader}> {mnemonic} </h2>
                <p style={styles.error}>{error}</p>
                <button style={styles.submitButton} onClick={onSubmit}>
                    <h2 style={styles.singleHeader}>OK</h2>
                </button>
            </div>
        </div>
    );
}

export default ShowMnemonic;

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
