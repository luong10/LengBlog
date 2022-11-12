import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContexProvider } from "./context/userContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContexProvider>
      <App />
    </AuthContexProvider>
  </React.StrictMode>
);