import logo from "../assets/logo.jpg";

import Button from "./UI/Button";
import { FoodCartContext } from "../store/Food-Order-Context";
import UserProgressContext from "../store/UserProgressContext";
import { useCallback, useContext } from "react";

export default function Header() {
  const cartContext = useContext(FoodCartContext);
  const userProgressContext = useContext(UserProgressContext);

  const totalCartItemQuantity = cartContext.items.reduce((acc, curItem) => {
    acc += curItem.quantity;
    return acc;
  }, 0);

  function handleOpenCart() {
    console.log("From Header: user Progress: " + userProgressContext.progress);
    userProgressContext.showCart();
  }
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="Food Order App" />
          <h1>Food Order App</h1>
        </div>
        <nav>
          <Button className="button" textOnly={false} onClick={handleOpenCart}>
            Your Cart ({totalCartItemQuantity})
          </Button>
        </nav>
      </header>
    </>
  );
}
