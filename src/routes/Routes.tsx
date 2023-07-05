import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Hero from "../components/Hero";
import Program from "../components/Program";
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "/program",
        element: <Program />,
      },
    ],
  },
  {
    path: "/program",
    element: <Program />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
