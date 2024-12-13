import { FoodCartItemProps } from "../store/Food-Order-Context";
interface CartItemProps {
  cartItem: FoodCartItemProps;
  onIncrease: () => void;
  onDecrease: () => void;
}
export default function CartItem({
  cartItem,
  onIncrease,
  onDecrease,
}: CartItemProps) {
  return (
    <li className="cart-item">
      <label>
        {cartItem.item.name} - {cartItem.quantity} x ${cartItem.item.price}
      </label>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{cartItem.quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
