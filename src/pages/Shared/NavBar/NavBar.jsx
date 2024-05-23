import { Link, NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { BsCartPlus } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";



const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    // const handleOpenMenu = () => {
    //     setOpenMenu(!openMenu)
    // }

    return (
        <div className="max-w-[1920px] px-4 sm:px-7 md:px-10 lg:px-10 xl:px-14 bg-[#15151580] mx-auto">
            <nav className="flex relative items-center md:py-5 py-3 lg:py-8 justify-between">
                <div className="font-cinzel text-white text-xl md:text-2xl lg:text-3xl font-bold">
                    <p>BISTRO BOSS</p>
                    <p className="tracking-wider">restaurant</p>
                </div>
                <div className="items-center text-white font-semibold gap-4 hidden lg:flex">
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to='/contact-us'>CONTACT US</NavLink>
                    <NavLink to='/dashboard'>DASHBOARD</NavLink>
                    <NavLink to='/menu'>OUR MENU</NavLink>
                    <NavLink to='/order/salad'>ORDER FOOD</NavLink>
                    <Link>
                        <img className="w-10" src="https://i.ibb.co/NVvd9TZ/cart.png" />
                    </Link>
                    <NavLink to='sign-out'>SIGN OUT</NavLink>
                    <Link>
                        <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/56z5Y3h/profile.png" />
                    </Link>
                </div>

                <button onClick={() => setOpenMenu(true)} className="text-2xl lg:hidden text-white bg-[#00000056] p-2 rounded-full">
                    <HiOutlineMenu />
                </button>

                <div className={`absolute flex z-50 flex-col w-[240px] transition-all duration-500 ease-in-out  right-0 top-20  md:top-24 text-white bg-[#200f27] font-semibold border border-[#EEFF25] rounded-xl  ${openMenu ? 'opacity-100 block' : 'opacity-0 hidden'}`}>

                    <button onClick={() => setOpenMenu(false)} className="text-xl absolute right-0 top-0 translate-x-[30%] -translate-y-[30%] w-max text-red-700 p-[6px] rounded-full bg-[#311212]"><RxCross2 /></button>

                    <div className="flex flex-col px-6 pt-3">
                        <NavLink to='/' className='flex gap-3 py-4 border-b border-[#edff2538] border-dashed items-center'>
                            <HiOutlineHome className="text-2xl" />HOME
                        </NavLink>

                        <NavLink className='flex gap-3 py-4 border-b border-[#edff2538] border-dashed items-center' to='/contact-us'>
                            <RiContactsLine className="text-2xl" />CONTACT US
                        </NavLink>

                        <NavLink className='flex gap-3 py-4 border-b border-[#edff2538] border-dashed items-center' to='/dashboard'>
                            <MdOutlineDashboard className="text-2xl" />DASHBOARD
                        </NavLink>

                        <NavLink className='flex gap-3 py-4 border-b border-[#edff2538] border-dashed items-center' to='/menu'>
                            <MdOutlineRestaurantMenu className="text-2xl" />OUR MENU
                        </NavLink>

                        <NavLink className='flex gap-3 py-4 border-b border-[#edff2538] border-dashed items-center' to='/order/salad'>
                            <CiShop className="text-2xl" />ORDER FOOD
                        </NavLink>

                        <NavLink className='flex gap-3 py-4 border-b border-[#edff2538] border-dashed items-center' to='/cart'>
                            <BsCartPlus className="text-2xl" />CART
                        </NavLink>

                        <NavLink className='flex gap-3 py-4  items-center' to='/profile'>
                            <CgProfile className="text-2xl" />PROFILE
                        </NavLink>


                    </div>
                    <hr className="border-none h-[1px] bg-[#edff2546]" />

                    <div className={`py-4 px-6`}>
                        <button className='flex bg-[#edff25] gap-3 items-center justify-center w-full py-2  text-center rounded-md text-black'>SIGN OUT</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;