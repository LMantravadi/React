// import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { CartItem } from "../../store/Cart";

const Products = () => {
  const productItems: CartItem[] = [
    {
      title: "Test 1",
      price: 10,
      description: "This is a first product - amazing!",
    },
    {
      title: "Test 2",
      price: 20,
      description: "This is a second product - amazing!",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItems.map((productItem) => (
          <ProductItem {...productItem} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
