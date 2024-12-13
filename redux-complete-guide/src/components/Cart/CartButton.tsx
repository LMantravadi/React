import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CartItemState } from "../../store/Cart";
import { uiActions } from "../../store/UI";

const CartButton = () => {
  const dispatch = useDispatch();
  const cartitems: CartItemState[] = useSelector((state) => state.cart.items);

  let cartQuantity = 0;
  if (cartitems && cartitems.length > 0) {
    cartQuantity = cartitems.reduce((a, curitem) => {
      return a + curitem.quantity;
    }, 0);
  }
  const handleShowCart = () => dispatch(uiActions.toggle());

  return (
    <button className={classes.button} onClick={handleShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
