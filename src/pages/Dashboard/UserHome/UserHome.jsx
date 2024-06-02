import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const UserHome = () => {
    const { user } = useContext(AuthContext)
    
    return (
        <div>
            <span>Hi, Welcome</span>
            {
                user ? user?.displayName : 'Back'
            }
        </div>
    );
};

export default UserHome;