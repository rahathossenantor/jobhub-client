import { Button, TextInput } from "flowbite-react";

const Notification = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-20 border-t hidden md:block lg:block xl:block">
            <div className="relative flex items-center justify-center">
                <img src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/bg-newsletter-top.svg" alt="bacground-image" className="inline-block w-full" />
                <div className="absolute md:top-5 lg:top-12 xl:top-20 2xl:top-28 left-5 bottom-5 text-white w-full h-full">
                    <h3 className="text-4xl">Sign up to get</h3>
                    <h2 className="text-5xl font-semibold">the latest jobs</h2>
                    <div className="flex w-full md:w-8/12 lg:w-8/12 xl:w-6/12 mt-3">
                        <TextInput id="email4" className="w-full" type="email" placeholder="email@email.com" required />
                        <Button as="span" className="cursor-pointer px-3 bg-[#6D4BD3] text-base">Subscribe</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
