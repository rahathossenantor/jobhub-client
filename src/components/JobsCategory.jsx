// import { Badge } from "flowbite-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaLocationArrow, FaShoppingBag, FaClock } from "react-icons/fa";
import "react-tabs/style/react-tabs.css";
import { Button } from "flowbite-react";

const JobsCategory = () => {
    const jobs = <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-5">
        {
            Array(4).fill(1).map((job, idx) => <div key={idx} className="border rounded-xl shadow-lg p-5">
                <div className="flex gap-3">
                    <img src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/page/job/digital.png" className="inline-block w-14 h-14 rounded-full" alt="company-logo" />
                    <div>
                        <h3 className="text-lg font-semibold">Development Team Lead</h3>
                        <div className="flex flex-wrap gap-3">
                            <p>AliStudio, Inc</p>
                            <p><FaLocationArrow className="inline-block"></FaLocationArrow> Dhaka, BD</p>
                            <p><FaShoppingBag className="inline-block"></FaShoppingBag> Full time</p>
                            <p><FaClock className="inline-block"></FaClock> 14-08-2012</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="flex justify-between gap-5">
                        <h4 className="text-xl">Posted by: <span className="font-semibold">Rahat Hossen</span></h4>
                        <h4 className="text-xl">Salary Range: <span className="font-semibold">$458-$7548</span></h4>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <p>Total applicants: <span>0</span></p>
                        <p>Deadline: <span>12-11-24</span></p>
                    </div>
                    <Button className="cursor-pointer px-3 bg-[#9777FA] hover:bg-[#9777FA] text-base">View Details</Button>
                </div>
            </div>)
        }
    </div>

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="text-center">
                <h2 className="text-5xl font-semibold mb-2">Browse by category</h2>
                <p className="text-lg mb-5">Find the type of work you need, clearly defined and ready to start. <br /> Work begins as soon as you purchase and provide requirements.</p>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab><span>All Jobs</span></Tab>
                        <Tab><span>On Site Jobs</span></Tab>
                        <Tab><span>Remote Jobs</span></Tab>
                        <Tab><span>Hybrid Jobs</span></Tab>
                        <Tab><span>Part Time Jobs</span></Tab>
                    </TabList>

                    <TabPanel>
                        {jobs}
                    </TabPanel>
                    <TabPanel>
                        {jobs}
                    </TabPanel>
                    <TabPanel>
                        {jobs}
                    </TabPanel>
                    <TabPanel>
                        {jobs}
                    </TabPanel>
                    <TabPanel>
                        {jobs}
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default JobsCategory;
