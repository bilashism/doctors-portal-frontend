import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import Main from "../layouts/Main/Main";
import Appointment from "../pages/Appointment/Appointment";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/appointment",
        element: <Appointment />
      }
    ],
    errorElement: <NotFound />
  }
]);
