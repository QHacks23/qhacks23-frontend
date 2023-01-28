import React from "react";
import treeimage from "../assets/tree_image.png";
import Auth from "./Auth";
import { loginUser } from "../client/Requests";

import Listingcard from "./ProductPage";
function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    const request = loginUser(user);
    console.log(request);
  };
  return (
    <div style={styles.container}>
      <div>
        <Auth
          style={{
            position: "absolute",
            left: "0",
            marginRight: "100",
            bottom: "0",
            width: "auto",
            height: "100%",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: "0",
          marginLeft: "100",
          bottom: "0",
          width: "auto",
          height: "100%",
        }}
      >
        <img
          src={treeimage}
          alt="tree"
          style={{ width: "auto", height: "100%" }}
        />
      </div>
    </div>
  );
}

export default Login;

const styles = {
  container: {
    backgroundColor: "#34623F",
    width: "100%",
    height: "100vh",
    top: -200,
    border: "none",
    top: 0,
    left: 0,
    position: "absolute",
  },

  form: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    padding: "50px",
  },

  input: {
    width: "100%",
    margin: "10px 0",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    margin: "20px 0",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "#34623F",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
