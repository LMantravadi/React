import { createContext, ReactNode, useReducer } from "react";
import { MealItemProps } from "../components/MealItem";

export const FoodCartContext = createContext({
  items: [] as FoodCartItemProps[],
  addItem: (item: MealItemProps) => {},
  removeItem: (item: MealItemProps) => {},
  clearCart: () => {},
});
export interface FoodCartItemProps {
  item: MealItemProps;
  quantity: number;
}
interface FoodCartItemsStateProps {
  cartItems: FoodCartItemProps[];
}

interface FoodCartAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "CLEAR_CART";
  payload?: MealItemProps;
}

function foodCartReducer(
  state: FoodCartItemsStateProps,
  action: FoodCartAction
) {
  if (action.type === "ADD_ITEM") {
    const cartItemIndex = state.cartItems.findIndex(
      ({ item }) => item!.id === action.payload?.id
    );

    const updatedItems = [...state.cartItems];

    if (cartItemIndex > -1) {
      const updatedItem = {
        ...state.cartItems[cartItemIndex],
        quantity: state.cartItems[cartItemIndex].quantity + 1,
      };
      updatedItems[cartItemIndex] = updatedItem;
    } else {
      const newItem: FoodCartItemProps = {
        item: action.payload,
        quantity: 1,
      };
      updatedItems.push(newItem);
    }

    return { ...state, cartItems: updatedItems };
  } else if (action.type === "REMOVE_ITEM") {
    const cartItemIndex = state.cartItems.findIndex(
      ({ item }) => item!.id === action.payload?.id
    );

    const existingCartItem = state.cartItems[cartItemIndex];
    let updatedItems = [...state.cartItems];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(cartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[cartItemIndex] = updatedItem;
    }

    return { ...state, cartItems: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}
export default function FoodCartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartReducerState, dispatchCartAction] = useReducer(foodCartReducer, {
    cartItems: [],
  });

  function addItem(item: MealItemProps) {
    dispatchCartAction({
      type: "ADD_ITEM",
      payload: item,
    });
  }

  function removeItem(item: MealItemProps) {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      payload: item,
    });
  }

  function clearCart() {
    dispatchCartAction({
      type: "CLEAR_CART",
    });
  }

  const contextValue = {
    items: cartReducerState.cartItems,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <FoodCartContext.Provider value={contextValue}>
      {children}
    </FoodCartContext.Provider>
  );
}
