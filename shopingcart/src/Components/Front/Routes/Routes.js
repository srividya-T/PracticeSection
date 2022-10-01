import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "../SignUp/Signup";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";

const Routes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance
}) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/cart" exact>
          <Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
