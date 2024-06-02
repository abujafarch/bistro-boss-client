import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import '../../src/App.css'

const Main = () => {

    const locationPath = useLocation().pathname
    const validatePath = locationPath.includes('login') || locationPath.includes('signup')

    return (
        <div>
            {!validatePath && <div className="fixed top-0 left-0 z-30 w-full"><NavBar></NavBar></div>}

            <Outlet></Outlet>

            {!validatePath && <Footer></Footer>}
        </div>
    );
};

export default Main;