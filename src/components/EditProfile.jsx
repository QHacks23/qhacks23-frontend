import React, {useState, useEffect} from "react";
import GalleryIcon from "./GalleryIcon";
import bush from "../assets/bush.png";
import Tabs from "../components/Tabs";
import "./EditProfile.css"
import Popup from "reactjs-popup";
import AssetView from "./AssetView";
import {getAssetOrders, getUser, getUserAssets} from "../client/Requests";
import auth from "../firebase"
function Profile() {
  const [assets, setAssets] = useState([])
  const [buyRequests, setBuyRequests] = useState([])
  const [transactions, setTransactions] = useState([])
  const [user, setUser] = useState({})



  const getMyAssets = async (userId) => {
    const rslt = await getUserAssets(userId)
    return rslt.nft
  }

  const getUserDetails = async (userId) => {
    const userQuery = await getUser(userId)
    return userQuery.data
  }

  const getOrders = async (userId) => {
    const orders = await getAssetOrders(userId)
    return orders
  }


  useEffect(async() => {
    const userDetails = await getUserDetails(auth.currentUser.uid)
    const userAssets = await getMyAssets(auth.currentUser.uid)
    const userOrders = await getOrders(auth.currentUser.uid)
    setUser(userDetails)
    setAssets(userAssets)
    setBuyRequests(userOrders.buyOrders.tokenIds)
    setTransactions(userOrders.sellOpportunities.tokenIds)
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
          <Tabs>
            <div label="My Assets">
              {assets.map((item) => {return <GalleryIcon image="https://picsum.photos/200/300" name={item.token}/>})}
            </div>
            <div label="My Buy Requests">
              {buyRequests.map((item) => {return <GalleryIcon image="https://picsum.photos/200/300" name={item.token}/>})}
            </div>
            <div label="Incoming Transactions">
              {transactions.map((item) => {return <GalleryIcon image="https://picsum.photos/200/300" name={item.token}/>})}
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
