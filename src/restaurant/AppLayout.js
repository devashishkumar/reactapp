import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "../utils/UserContext";

// eager loading
// import AboutComponent from "./components/About";
// import ContactComponent from "./components/Contact";
// import ErrorComponent from "./components/Error";
// import RestaurantMenusComponent from "./components/RestaurantMenus";
// import BodyComponent from "./components/Body";

// lazy loading
// chunking
// code splitting
// dynamic bundling
// on demand loading
// dynamic import
const RestaurantMenusComponent = lazy(() =>
  import("./components/RestaurantMenus")
);
const AboutComponent = lazy(() => import("./components/About"));
const ErrorComponent = lazy(() => import("./components/Error"));
const ContactComponent = lazy(() => import("./components/Contact"));
const BodyComponent = lazy(() => import("./components/Body"));

const AppLayoutComponent = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserName("Ashish");
  });
  return (
    /* to override UserContext data */
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        {/* <BodyComponent /> */}
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback="Loading...">
            <BodyComponent />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback="Loading...">
            <AboutComponent />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback="Loading...">
            <ContactComponent />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback="Loading...">
            <RestaurantMenusComponent />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayoutComponent />);
root.render(<RouterProvider router={appRouter} />);
