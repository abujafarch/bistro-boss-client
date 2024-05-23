import image from '../../../assets/home/chef-service.jpg'


const BistroBoss = () => {
    return (
        <div className="max-w-[1320px] mx-auto h-[580px] relative px-4" >
            <img className='w-full h-full object-cover' src={image} />
            <div className='absolute bottom-1/2 translate-y-1/2 left-1/2 w-full px-10 sm:px-14 md:px-20 lg:px-28 -translate-x-1/2 z-10'>
                <div className=' bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-8 sm:px-16 md:px-24 lg:px-32'>
                    <h3 className='md:text-4xl text-3xl text-center font-cinzel font-semibold mb-3'>Bistro Boss</h3>
                    <p className='text-center sm:text-base text-sm'>Nestled in the heart of the city, Bella Vita offers a cozy ambiance with a modern twist. Delight in authentic Italian cuisine, crafted with fresh, locally sourced ingredients, and indulge in our exquisite wine selection. Perfect for any occasion.</p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;