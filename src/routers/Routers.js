import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
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
                element: <PrivateRouter><DetailsServices></DetailsServices></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

        ]
    },
]);