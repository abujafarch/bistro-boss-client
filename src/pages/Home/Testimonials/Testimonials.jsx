import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [])

    return (
        <div className="md:mt-24 sm:mt-16 mt-10 max-w-[1320px] mx-auto px-4 mb-10 sm:mb-14 md:mb-24 lg:mb-32">
            <div className='mb-12'>
                <h5 className='text-center mb-4 text-[#D99904] font-semibold italic text-base sm:text-xl'>---What Our Clients Say---</h5>
                <h3 className='uppercase border-y-4 py-4 px-8 sm:px-16 font-semibold sm:text-3xl text-xl md:text-4xl text-black text-center w-max mx-auto'>TESTIMONIALS</h3>
            </div>
            <div>
                <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper flex flex-col items-center justify-center">
                    {
                        reviews.map(review =>
                            <>
                                <SwiperSlide >
                                    <div className="max-w-[1096px] font-inter mx-auto text-center flex flex-col items-center justify-center px-10">
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            readOnly
                                        />
                                        <p className="font-cinzel text-[250px] -my-14">&apos;&apos;</p>
                                        <p className="text-[#444444] sm:text-xl -mt-40">{review.details}</p>
                                        <h5 className="text-[#CD9003] text-3xl uppercase mt-5">{review.name}</h5>
                                    </div>
                                </SwiperSlide>
                            </>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;