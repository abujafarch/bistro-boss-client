import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import '../../src/App.css'

const Main = () => {

    const locationPath = useLocation().pathname
    const loginPath = locationPath.includes('login')

    return (
        <div>
            {!loginPath && <div className="fixed top-0 left-0 z-30 w-full"><NavBar></NavBar></div>}

            <Outlet></Outlet>
            
            {!loginPath && <Footer></Footer>}
        </div>
    );
};

export default Main;