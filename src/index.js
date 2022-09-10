import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//StateProvider is the context API
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.Fragment>
    <StateProvider>
      <App />
    </StateProvider>
  </React.Fragment>,
  document.getElementById("root")
);
