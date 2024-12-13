import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    // console.log("FROM USER CONTEXT showCart() METHOD BEFORE - ", userProgress);
    setUserProgress("cart");
    // console.log("FROM USER CONTEXT showCart() METHOD AFTER - ", userProgress);
  }

  function hideCart() {
    // console.log("FROM USER CONTEXT hideCart() METHOD AFTER - ", userProgress);
    setUserProgress("");
    // console.log("FROM USER CONTEXT hideCart() METHOD BEFORE - ", userProgress);
  }

  function showCheckout() {
    setUserProgress("checkout");
  }

  function hideCheckout() {
    setUserProgress("");
  }

  const userProgressValue = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return (
    <UserProgressContext.Provider value={userProgressValue}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
