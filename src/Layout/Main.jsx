import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import '../../src/App.css'

const Main = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 z-30 w-full"><NavBar></NavBar></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;