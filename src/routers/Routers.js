import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Reviews from "../pages/Reviews/Reviews";
import AddServices from "../pages/Services/AddServices";
import AllServices from "../pages/Services/AllServices";
import DetailsServices from "../pages/Services/DetailsServices";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/services",
                element: <AllServices></AllServices>,
            },
            {
                path: '/services/:id',
                element: <DetailsServices></DetailsServices>,
                loader: ({ params }) => fetch(`https://service-review-server-farvez999.vercel.app/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addServices',
                element: <PrivateRouter><AddServices></AddServices></PrivateRouter>
            },
            {
                path: '/reviews',
                element: <PrivateRouter><Reviews></Reviews></PrivateRouter>
            },

        ]
    },
]);