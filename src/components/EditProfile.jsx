import React, {useState, useEffect} from "react";
import GalleryIcon from "./GalleryIcon";
import bush from "../assets/bush.png";
import Tabs from "../components/Tabs";
import "./EditProfile.css"
import Popup from "reactjs-popup";
import AssetView from "./AssetView";
import {getAssetOrders, getUser, getUserAssets} from "../client/Requests";
import auth from "../firebase"
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [assets, setAssets] = useState([])
  const [buyRequests, setBuyRequests] = useState([])
  const [transactions, setTransactions] = useState([])
  const [user, setUser] = useState({})

  const getMyAssets = async (userId) => {
    const rslt = await getUserAssets(userId)
    for (const asset of rslt.nft) {
      try {
        const assetQuery = await fetch(
          // `https://gateway.pinata.cloud/ipfs/${asset.body}`
          `http://192.168.2.20:8080/${asset.body}`
        );
        const assetData = await assetQuery.json();
        asset.body = assetData;
        // asset.body.image = `https://gateway.pinata.cloud/ipfs/${asset.body.img}`;
        asset.body.image = `http://192.168.2.20:8080/${asset.body.img}`
        setAssets((assets) => [...assets, asset]);
        console.log(asset)
      } catch (err) {
        setAssets((assets) => [...assets, asset]);
        console.log(err);
      }
    }
  }

  const getUserDetails = async (userId) => {
    const userQuery = await getUser(userId)

    return userQuery.data
  }

  const getOrders = async (userId) => {
    const orders = await getAssetOrders(userId)
    return orders
  }

  const getSellTransactions= async (orders) => {
    for (const asset of orders.data.sellOpportunities.tokenIds) {
      try {
        const assetQuery = await fetch(
            // `https://gateway.pinata.cloud/ipfs/${asset.body}`
            `http://192.168.2.20:8080/${asset.body}`
        );
        const assetData = await assetQuery.json();
        asset.body = assetData;
        // asset.body.image = `https://gateway.pinata.cloud/ipfs/${asset.body.img}`;
        asset.body.image = `http://192.168.2.20:8080/${asset.body.img}`
        setTransactions((assets) => [...assets, asset]);
      } catch (err) {
        setTransactions((assets) => [...assets, asset]);
        console.log(err);
      }
    }
  }

  const getBuyRequests= async (orders) => {
    for (const asset of orders.data.buyOrders.tokenIds) {
      try {
        const assetQuery = await fetch(
            // `https://gateway.pinata.cloud/ipfs/${asset.body}`
            `http://192.168.2.20:8080/${asset.body}`
        );
        const assetData = await assetQuery.json();
        asset.body = assetData;
        // asset.body.image = `https://gateway.pinata.cloud/ipfs/${asset.body.img}`;
        asset.body.image = `http://192.168.2.20:8080/${asset.body.img}`
        setBuyRequests((assets) => [...assets, asset]);
      } catch (err) {
        setBuyRequests((assets) => [...assets, asset]);
        console.log(err);
      }
    }
  }

  useEffect(() => {
    async function fetchData() {
      console.log(JSON.stringify(auth))
      const userDetails = await getUserDetails(auth.currentUser.uid)
      const userAssets = await getMyAssets(auth.currentUser.uid)
      const userOrders = await getOrders(auth.currentUser.uid)
      setUser(userDetails)
      // setAssets(userAssets)
      console.log(userOrders.data)
      const buyReq = await getBuyRequests(userOrders)
      const transactions = await getSellTransactions(userOrders)
      console.log(buyRequests)
    }
    fetchData()
  },[]);

  return (
      <div>
        <div className="container" style={styles.container}>
          <div className="header" style={styles.header}>
            <div className="title" style={styles.title}>
              <img src={bush} alt="logo" style={{ height: "10vh" }} />
              <h1>Hi {user.firstName}</h1>
            </div>
          </div>
          <div className="createButton" style={styles.createButton}>
          <button
            style={styles.button}
            onClick={() => {
              navigate("/createAsset");
            }}
          >
            Create Asset
          </button>
          <button
            style={styles.buttonMarketplace}
            onClick={() => {
              navigate("/Marketplace");
            }}
          >Marketplace</button>
          {/* <div
          className="createButton"
          style={styles.createButton}
        >
          <button
            style={styles.buttonMarketplace}
            onClick={() => {
              navigate("/Marketplace");
            }}
          >
            Marketplace
          </button>
        </div> */}
        </div>
          <Tabs>
            <div label="My Assets">
              {assets.map((item) => {
                return <GalleryIcon
                image={
                  item.body.image
                    ? item.body.image
                    : "https://picsum.photos/200/300"
                }
                name={item.body.name ? item.body.name : item.token}
                description={item.body.description}
                cost={item.body.cost}
                geoLoc={item.body.geoLoc}
                size={item.body.size}
                tokenId={item.tokenId}
                baseDir={'profile'}
                viewType={'asset'}
              />})}
            </div>
            <div label="My Buy Requests">
              {buyRequests.map((item) => {
                return <GalleryIcon
                image={
                  item.body.image
                    ? item.body.image
                    : "https://picsum.photos/200/300"
                }
                name={item.body.name ? item.body.name : item.token}
                description={item.body.description}
                cost={item.body.cost}
                geoLoc={item.body.geoLoc}
                size={item.body.size}
                tokenId={item.token}
                baseDir={'profile'}
                viewType={'buy'}
              />})}
            </div>
            <div label="Incoming Transactions">
              {transactions.map((item) => {
                return <GalleryIcon
                image={
                  item.body.image
                    ? item.body.image
                    : "https://picsum.photos/200/300"
                }
                name={item.body.name ? item.body.name : item.token}
                description={item.body.description}
                cost={item.body.cost}
                geoLoc={item.body.geoLoc}
                size={item.body.size}
                tokenId={item.token}
                baseDir={'profile'}
                viewType={'sell'}
              />})}
            </div>
          </Tabs>
          {/*<hr*/}
          {/*    style={{*/}
          {/*      color: "rgba(0, 0, 0, 0.7)",*/}
          {/*      marginTop: "2rem",*/}
          {/*      width: "77%",*/}
          {/*    }}*/}
          {/*/>*/}
          <div className="content" style={styles.content}>

          </div>
        </div>
      </div>
  );
}

export default Profile;

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
    margin: "0 0vw",
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
    backgroundColor: "transparent",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    position: "absolute",
    cursor: "pointer",
    borderRadius: "12px",
    position: "absolute",
    right: "8vw",
    top: "5vh",
    fontFamily: "VT323",
    fontSize: "calc(5px + 2vmin)",
  },
  buttonMarketplace: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    position: "absolute",
    right: "20vw",
    top: "5vh",
    fontFamily: "VT323",
    fontSize: "calc(5px + 2vmin)",
  },
};
