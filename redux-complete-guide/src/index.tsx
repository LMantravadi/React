import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store/Shop.ts";

const element = document.getElementById("root");
let root;
if (element) {
  root = ReactDOM.createRoot(element);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Element not found");
}

// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";

// import "./index.css";
// import App from "./App";
// import store from "./store";

// const element = document.getElementById("root");
// let root;
// if (element) {
//   root = ReactDOM.createRoot(element);

//   root.render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// } else {
//   console.error("Element not found");
// }
