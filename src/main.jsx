import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./state/store";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./state/AuthContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthContextProvider>
      <BrowserRouter basename="">
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </Provider>
);
