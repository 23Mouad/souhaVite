import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Context from "./Context";
import "./i18n";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Context />
    </React.StrictMode>
);
