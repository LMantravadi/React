import {
  FoodCartContext,
  FoodCartItemProps,
} from "../store/Food-Order-Context";
import UserProgressContext from "../store/UserProgressContext";
import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import CartItem from "./CartItem";

export interface OrderProps {
  order: CartItems[];
}

interface CartItems {
  name: string;
  quantity: number;
  price: number;
}
export default function Cart() {
  const cartContext = useContext(FoodCartContext);
  const userProgressContext = useContext(UserProgressContext);
  const cartItems: FoodCartItemProps[] = cartContext.items;

  const totalPrice =
    cartItems && cartItems.length > 0
      ? cartItems.reduce((acc, cur) => {
          acc += cur.item!.price * cur.quantity;
          return acc;
        }, 0)
      : 0;

  //   console.log("FROM CART User Progress: " + userProgressContext.progress);

  function handleCloseCart() {
    console.trace();
    userProgressContext.hideCart();
  }

  return (
    <Modal
      title="Your Cart"
      open={userProgressContext.progress === "cart"}
      className="cart"
      onClose={
        userProgressContext.progress === "cart" ? handleCloseCart : undefined
      }
    >
      <div>
        {(!cartItems || cartItems.length === 0) && <p>No items in cart!</p>}
        {cartItems && cartItems.length > 0 && (
          <ul>
            {cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.item.id}
                cartItem={cartItem}
                onDecrease={() => cartContext.removeItem(cartItem.item)}
                onIncrease={() => cartContext.addItem(cartItem.item)}
              />
            ))}
          </ul>
        )}
        <p className="cart-total">
          Cart Total: <strong>{currencyFormatter.format(totalPrice)}</strong>
        </p>
        <p className="modal-actions">
          <Button textOnly className="" onClick={handleCloseCart}>
            Close
          </Button>
          {cartContext.items.length > 0 && (
            <Button
              textOnly={false}
              className=""
              onClick={userProgressContext.showCheckout}
            >
              Checkout
            </Button>
          )}
        </p>
      </div>
    </Modal>
  );
}
