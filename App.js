import React from "react";
import ReactDOM from "react-dom";

// JSX (Transpiled Before it reaches the JS) Parcel - Babel

// JSX => Babel Transpiled it to React.createElement
const headingjsx = (<h1 className="heading" tabIndex="1">
    React App
    </h1>)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingjsx);