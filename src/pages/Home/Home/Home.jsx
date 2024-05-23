import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import ContactUs from "../ContactUs/ContactUs";
import Feature from "../Feature/Feature";
import PopularMenu from "../PopularMenu/PopularMenu";
import RecommendsItems from "../Recommends/RecommendsItems";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <BistroBoss />
            <PopularMenu />
            <ContactUs />
            <RecommendsItems />
            <Feature />
            <Testimonials />
        </div>
    );
};

export default Home;