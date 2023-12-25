import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Hello World 1"), React.createElement("h2", {}, "Hello World 2")])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);