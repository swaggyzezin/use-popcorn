import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    <StarRating
      maxRating={3}
      size={24}
      color="red"
      messages={["bad", "medium", "good"]}
      defaultRating={3}
    />
  </React.StrictMode>
);
