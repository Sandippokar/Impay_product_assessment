import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Login/Login";
import ProductList from "./ProductList/ProductsList";

function App() {
   return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} ></Route>
          <Route path="/products" element={<ProductList/>} ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
