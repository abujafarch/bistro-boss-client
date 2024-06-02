import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if (loading) {
        return (
            <div className="w-full min-h-screen flex justify-center items-center">
                <img className="w-16 h-16 object-cover" src="https://i.ibb.co/D8HTgsG/Animation-1716986041601.gif" />
            </div>
        )
    }

    else if(user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;