import { lazy } from "react";
import {createBrowserRouter, RouteObject} from "react-router";


const Home = lazy(() => import("./pages/home"));
const Register = lazy(() => import("./pages/register"));
const Login = lazy(() => import("./pages/login"));


const routes: RouteObject[] = [
    {
        path: "/",
        Component: Home
    },
    {
        path: "/register",
        Component: Register
    },
    {
        path: "/login",
        Component: Login
    },
]

const router = createBrowserRouter(routes);

export default router;
