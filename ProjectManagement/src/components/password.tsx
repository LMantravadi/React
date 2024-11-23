import { useState } from "react";

export default function Password() {
  const [isShow, setIsShow] = useState(false);

  function handleShowHide() {
    setIsShow((prev) => !prev);
  }
  //   console.log(isShow);
  return (
    <>
      <input
        type={isShow ? "text" : "password"}
        style={{ border: 1, margin: 100 }}
      />
      <button onClick={handleShowHide}>{isShow ? "Hide" : "Show"}</button>
    </>
  );
}
