import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import BodyComponent from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayoutComponent = () => {
    return (
        <div className="app">
            <Header />
            <BodyComponent />
        </div>
    );
};

root.render(<AppLayoutComponent />);