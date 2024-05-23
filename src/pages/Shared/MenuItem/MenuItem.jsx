const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item
    return (
        <div className="flex sm:flex-row flex-col md:flex-col lg:flex-row lg:items-center sm:items-center md:items-start gap-5 ">
            <img className="w-[105px] h-[100px] rounded-full rounded-tl-none object-cover" src={image}  />
            <div className="flex items-start gap-5">
                <div>
                    <h4 className="text-[#151515] mb-2 font-cinzel font-medium text-xl">{name}--------------</h4>
                    <p className="font-inter text-[#737373]">{recipe}</p>
                </div>
                <p className="text-[#BB8506] text-xl font-inter">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;