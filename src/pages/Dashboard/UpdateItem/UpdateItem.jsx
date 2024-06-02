import { ImSpoonKnife } from "react-icons/im";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Input from "../../../components/Input/Input";
import { useLoaderData } from "react-router-dom";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { name, recipe, price, category, _id } = useLoaderData()

    const handleUpdateItem = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.recipe.value
        const category = form.category.value
        const price = form.price.value
        const image = form.image.files
        const imageFile = { image: image[0] }
        console.log(imageFile);
        const recipe = form.recipeDetails.value
        console.log({ name, category, recipe, price, imageFile });

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const menuItem = {
                name,
                category,
                price: parseFloat(price),
                image: res.data.data.display_url,
                recipe
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // form.reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} updated successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url: ', res.data);
    }
    return (
        <div className="my-16">
            <div className='mb-12'>
                <h5 className='text-center mb-4 text-[#D99904] font-semibold italic text-base sm:text-xl'>---Refresh Here---</h5>
                <h3 className='uppercase border-y-4 border-[#cecece] py-4 px-8 sm:px-16 font-semibold sm:text-3xl text-xl md:text-4xl text-black text-center w-max mx-auto'>UPDATE AN ITEM</h3>
            </div>
            <form onSubmit={handleUpdateItem}>
                <div className="bg-[#F3F3F3] p-12 w-full font-inter font-medium text-lg">
                    <Input type={'text'} required={true} title={'Recipe Name*'} placeholder={"Recipe name"} name={"recipe"} defaultValue={name} ></Input>
                    <div className="flex gap-6 mt-5 w-full">
                        <div className="w-full">
                            <p className="font-semibold text-lg mb-1 text-[#444444]" >Category*</p>
                            <select defaultValue={category} name="category" required className="outline-none w-full px-4 py-3 rounded-md border border-[#D0D0D0]">
                                <option disabled value="select">Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="soup">Soup</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        <Input type={'text'} required={true} title={'Price*'} placeholder={"Price"} name={"price"} defaultValue={price} ></Input>
                    </div>
                    <div className="mt-5">
                        <p className="font-semibold text-lg mb-1 text-[#444444]">Recipe Details</p>
                        <textarea defaultValue={recipe} name="recipeDetails" cols="30" rows="10" className="outline-none w-full px-4 py-3 rounded-md border border-[#D0D0D0] p-3" placeholder="Recipe details here"></textarea>
                    </div>
                    <div className="mt-5">
                        <input type="file" required name="image" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <button className="bg-gradient-to-r from-[#835D23] to-[#B58130] mt-5 font-semibold text-lg font-inter text-white px-3 py-2 flex items-center gap-2">Update Items <ImSpoonKnife></ImSpoonKnife></button>
                </div>
            </form>
        </div>
    );
};

export default UpdateItem;