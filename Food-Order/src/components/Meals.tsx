import useHttp from "../hooks/useHttp";
import { useEffect, useState } from "react";
import MealItem, { MealItemProps } from "./MealItem";

export interface MealsProps {
  meals: MealItemProps[] | undefined;
}
export default function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals");
  return (
    <>
      <div className="meals">
        <ul id="meals">
          {meals &&
            meals.length > 0 &&
            meals.map((meal: MealItemProps) => (
              <li key={meal.id} className="meal-item">
                <MealItem {...meal} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
