import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import imageBg from '../../../assets/menu/banner3.jpg'
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(offer => offer.category === 'offered')
    const desserts = menu.filter(dessert => dessert.category === 'dessert')
    const salads = menu.filter(salad => salad.category === 'salad')
    const pizzas = menu.filter(pizza => pizza.category === 'pizza')
    const soups = menu.filter(soup => soup.category === 'soup')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover img={imageBg} title="Our Menu" tag="Would you like to try a dish?"></Cover>

            <div className='mb-12 mt-28'>
                <h5 className='text-center mb-4 text-[#D99904] font-semibold italic text-base sm:text-xl'>---Don&apos;t miss---</h5>
                <h3 className='uppercase text-black border-y-4 py-4 px-8 sm:px-16 font-semibold sm:text-3xl text-xl md:text-4xl  text-center w-max mx-auto'>TODAY&apos;S OFFER</h3>
            </div>
            {/* offered items  */}
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert items */}
            <MenuCategory items={desserts} title="desserts" tag="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s" coverImg={dessertBg}></MenuCategory>

            {/* pizzas items */}
            <MenuCategory items={pizzas} title="pizzas" tag="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s" coverImg={pizzaBg}></MenuCategory>

            {/* salads items */}
            <MenuCategory items={salads} title="salads" tag="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s" coverImg={saladBg}></MenuCategory>

            {/* soups items */}
            <MenuCategory items={soups} title="soups" tag="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s" coverImg={soupBg}></MenuCategory>

        </div>
    );
};

export default Menu;