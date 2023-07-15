import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Hero from "../components/Hero";
import Program from "../components/Program";
import Error from "./Error";
import Exercise from "../components/Exercise";
import About from "../components/About";

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
      {
        path: "/exercise/:id",
        element: <Exercise />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
