import { MdDelete } from "react-icons/md";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {

    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, current) => total + current.price, 0)
    const axiosSecure = useAxiosSecure()

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    return (
        <div className="mt-16">
            <div className='mb-12'>
                <h5 className='text-center mb-4 text-[#D99904] font-semibold italic text-base sm:text-xl'>---My Cart---</h5>
                <h3 className='uppercase border-y-4 border-[#cecece] py-4 px-8 sm:px-16 font-semibold sm:text-3xl text-xl md:text-4xl text-black text-center w-max mx-auto'>WANNA ADD MORE?</h3>
            </div>
            <div className="p-12 bg-white w-[992px]">
                <div className="w-full flex font-cinzel justify-between items-center font-bold text-3xl mb-5">
                    <h2>My Cart</h2>
                    <h2 >Total: ${totalPrice} </h2>
                    {
                        cart.length ? <Link to="/dashboard/payment"><button className="bg-[#D1A054] py-2 px-3 rounded-md text-base text-white">Pay</button></Link> : <button className="bg-[#696969] disabled: py-2 px-3 rounded-md text-base text-white">Pay</button>
                    }
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-[#D1A054] rounded-xl py-3">
                            <tr className="uppercase text-base text-white">
                                <th>
                                </th>
                                <th className="font-normal">Item Image</th>
                                <th className="font-normal">Item Name</th>
                                <th className="font-normal">Price</th>
                                <th className="font-normal">Action</th>
                            </tr>
                        </thead>
                        {
                            cart.map((item, index) => <tbody key={item._id}>
                                <tr className="font-inter text-[#737373] text-base">
                                    <th className="text-black text-lg">{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3 avatar mask w-16 h-16">
                                            <img className='rounded-md' src={item.image} />
                                        </div>
                                    </td>
                                    <td >{item.name}</td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="text-2xl text-white flex items-center justify-center bg-[#B91C1C] p-2 rounded-md"><MdDelete></MdDelete></button>
                                    </th>
                                </tr>
                            </tbody>)
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;