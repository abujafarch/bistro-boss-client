import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaMoneyBillWave, FaUsers } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { MdLocalShipping } from "react-icons/md";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red'];


const AdminHome = () => {

    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            console.log(res.data);
            return res.data
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            console.log('order stats here:', res.data)
            return res.data
        }
    })

    //custom shape for bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    //pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const piChartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    })

    return (
        <div className="mt-12">
            <h2 className="text-3xl font-cinzel font-bold">
                <span>Hi, Welcome </span>
                {
                    user ? user?.displayName : 'Back'
                }
            </h2>
            <div className="stats gap-5 bg-transparent mt-6">
                <div className="stat rounded-2xl w-max flex items-center gap-5 py-8 px-12 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] font-inter text-white">
                    <p className="text-5xl font-extrabold"><FaMoneyBillWave></FaMoneyBillWave></p>
                    <div>
                        <h2 className="font-extrabold text-4xl">{stats.revenue}</h2>
                        <h4 className="text-2xl">Revenue</h4>
                    </div>
                </div>
                <div className="stat rounded-2xl w-max flex items-center gap-5 py-8 px-12 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] font-inter text-white">
                    <p className="text-5xl font-extrabold"><FaUsers></FaUsers></p>
                    <div>
                        <h2 className="font-extrabold text-4xl">{stats.users}</h2>
                        <h4 className="text-2xl">Users</h4>
                    </div>
                </div>
                <div className="stat rounded-2xl w-max flex items-center gap-5 py-8 px-12 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] font-inter text-white">
                    <p className="text-5xl font-extrabold"><ImSpoonKnife></ImSpoonKnife></p>
                    <div>
                        <h2 className="font-extrabold text-4xl">{stats.menuItems}</h2>
                        <h4 className="text-2xl">Menu items</h4>
                    </div>
                </div>
                <div className="stat rounded-2xl  w-max flex items-center gap-5 py-8 px-12 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] font-inter text-white">
                    <p className="text-5xl font-extrabold"><MdLocalShipping></MdLocalShipping></p>
                    <div>
                        <h2 className="font-extrabold text-4xl">{stats.orders}</h2>
                        <h4 className="text-2xl">Orders</h4>
                    </div>
                </div>
            </div>

            <div className="mt-28 flex justify-around items-center">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="_id" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={piChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {piChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend></Legend>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;