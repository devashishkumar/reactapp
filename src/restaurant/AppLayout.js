import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import BodyComponent from "./components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import AboutComponent from "./components/About";
import ContactComponent from "./components/Contact";
import ErrorComponent from "./components/Error";
import RestaurantMenusComponent from "./components/RestaurantMenus";

const AppLayoutComponent = () => {
    return (
        <div className="app">
            <Header />
            {/* <BodyComponent /> */}
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayoutComponent/>,
        children: [
            {
                path: "/",
                element: <BodyComponent />
            },
            {
                path: "about",
                element: <AboutComponent />
            },
            {
                path: "contact",
                element: <ContactComponent />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenusComponent />
            }
        ],
        errorElement: <ErrorComponent />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayoutComponent />);
root.render(<RouterProvider router={appRouter} />);