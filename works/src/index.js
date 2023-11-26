// indexedDB.js
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./Component/Signup/signUp";
// import AppBars from "./Component/NavigationBar/Appbar";
// import Bill from "./Component/Bill/sample";
import FrontWeb from "./Component/WelcomePage/frontpage";
import SignIn from "./Component/Sign/Sign_In";
// import aboutus from "./Component/Aboutus/aboutus";
// import Home from "./Component/homepage.js/home";
import Review from "./Component/checkout/checkout";
import Home from "./Component/homepage.js/home";
// import invoice from './invoice/invoice-generator/src/components/InvoiceForm'
// import InvoiceForm from "./invoice/invoice-generator/src/components/InvoiceForm";
import Main from "./Component/invoice/main";
import App from "./Component/Aboutus/aboutus";
import { UserProvider } from "./Component/userContext/userContext";
// import Main from "./Component/invoice/main";
import Profile from "./Component/profile/profile";
import Payment from "./Component/invoice/payment";

// function Index() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontWeb />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/invoice",
    element: <Main />,
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
    element: <Home />,
  },
  {
    path: "/checkout",
    element: <Review />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  { path: "/aboutus", element: <App /> },
  {
    path: "/payment",
    element: <Payment />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
// }
