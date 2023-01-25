import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import App from "./App";
import { AppProvider } from "./AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppProvider><App /></AppProvider>);
