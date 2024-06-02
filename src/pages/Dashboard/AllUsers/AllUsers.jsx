import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa";


const AllUsers = () => {

    // const users = []
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated",
                        text: `${user.name} is now an Admin`,
                        icon: "success"
                    });
                    refetch()
                }
            })
    }

    const handleDeleteUser = (id) => {
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
                axiosSecure.delete(`/users/${id}`)
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
                <h5 className='text-center mb-4 text-[#D99904] font-semibold italic text-base sm:text-xl'>---How Many??---</h5>
                <h3 className='uppercase border-y-4 border-[#cecece] py-4 px-8 sm:px-16 font-semibold sm:text-3xl text-xl md:text-4xl text-black text-center w-max mx-auto'>MANAGE ALL USERS</h3>
            </div>
            <div className="p-12 bg-white w-[992px]">

                <h2 className="font-cinzel font-bold text-3xl mb-5">Total users: {users.length} </h2>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-[#D1A054] rounded-xl py-3">
                            <tr className="uppercase text-base text-white">
                                <th>
                                </th>
                                <th className="font-normal">Name</th>
                                <th className="font-normal">Email</th>
                                <th className="font-normal">Role</th>
                                <th className="font-normal">Action</th>
                            </tr>
                        </thead>
                        {
                            users.map((user, index) => <tbody key={user._id}>
                                <tr className="font-inter text-[#737373] text-base">
                                    <th className="text-black text-lg">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td >{user.email}</td>
                                    <td>
                                        {
                                            user?.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="text-2xl text-white flex items-center justify-center bg-green-500 p-2 rounded-md"><FaUser></FaUser></button>
                                        }
                                    </td>
                                    <th>
                                        <button onClick={() => handleDeleteUser(user._id)} className="text-2xl text-white flex items-center justify-center bg-[#B91C1C] p-2 rounded-md"><MdDelete></MdDelete></button>
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

export default AllUsers;