import { NavLink, Outlet } from "react-router-dom";
// import './dashboard.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaBook, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdOutlinePayment, MdReviews, MdShoppingBag } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { LuMenuSquare } from "react-icons/lu";
import { GrContact } from "react-icons/gr";
import { TfiMenuAlt } from "react-icons/tfi";
import { ImSpoonKnife } from "react-icons/im";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    const [cart] = useCart()

    return (
        <div className="flex bg-[#E8E8E8]">
            <div className="bg-[#D1A054] min-h-screen pt-12 px-9 w-max fixed left-0 top-0">
                <h3 className="text-2xl font-cinzel font-semibold">Bistro Boss <br />Restaurant</h3>
                <ul className="mt-6 font-cinzel font-bold space-y-6">
                    {
                        isAdmin ?
                            <>
                                <li >
                                    <NavLink to='/dashboard/adminHome' className="flex items-center gap-2" > <AiFillHome className="text-2xl"></AiFillHome>Admin Home</NavLink>
                                </li>
                                <li >
                                    <NavLink to='/dashboard/addItems' className="flex items-center gap-2" > <ImSpoonKnife className="text-2xl"></ImSpoonKnife>Add Items</NavLink>
                                </li>
                                <li >
                                    <NavLink to='/dashboard/manageItems' className="flex items-center gap-2" > <TfiMenuAlt className="text-2xl"></TfiMenuAlt>Manage Items</NavLink>
                                </li>
                                <li >
                                    <NavLink to='/dashboard/manageBookings' className="flex items-center gap-2" > <TbBrandBooking className="text-2xl"></TbBrandBooking>Manage Bookings</NavLink>
                                </li>
                                <li >
                                    <NavLink to='/dashboard/users' className="flex items-center gap-2" > <FaUsers className="text-2xl"></FaUsers>All Users</NavLink>
                                </li>
                            </> :
                            <>
                                <li >
                                    <NavLink to='/dashboard/userHome' className="flex items-center gap-2" > <AiFillHome className="text-2xl"></AiFillHome>User Home</NavLink>
                                </li>
                                <li >
                                    <NavLink to='/dashboard/payment' className="flex items-center gap-2" > <FaCalendarAlt className="text-2xl"></FaCalendarAlt>Reservation</NavLink>
                                </li>
                                <li >
                                    <NavLink to='/dashboard/paymentHistory' className="flex items-center gap-2" > <MdOutlinePayment className="text-2xl"></MdOutlinePayment>Payment History</NavLink>
                                </li>
                                <li >
                                    <NavLink to='/dashboard/cart' className="flex items-center gap-2" > <FaCartShopping className="text-2xl"></FaCartShopping>My Cart ({cart.length})</NavLink>
                                </li>
                                <li >
                                    <NavLink to='/dashboard/addReview' className="flex items-center gap-2" > <MdReviews className="text-2xl"></MdReviews>Add Review</NavLink>
                                </li>
                                <li >
                                    <NavLink to='/dashboard/paymentHistory' className="flex items-center gap-2" > <TbBrandBooking className="text-2xl"></TbBrandBooking>Payment History</NavLink>
                                </li>
                            </>
                    }

                    <hr className="border-none h-[1px] bg-white my-5" />

                    <li >
                        <NavLink to='/' className="flex items-center gap-2" > <AiFillHome className="text-2xl"></AiFillHome>Home</NavLink>
                    </li>
                    <li >
                        <NavLink to='/menu' className="flex items-center gap-2" > <LuMenuSquare className="text-2xl"></LuMenuSquare>Menu</NavLink>
                    </li>
                    <li >
                        <NavLink to='/dashboard/home' className="flex items-center gap-2" > <MdShoppingBag className="text-2xl"></MdShoppingBag>Shop</NavLink>
                    </li>
                    <li >
                        <NavLink to='/dashboard/home' className="flex items-center gap-2" > <GrContact className="text-2xl"></GrContact>Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="mx-auto w-[992px] min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;