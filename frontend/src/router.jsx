import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";

const routerConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> }, // Render Home component when URL is '/'
    ],
  },
];

// Export router as an instantiated object
// -----------------------------------------------------
export const router = createBrowserRouter(routerConfig);
