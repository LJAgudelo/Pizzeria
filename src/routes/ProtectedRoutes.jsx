import { Navigate } from "react-router"
import { userUser } from "../context/userContext"

const ProtectedRoutes = ({ children }) => {
    const token = userUser()

    if (token === false) {
        return <Navigate to="/login" />

    }

    return
    children

}

export default ProtectedRoutes