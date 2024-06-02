import { useEffect, useState } from "react";
import RecommendsItem from "./RecommendsItem";

const RecommendsItems = () => {

    const [recommendsItems, setRecommendsItems] = useState([])

    useEffect(() => {
        fetch('https://bistro-boss-server-delta-nine.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                const recommendsItems = data.filter(recommendsItem => recommendsItem.category === 'offered')
                setRecommendsItems(recommendsItems.slice(0,3))
            })
    }, [])

    return (
        <div className="md:mt-24 sm:mt-16 mt-10 max-w-[1320px] mx-auto px-4">
            <div className='mb-12'>
                <h5 className='text-center mb-4 text-[#D99904] font-semibold italic text-base sm:text-xl'>---Should Try---</h5>
                <h3 className='uppercase border-y-4 py-4 px-8 sm:px-16 font-semibold sm:text-3xl text-xl md:text-4xl text-black text-center w-max mx-auto'>CHEF RECOMMENDS</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    recommendsItems.map(recommendsItem => <RecommendsItem key={recommendsItem._id} recommendsItem={recommendsItem}></RecommendsItem>)
                }
            </div>
        </div>
    );
};

export default RecommendsItems;