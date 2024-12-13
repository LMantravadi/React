import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

import { FoodCartContext } from "../store/Food-Order-Context";
import { useContext } from "react";

export interface MealItemProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function MealItem(meal: MealItemProps) {
  const cartContext = useContext(FoodCartContext);

  function handleAddMealToCart(meal: MealItemProps) {
    // const cartItem: CartItem = {
    //   item: meal,
    //   quantity: 1,
    // };

    cartContext.addItem(meal);
  }

  const imageLink = "http://localhost:3000/" + meal.image;
  return (
    <article id={meal.id.toString()}>
      <img src={imageLink} alt={meal.name} />

      <div>
        <h3>{meal.name}</h3>
        <p className="meal-item-description">{meal.description}</p>
        <p className="meal-item-price">
          {currencyFormatter.format(meal.price)}
        </p>
      </div>

      <p className="meal-item-action">
        <Button
          className="button"
          textOnly={false}
          onClick={() => handleAddMealToCart(meal)}
        >
          Add to Cart
        </Button>
      </p>
    </article>
  );
}
