import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { CartItemState } from "../../store/Cart";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems: CartItemState[] = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems && cartItems.length > 0 && (
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.item.title} {...item} />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
