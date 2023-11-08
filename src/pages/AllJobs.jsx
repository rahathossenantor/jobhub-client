import { Button, TextInput } from "flowbite-react";

const AllJobs = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-10">
            <div className="flex justify-center">
                <div className="flex mt-2">
                    <TextInput id="input-gray" placeholder="Job title" />
                    <Button as="span" className="cursor-pointer px-3 bg-[#9777FA] text-base">Search</Button>
                </div>
            </div>
            <div className="mt-5">
                <div>
                    <div className="hidden xl:grid xl:grid-cols-6 items-center border py-2">
                        <div>
                            <h5 className="text-base font-semibold">Posted by</h5>
                        </div>
                        <div>
                            <h5 className="text-base font-semibold">Title</h5>
                        </div>
                        <div>
                            <h5 className="text-base font-semibold">Posting date</h5>
                        </div>
                        <div>
                            <h5 className="text-base font-semibold">Last date</h5>
                        </div>
                        <div>
                            <h5 className="text-base font-semibold">Salary range</h5>
                        </div>
                        <div>
                        </div>
                    </div>

                    {[1, 4, 5, 8, 7, 6,].map((element, idx) =>
                        <div key={idx} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 items-center py-2 border border-t-0">
                            <div>
                                <h5>Md Rahat Hossen</h5>
                            </div>
                            <div>
                                <h5>Softwere Developer</h5>
                            </div>
                            <div>
                                <h5>14-02-12</h5>
                            </div>
                            <div>
                                <h5>14-02-12</h5>
                            </div>
                            <div>
                                <h5>$24515-$14567</h5>
                            </div>
                            <div>
                                <Button as="span" 
                                className="inline-block cursor-pointer px-3 bg-[#9777FA] text-base">Details</Button>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default AllJobs;
