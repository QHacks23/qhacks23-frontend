import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AssetView from "./components/AssetView";
import Marketplace from "./components/Marketplace";
import WebFont from "webfontloader";
import Login from "./components/Login";
import CreateAsset from "./components/CreateAsset";
import EnterMnemonic from "./components/EnterMnemonic";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat", "Chilanka", "VT323"],
      },
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="marketplace/asset" element={<AssetView />} />
          <Route path="createAsset" element={<CreateAsset />} />
          <Route path="enterMnemonic" element={<EnterMnemonic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
