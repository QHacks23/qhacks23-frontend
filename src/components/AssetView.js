import React from "react";

function AssetView() {
  return (
    <div style={styles.container}>
      <h1>Asset View</h1>
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
