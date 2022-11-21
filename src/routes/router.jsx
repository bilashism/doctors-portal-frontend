import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Main from "../layouts/Main/Main";
import Appointment from "../pages/Appointment/Appointment";
import AddDoctor from "../pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../pages/Dashboard/Payment/Payment";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { APP_SERVER } from "../utilities/utilities";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment />
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        )
      },
      {
        path: "/dashboard/addDoctor",
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        )
      },
      {
        path: "/dashboard/manageDoctors",
        element: (
          <AdminRoute>
            <ManageDoctors />
          </AdminRoute>
        )
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`${APP_SERVER}/bookings/${params.id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
          })
      }
    ],
    errorElement: <NotFound />
  }
]);
