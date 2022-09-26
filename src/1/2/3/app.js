import React from "react";
import ReactDOM from "react-dom/client";
import First from "@src/components/first";
import Second from "@src/components/second";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <First />
    <Second color="red" />
  </React.StrictMode>
);
