import React from "react";
import { PRODUCTS } from "../products.js";
import Product from "./Product.jsx";
import '../style/Shop.css'

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop online</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
