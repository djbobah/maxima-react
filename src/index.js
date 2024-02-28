import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import store from "./store/index.ts";
// import Counter, { randNumber, getRGB } from "./utils/functions.";
import App from "./App.tsx";
import "./index.css";

const tag = createRoot(document.getElementById("root"));
tag.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
