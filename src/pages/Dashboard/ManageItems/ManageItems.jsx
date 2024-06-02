import { MdDelete } from "react-icons/md";
import useMenu from "../../../hooks/useMenu";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {

    const axiosSecure = useAxiosSecure()
    const [menu, refetch, loading] = useMenu()

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
                axiosSecure.delete(`/menu/${id}`)
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
                <h5 className='text-center mb-4 text-[#D99904] font-semibold italic text-base sm:text-xl'>---Hurry Up!---</h5>
                <h3 className='uppercase border-y-4 border-[#cecece] py-4 px-8 sm:px-16 font-semibold sm:text-3xl text-xl md:text-4xl text-black text-center w-max mx-auto'>MANAGE ALL ITEMS</h3>
            </div>
            <div className="p-12 bg-white w-[992px]">
                <div className="w-full flex font-cinzel justify-between items-center font-bold text-3xl mb-5">
                    <h2 >Total Items: {menu.length} </h2>
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
                                <th className="font-normal">Action</th>
                            </tr>
                        </thead>
                        {
                            menu.map((item, index) => <tbody key={item._id}>
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
                                        <Link to={`../updateItem/${item._id}`}><button className="text-2xl text-white flex items-center justify-center bg-[#D1A054] p-2 rounded-md"><FaRegEdit></FaRegEdit></button></Link>
                                    </th>
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

export default ManageItems;