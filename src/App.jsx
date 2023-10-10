import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/shared/layout";
import Dashboard from "./pages/dashboard";
import Customers from "./pages/customers";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "customers",
          element: <Customers />,
        },
        {
          path: "/",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
