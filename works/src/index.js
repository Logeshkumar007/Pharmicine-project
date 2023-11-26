// indexedDB.js
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./Component/Signup/signUp";
import AppBars from "./Component/NavigationBar/Appbar";
// import Bill from "./Component/Bill/sample";
import FrontWeb from "./Component/WelcomePage/frontpage";
import SignIn from "./Component/Sign/Sign_In";
// import aboutus from "./Component/Aboutus/aboutus";
// import Home from "./Component/homepage.js/home";
import Review from "./Component/checkout/checkout";
import Home from "./Component/homepage.js/home";
// import invoice from './invoice/invoice-generator/src/components/InvoiceForm'
// import InvoiceForm from "./invoice/invoice-generator/src/components/InvoiceForm";
<<<<<<< HEAD
import Main from "./Component/invoice/main";
import App from "./Component/Aboutus/aboutus";
=======
import { UserProvider } from "./Component/userContext/userContext";
import Main from "./Component/invoice/main";
import Profile from "./Component/profile/profile";
>>>>>>> 46cf48b7f6667f745c3333dadc69a325a05f8e79
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
    element: <Home/>,
  },
  {
    path: "/checkout",
    element: <Review />,
  },
  {
    path: "/home",
    element: <Home />,
<<<<<<< HEAD
  },
  { path: "/aboutus", element: <App /> },
=======
  }
>>>>>>> 46cf48b7f6667f745c3333dadc69a325a05f8e79
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <UserProvider>
    <RouterProvider router={router} />
     </UserProvider>
  </React.StrictMode>
);
