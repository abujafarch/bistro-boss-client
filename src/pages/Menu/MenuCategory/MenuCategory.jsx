import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, tag, coverImg }) => {
    return (
        <div className="md:mb-32 sm:mb-24 mb-16">
            {
                title && <Cover title={title} tag={tag} img={coverImg}></Cover>
            }

            <div className="grid md:grid-cols-2 gap-8 mb-8 md:mt-12 sm:mt-10 mt-7 max-w-[1320px] mx-auto px-4">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className="flex justify-center mb-20 px-4"><button className="border-b-4 border-black py-2 px-5 rounded-xl hover:bg-black hover:text-white transition-all duration-500 ease-in-out uppercase font-inter text-sm sm:text-lg">ORDER YOUR FAVORITE FOOD</button></div>
            </Link>
        </div>
    );
};

export default MenuCategory;