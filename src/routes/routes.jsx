import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Pizza from "../pages/Pizza";
import Register from "../pages/Register";
import Profile from "../components/cards/Profile";
import NotFound from "../components/cards/NotFound"
import { IoLogOut } from "react-icons/io5";
import ProtectedRoutes from "./ProtectedRoutes";

const routes = [
    { path: '/Home', element: <Home /> },/*ok*/
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: '/cart', element: <Cart /> },
    { path: '/pizza/:id', element: <ProtectedRoutes><Pizza /></ProtectedRoutes> },
    { path: '/profile', element: <Profile /> },
    { path: '*', element: <NotFound /> },
    { path: '/logout', element: <IoLogOut /> },


]


export default routes;