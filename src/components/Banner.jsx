import { Button, TextInput } from "flowbite-react";

const Banner = () => {
    return (
        <section className="bg-[#FFF9F3]">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 text-center">
                <div className="w-full flex gap-5 h-full text-left items-center">
                    <div className="2xl:w-1/2 xl:w-1/2 lg:w-full md:w-full py-10 md:py-0 lg:py-0 xl:py-0">
                        <h2 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-4xl font-semibold">The Easiest Way to Get Your New Job</h2>
                        <p className="my-3 text-[17px]">More than 3 million job seekers turn to website in their search for work, making over 140,000 applications every day</p>
                        <div className="flex mt-2">
                            <TextInput id="input-gray" className="block w-1/2" placeholder="Job title" />
                            <Button as="span" className="cursor-pointer px-3 bg-[#9777FA] text-base">Search</Button>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-full lg:w-full xl:w-1/2 hidden md:flex lg:flex xl:flex items-center justify-center">
                        <img className="inline-block xl:w-10/12" src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/banner/banner.png" alt="banner-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
