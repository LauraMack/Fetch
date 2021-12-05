import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UsersProvider } from "./components/UsersContext";

ReactDOM.render(
  <UsersProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UsersProvider>,
  document.getElementById("root")
);
