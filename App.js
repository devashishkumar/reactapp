import React from "react";
import ReactDOM from "react-dom/client";

// JSX (Transpiled Before it reaches the JS) Parcel - Babel

// JSX => Babel Transpiled it to React.createElement
const heading = (
  <h1 className="heading" tabIndex="1">
    React App Heading
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(headingjsx);

// React Component
// Class Based Component - OLD
// Function Based Component - NEW (Just normal javascript functions)

const num = 100000;

const TitleComponent = () => (
  <div>
    <h1 className="heading">Heading</h1>
  </div>
);

const HeadingComponent = () => (
  <div id="container">
    <TitleComponent />
    {heading}
    <h1 className="heading">React App</h1>
  </div>
);

root.render(<HeadingComponent />);
