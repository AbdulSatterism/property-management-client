import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../layout/DashboardLayout";
import AddProducts from "../pages/dashboard/AddProducts";
import ManageProducts from "../pages/dashboard/ManageProducts";
import PageNotFound from "../pages/notFound/PageNotFound";
import { Home } from "../pages/home/Home";
import DashboardHome from "../pages/dashboard/dashboardHome/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <DashboardHome/>,
      },
      {
        path: "add-products",
        element: <AddProducts />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
      }
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
