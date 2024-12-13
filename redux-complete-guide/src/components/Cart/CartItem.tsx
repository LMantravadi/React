import classes from "./CartItem.module.css";
import { CartItemState, cartActions } from "../../store/Cart";
import { useDispatch } from "react-redux";

const CartItem = (cartItem: CartItemState) => {
  const dispatch = useDispatch();

  const handleUpdateQuantity = (isMore: boolean) => {
    isMore
      ? dispatch(cartActions.addItem(cartItem.item))
      : dispatch(cartActions.removeItem(cartItem.item.title));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{cartItem.item.title}</h3>
        <div className={classes.price}>
          ${cartItem.total.toFixed(2)}
          <span className={classes.itemprice}>
            (${cartItem.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{cartItem.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleUpdateQuantity(false)}>-</button>
          <button onClick={() => handleUpdateQuantity(true)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
