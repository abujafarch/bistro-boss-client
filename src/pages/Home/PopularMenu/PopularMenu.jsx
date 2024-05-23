import { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu()
    const popularItem = menu.filter(item => item.category === 'popular')

    return (
        <div className="md:mt-24 sm:mt-16 mt-10 max-w-[1320px] mx-auto px-4">
            <div className='mb-12'>
                <h5 className='text-center mb-4 text-[#D99904] font-semibold italic text-base sm:text-xl'>---Check it out---</h5>
                <h3 className='uppercase border-y-4 py-4 px-8 sm:px-16 font-semibold sm:text-3xl text-xl md:text-4xl text-black text-center w-max mx-auto'>FROM OUR MENU</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
                {
                    popularItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center mb-20"><button className="border-b-4 border-black py-2 px-5 rounded-xl hover:bg-black hover:text-white transition-all duration-500 ease-in-out uppercase font-inter text-lg">View Full Menu</button></div>
        </div>
    );
};

export default PopularMenu;