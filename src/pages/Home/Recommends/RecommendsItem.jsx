const RecommendsItem = ({recommendsItem}) => {

    const {name, recipe, image, price} = recommendsItem

    return (
        <div>
            <img className="w-full" src={image}  />
            <div className="w-full bg-[#F3F3F3] text-center sm:px-5 px-3 md:px-7 pb-8">
                <h4 className="font-inter font-semibold text-[#151515] text-2xl pt-7">{name}</h4>
                <p className="pt-2 font-inter text-[#151515]">{recipe}</p>
                <button className="uppercase font-inter text-lg text-[#BB8506] bg-[#E8E8E8] py-2 px-4 rounded-md border-b-[3px] border-[#BB8506] transition-all duration-200 ease-linear hover:bg-[#1F2937] hover:border-[#1F2937] font-medium mt-6">Add to Cart</button>
            </div>
        </div>
    );
};

export default RecommendsItem;