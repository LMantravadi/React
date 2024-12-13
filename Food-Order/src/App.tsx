import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import FoodCartContextProvider from "./store/Food-Order-Context";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import "./App.css";
import Checkout from "./components/Checkout";

function App() {
  return (
    <UserProgressContextProvider>
      <FoodCartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </FoodCartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
