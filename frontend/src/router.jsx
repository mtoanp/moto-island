import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import NewFacture from "./pages/Factures/NewFacture/NewFacture";

const routerConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> }, // Render Home component when URL is '/'
      // API -----------------------------
      {
        path: "api/",
        children: [
          {
            path: "factures/",
            children: [
              {
                path: "history",
                element: <History />,
              },
              {
                path: "new",
                element: <NewFacture />,
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