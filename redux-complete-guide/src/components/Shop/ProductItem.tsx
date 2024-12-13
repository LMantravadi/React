import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions, CartItem } from "../../store/Cart";
import { useDispatch } from "react-redux";

const ProductItem = (props: CartItem) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();

  function handleAddItem() {
    dispatch(cartActions.addItem(props));
  }

  return (
    <li className={classes.item}>
      <Card className={classes.item}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
