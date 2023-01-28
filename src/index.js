import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AssetView from "./components/AssetView";
import Marketplace from "./components/Marketplace";
import WebFont from "webfontloader";
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
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="marketplace/asset" element={<AssetView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
