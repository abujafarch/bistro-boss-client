import image from '../../../assets/home/featured.jpg';

const Feature = () => {
    return (
        <div className='featured bg-fixed md:mt-24 sm:mt-16 mt-10 w-full py-28 '>
            <div className='mb-12'>
                <h5 className='text-center mb-4 text-[#D99904] font-semibold italic text-base sm:text-xl'>---Check it out---</h5>
                <h3 className='uppercase text-white border-y-4 py-4 px-8 sm:px-16 font-semibold sm:text-3xl text-xl md:text-4xl  text-center w-max mx-auto'>FROM OUR MENU</h3>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-14 text-white max-w-[1320px] mx-auto px-5'>
                <img className='md:w-1/2' src={image} />
                <div>
                    <h4 className='uppercase text-xl sm:text-2xl font-inter'>June 23, 2024 <br /> Where can i get some</h4>
                    <p className='mt-5 font-inter'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, fugit ipsam. Esse pariatur nisi ad perspiciatis amet facilis maiores ex, consequatur labore voluptate, quas est totam quidem ratione velit accusamus quos eveniet quasi? Iusto architecto modi exercitationem sint suscipit nihil ea temporibus, nostrum quae, illo officiis sapiente maiores excepturi ipsum.</p>
                    <button className='mt-7 uppercase border-b-[3px] rounded-md px-5 py-2 hover:bg-white hover:text-black transition-all duration-500 ease-out font-medium'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;