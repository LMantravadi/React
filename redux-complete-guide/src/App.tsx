import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";

function App() {
  const isCartVisible = useSelector((state) => state.ui.isCartVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {});
  return (
    <Layout>
      {isCartVisible && <Cart />}

      <Products />
    </Layout>
  );
}

export default App;

// import "./App.css";
// import Counter from "./components/Counter";
// import Header from "./components/Header";
// import Auth from "./components/Auth";
// import { Fragment } from "react/jsx-runtime";

// function App() {
//   return (
//     <Fragment>
//       <Header />
//       <Auth />
//       <Counter />;
//     </Fragment>
//   );
// }
// export default App;
