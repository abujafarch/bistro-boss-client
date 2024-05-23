import { Parallax } from 'react-parallax';

const Cover = ({ img, title, tag }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero md:h-[750px] h-[500px] sm:h-[650px] max-w-full">
                <div className="hero-content text-center text-neutral-content h-[330px] md:h-[370px] w-[80vw] bg-[#00000085]">
                    {/* <img className="w-auto hidden" src={img} /> */}
                    <div className="">
                        <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase font-cinzel">{title}</h1>
                        <p className="sm:text-xl text-lg md:text-2xl font-semibold font-cinzel">{tag}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;