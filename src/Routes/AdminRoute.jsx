import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if (loading || isAdminLoading) {
        return (
            <div className="w-full min-h-screen flex justify-center items-center">
                <img className="w-16 h-16 object-cover" src="https://i.ibb.co/D8HTgsG/Animation-1716986041601.gif" />
            </div>
        )
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default AdminRoute;