import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Card from "../pages/Card/Card";

import Cards from "../components/Cards/Cards";

const myCreateRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/cards",
        element: <Cards></Cards>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/cards/:id",
        element: <Card></Card>,
        loader: () => fetch("/donation.json"),
      },
    ],
  },
]);

export default myCreateRoute;
