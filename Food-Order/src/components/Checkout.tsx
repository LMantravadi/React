import { useContext } from "react";
import useActionState from "react-dom";

import Modal from "./UI/Modal";
import { FoodCartContext } from "../store/Food-Order-Context";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const foodCartContext = useContext(FoodCartContext);
  const userProgressContext = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  const totalAmount = foodCartContext.items.reduce((total, curItem) => {
    total += curItem.item.price;
    return total;
  }, 0);

  function handleCloseCheckout() {
    userProgressContext.hideCheckout();
  }

  function handleFinish() {
    userProgressContext.hideCheckout();
    // foodCartContext.clearCart();
    clearData();
  }

  async function checkoutAciton(prevState, formData: FormData) {
    // event.preventDefault();

    // const formData = new FormData(event.target as HTMLFormElement);
    const customerData = Object.fromEntries(formData);

    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: { items: foodCartContext.items, customer: customerData },
      }),
    });

    const resData = response.json();
    console.log(resData);
    resData.then((data) => {
      return data;
    });
  }

  const [formState, formAction, pending] = useActionState(checkoutAciton, null);

  let actions = (
    <>
      <Button
        type="button"
        textOnly={false}
        className="button"
        onClick={handleCloseCheckout}
      >
        Close
      </Button>
      <Button textOnly={false} className="button">
        Submit Order
      </Button>
    </>
  );
  if (isSending) actions = <span>Sending order data...</span>;

  if (data && !error) {
    return (
      <Modal
        title="Your Order"
        className="modal"
        open={userProgressContext.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <Button textOnly className="" onClcik={handleFinish}>
            Okay
          </Button>
        </p>
      </Modal>
    );
  }
  return (
    <Modal
      title="Checkout"
      open={userProgressContext.progress.toLowerCase() === "checkout"}
      className=""
      onClose={
        userProgressContext.progress === "checkout"
          ? handleCloseCheckout
          : undefined
      }
    >
      <form action={checkoutAciton} onClose={handleCloseCheckout}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="Email Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="City" type="text" id="city" />
          <Input label="Zip" type="number" id="zip" />
        </div>
        {error && <Error title="Failed to submit order" message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
