import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import NewOrder from "./pages/Orders/NewOrder/NewOrder";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import Users from "./pages/Users/Users/Users";
import NewUser from "./pages/Users/NewUser/NewUser";
import UserDetails from "./pages/Users/UserDetails/UserDetails";
import EditUser from "./pages/Users/EditUser/EditUser";

const routerConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> }, // Render Home component when URL is '/'
      { path: "login", element: <LogIn /> },
      { path: "register", element: <Register /> },

      // API -----------------------------
      {
        path: "api/",
        children: [
          // ORDERS -----------------------------
          {
            path: "orders/",
            children: [
              {
                path: "",
                element: <History />,
              },
              {
                path: "history",
                element: <History />,
              },
              {
                path: "new",
                element: <NewOrder />,
              },
            ],
          },

          // USERS -----------------------------
          {
            path: "users/",
            children: [
              {
                path: "",
                element: <Users />,
              },
              {
                path: ":id",
                element: <UserDetails />,
              },
              {
                path: "new",
                element: <NewUser />,
              },
              {
                path: ":id/edit",
                element: <EditUser />,
              },
            ],
          },
        ],
      },
    ],
  },
];

// Export router as an instantiated object
// -----------------------------------------------------
export const router = createBrowserRouter(routerConfig);
