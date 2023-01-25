// ** React Imports
import React from "react";
import ReactDOM from "react-dom/client";

// ** Redux Imports
import { Provider } from "react-redux";
import { store } from "./store";

// ** Components
import App from "./App";

// ** Styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
