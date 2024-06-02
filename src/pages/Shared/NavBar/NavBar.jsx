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
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import './navbar.css'
import useAdmin from "../../../hooks/useAdmin";



const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [openMenu, setOpenMenu] = useState(false)
    const [cart] = useCart()
    const [isAdmin] = useAdmin()

    const handleLogout = () => {
        logOut()
            .then(() => console.log('logged out'))
            .catch((err) => console.log(err))

        setOpenMenu(false)
    }

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
                    {user && isAdmin && <NavLink to='/dashboard/adminHome'>DASHBOARD</NavLink>}
                    {user && !isAdmin && <NavLink to='/dashboard/userHome'>DASHBOARD</NavLink>}
                    <NavLink to='/menu'>OUR MENU</NavLink>
                    <NavLink to='/order/salads'>ORDER FOOD</NavLink>

                    <Link to='/dashboard/cart'><div className="bg-[#00000048] p-2 rounded-full flex items-center justify-center relative">
                        <FaCartArrowDown className="font-inter text-2xl"></FaCartArrowDown>
                        <p className="bg-red-500 flex items-center justify-center w-5 h-5 rounded-full absolute bottom-0 text-xs right-0 translate-x-[15%] translate-y-[15%]">{cart.length}</p>
                    </div></Link>

                    {
                        !user ? <NavLink to='/login'>LOGIN</NavLink> : <button onClick={handleLogout}>LOGOUT</button>
                    }

                    <Link>
                        <img className="w-8 h-8 rounded-full" src="../../../assets/others/profile.png" />
                    </Link>
                </div>

                <button onClick={() => setOpenMenu(true)} className="text-2xl lg:hidden text-white bg-[#00000056] p-2 rounded-full">
                    <HiOutlineMenu />
                </button>

                <div className={`absolute flex lg:hidden z-50 flex-col w-[240px] transition-all duration-500 ease-in-out  right-0 top-20  md:top-24 text-white bg-[#200f27] font-semibold border border-[#EEFF25] rounded-xl  ${openMenu ? 'opacity-100 block' : 'opacity-0 hidden'}`}>

                    <button onClick={() => setOpenMenu(false)} className="text-xl absolute right-0 top-0 translate-x-[30%] -translate-y-[30%] w-max text-red-700 p-[6px] rounded-full bg-[#311212]"><RxCross2 /></button>

                    <div className="flex flex-col px-6 pt-3">
                        <NavLink onClick={() => setOpenMenu(false)} to='/' className='flex gap-3 py-4 border-b border-[#edff2538] border-dashed items-center'>
                            <HiOutlineHome className="text-2xl" />HOME
                        </NavLink>

                        <NavLink onClick={() => setOpenMenu(false)} className='flex gap-3 py-4 border-b border-[#edff2538] border-dashed items-center' to='/contact-us'>
                            <RiContactsLine className="text-2xl" />CONTACT US
                        </NavLink>

                        {user && isAdmin && <NavLink onClick={() => setOpenMenu(false)} className='flex gap-3 py-4 border-b border-[#edff2538] border-dashed items-center' to='/dashboard/adminHome'>
                            <MdOutlineDashboard className="text-2xl" />DASHBOARD
                        </NavLink>}
                        {user && !isAdmin && <NavLink onClick={() => setOpenMenu(false)} className='flex gap-3 py-4 border-b border-[#edff2538] border-dashed items-center' to='/dashboard/userHome'>
                            <MdOutlineDashboard className="text-2xl" />DASHBOARD
                        </NavLink>}

                        <NavLink onClick={() => setOpenMenu(false)} className='flex gap-3 py-4 border-b border-[#edff2538] border-dashed items-center' to='/menu'>
                            <MdOutlineRestaurantMenu className="text-2xl" />OUR MENU
                        </NavLink>

                        <NavLink onClick={() => setOpenMenu(false)} className='flex gap-3 py-4 border-b border-[#edff2538] border-dashed items-center' to='/order/salads'>
                            <CiShop className="text-2xl" />ORDER FOOD
                        </NavLink>

                        <NavLink onClick={() => setOpenMenu(false)} className='flex gap-3 py-4 border-b border-[#edff2538] border-dashed items-center' to='/dashboard/cart'>
                            <BsCartPlus className="text-2xl" />CART
                        </NavLink>

                        <NavLink onClick={() => setOpenMenu(false)} className='flex gap-3 py-4  items-center' to='/profile'>
                            <CgProfile className="text-2xl" />PROFILE
                        </NavLink>


                    </div>
                    <hr className="border-none h-[1px] bg-[#edff2546]" />

                    <div className={`py-4 px-6`}>
                        {!user ?
                            <NavLink to='/login'>
                                <button onClick={() => setOpenMenu(false)} className='flex bg-[#edff25] gap-3 items-center justify-center w-full py-2  text-center rounded-md text-black'>LOGIN</button>
                            </NavLink>

                            : <button onClick={handleLogout} className='flex bg-[#edff25] gap-3 items-center justify-center w-full py-2  text-center rounded-md text-black'>LOGOUT</button>}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;