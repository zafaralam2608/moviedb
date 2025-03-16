import App from "components";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "store";

const element = document.getElementById("root");
if (element == null) {
  throw new Error("Failed to find the root element");
}

const root = ReactDOM.createRoot(element);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
