import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./Component/Signup/signUp";
import AppBars from "./Component/NavigationBar/Appbar";
import Bill from "./Component/Bill/sample";
import FrontWeb from "./Component/WelcomePage/frontpage";
import SignIn from "./Component/Sign/Sign_In";
// import Home from "./Component/homepage.js/home";
import Review from "./Component/checkout/checkout";
import Home from "./Component/homepage.js/home";
// import invoice from './invoice/invoice-generator/src/components/InvoiceForm'
// import InvoiceForm from "./invoice/invoice-generator/src/components/InvoiceForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontWeb/>,
  },
  {
    path: "/bill",
    element: <Bill />,
  },

  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/Appbar",
    element: <AppBars />,
  },
  {
    path: "/checkout",
    element: <Review />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
