import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
// import Phone from "../pages/Phone/Phone";

const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader:()=>fetch('/donation.json')
            },{
                path: "/donation",
                element: <Donation></Donation>
            },{
                path: "/statistics",
                element: <Statistics></Statistics>
            },{
                path: "/cards/:id",
                element:<Donation></Donation>,
                loader:()=>fetch('/donation.json')
            },
        ]
    }
])

export default myCreateRoute;