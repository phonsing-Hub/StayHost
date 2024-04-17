import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cookies from 'js-cookie';
//components
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Renter from "./components/Renter";
import Rooms from "./components/Rooms";
import Sevices from "./components/Sevices";
import Bills from "./components/Bills";
import Payment from "./components/Payment";
import Parcel from "./components/Parcel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "Renter",
    element: <Renter />,
  },
  {
    path: "Rooms",
    element: <Rooms />,
  },
  {
    path: "Sevices",
    element: <Sevices />,
  },
  {
    path: "Bills",
    element: <Bills />,
  },
  {
    path: "Payment",
    element: <Payment />,
  },
  {
    path: "Parcel",
    element: <Parcel />,
  },
  {
    path: "Login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
