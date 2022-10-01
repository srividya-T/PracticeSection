import React from "react";
import "./Products.css";

const Products = ({ productItems, handleAddProduct }) => {
  return (
    <div className="products">
      {productItems.map((prodItem)=>(
        <div className="card">
          <div>
            <img className="product-image" src={prodItem.image} alt={prodItem.name}/>            
          </div>
          <div>
            <h3 className="product-name">{prodItem.name}</h3>
          </div>
          <div className="product-price">₹{prodItem.price}</div>
          <div>
            <button className="product-add-button" onClick={()=>handleAddProduct(prodItem)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
