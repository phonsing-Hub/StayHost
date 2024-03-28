import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
//components
import Dashboard from "./components/dashboard";
import Renter from "./components/Renter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>
  },
  {
    path: "Renter",
    element: <Renter/>,
  },
  {
    path: "Amergency",
    element: <div>Amergency</div>,
  },
  {
    path: "Sevices",
    element: <div>Sevices</div>,
  },
  {
    path: "Bills",
    element: <div>Bills</div>,
  },
  {
    path: "Payment",
    element: <div>Payment</div>,
  },
  {
    path: "Parcel",
    element: <div>Parcel</div>,
  },
  {
    path: "Logout",
    element: <div>Logout</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);