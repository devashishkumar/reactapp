import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import BodyComponent from "./components/Body";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AboutComponent from "./components/About";
import ContactComponent from "./components/Contact";
import ErrorComponent from "./components/Error";

const AppLayoutComponent = () => {
    return (
        <div className="app">
            <Header />
            <BodyComponent />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayoutComponent/>,
        errorElement: <ErrorComponent />
    },
    {
        path: "about",
        element: <AboutComponent />
    },
    {
        path: "contact",
        element: <ContactComponent />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayoutComponent />);
root.render(<RouterProvider router={appRouter} />);