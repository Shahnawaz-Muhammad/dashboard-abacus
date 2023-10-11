import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/shared/layout";
import Dashboard from "./pages/dashboard";
import Account from "./pages/account";
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
          path: "/account",
          element: <Account />
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
