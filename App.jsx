import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./App.css";
import Cart from "./Components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import productList from "./Components/Data";

const App = () => {
  const [productId, setProudctId] = useState("");
  const [cartAllProduct, setCartAllProduct] = useState([]);

  useEffect(() => {

    const filteredObject = productList.filter(
      (product) => product.id == productId
    );
    setCartAllProduct(prev =>[...prev, ...filteredObject]);

  }, [productId]);

  return (
    <>
      <BrowserRouter>
        <Header cartAllProduct={cartAllProduct}/>
        <Routes>
          <Route
            path="/"
            element={<Home setProductId={setProudctId} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct}/>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;