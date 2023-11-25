// indexedDB.js
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
import { UserProvider } from "./Component/userContext/userContext";
import Main from "./Component/invoice/main";
import Profile from "./Component/profile/profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontWeb />,
<<<<<<< HEAD
  },
  {
    path: "/profile",
    element: <Profile />,
=======
>>>>>>> b11cb9bf0df6d0d72c785f019f3ce95c8fa6cca0
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
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <UserProvider>
    <RouterProvider router={router} />
     </UserProvider>
  </React.StrictMode>
);
