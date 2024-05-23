import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'


const Category = () => {
    return (
        <div className='max-w-[1320px] text-white mx-auto mt-20 mb-28 px-4 relative'>

            <div className='mb-12'>
                <h5 className='text-center mb-4 text-[#D99904] font-semibold italic text-base sm:text-xl'>---From 11:00am to 10:00pm---</h5>
                <h3 className='uppercase border-y-4 py-4 px-8 sm:px-16 font-semibold sm:text-3xl text-xl md:text-4xl text-black text-center w-max mx-auto'>ORDER ONLINE</h3>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} />
                    <h3 className='uppercase w-max text-3xl absolute  bottom-0 left-1/2 -translate-x-1/2'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} />
                    <h3 className='uppercase w-max text-3xl absolute  bottom-0 left-1/2 -translate-x-1/2'>soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} />
                    <h3 className='uppercase w-max text-3xl absolute  bottom-0 left-1/2 -translate-x-1/2'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} />
                    <h3 className='uppercase w-max text-3xl absolute  bottom-0 left-1/2 -translate-x-1/2'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} />
                    <h3 className='uppercase w-max text-3xl absolute  bottom-0 left-1/2 -translate-x-1/2'>salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;