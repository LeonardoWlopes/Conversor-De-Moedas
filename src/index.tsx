import React from "react";
import ReactDOM from "react-dom";
import Home from "./Screens/Home";

import "./index.css";
import { ValoresProvider } from "./Components/Context/Valores";

ReactDOM.render(
  <React.StrictMode>
    <ValoresProvider>
      <Home />
    </ValoresProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
