import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {

    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ['payment', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            console.log(res.data);
            return res.data
        }
    })

    return (
        <div className="mt-16">
            <div className='mb-12'>
                <h5 className='text-center mb-4 text-[#D99904] font-semibold italic text-base sm:text-xl'>---At a Glance!---</h5>
                <h3 className='uppercase border-y-4 border-[#cecece] py-4 px-8 sm:px-16 font-semibold sm:text-3xl text-xl md:text-4xl text-black text-center w-max mx-auto'>PAYMENT HISTORY</h3>
            </div>
            <div className="p-12 bg-white w-[992px]">
                <div className="w-full flex font-cinzel justify-between items-center font-bold text-3xl mb-5">
                    <h2 >Total Payments: {payments.length} </h2>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-[#D1A054] rounded-xl py-3">
                            <tr className="uppercase text-base text-white">
                                <th className="font-normal">Email</th>
                                <th className="font-normal">Category</th>
                                <th className="font-normal">Total Price</th>
                                <th className="font-normal">Payment Date</th>
                            </tr>
                        </thead>
                        {
                            payments.map((item, index) => <tbody key={item._id}>
                                <tr className="font-inter text-[#737373] text-base">
                                    <td >{item.email}</td>
                                    <td>Food Order</td>
                                    <th>${item.price}</th>
                                    <th>{item.date}</th>
                                </tr>
                            </tbody>)
                        }
    
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;