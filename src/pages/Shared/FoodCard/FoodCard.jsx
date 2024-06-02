import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddToCart = food => {
        // console.log(food, user.email);
        if (user && user.email) {
            //TODO: Add items to database cart
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        //refetch the cart data
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "You have to login before add item to carts",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }
    }

    return (
        <div className="relative">
            <img className="w-full" src={image} />
            <p className="bg-black text-white font-medium font-inter w-max px-4 py-[2px] absolute top-3 right-3">${price}</p>
            <div className="w-full bg-[#F3F3F3] text-center sm:px-5 px-3 md:px-7 pb-8">
                <h4 className="font-inter font-semibold text-[#151515] text-2xl pt-7">{name}</h4>
                <p className="pt-2 font-inter text-[#151515]">{recipe}</p>
                <button onClick={() => handleAddToCart(item)} className="uppercase font-inter text-lg text-[#BB8506] bg-[#E8E8E8] py-2 px-4 rounded-md border-b-[3px] border-[#BB8506] transition-all duration-200 ease-linear hover:bg-[#1F2937] hover:border-[#1F2937] font-medium mt-6">Add to Cart</button>
            </div>
        </div>
    );
};

export default FoodCard;