import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Pizza from "../pages/Pizza";
import Register from "../pages/Register";
import Profile from "../components/cards/Profile";
import NotFound from "../components/cards/NotFound"

const routes = [
    { path: '/Home', element: <Home /> },/*ok*/
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: '/cart', element: <Cart /> },
    { path: '/pizza/p001', element: <Pizza /> },
    { path: '/profile', element: <Profile /> },
    { path: '*', element: <NotFound /> }


]


export default routes;