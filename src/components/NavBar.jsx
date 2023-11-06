"use client";

import { Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar fluid rounded className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <Navbar.Brand href="/">
                <img src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/jobhub-logo.svg" className="mr-3" alt="jobhub-logo" />
            </Navbar.Brand>
            <div className="flex md:order-2">
                {/* <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown> */}
                <Button as="span" className="cursor-pointer px-3 bg-[#9777FA] text-base">Login</Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <NavLink to="/"><Navbar.Link active className="text-base">Home</Navbar.Link></NavLink>
                <NavLink><Navbar.Link className="text-base">All Jobs</Navbar.Link></NavLink>
                {/* <NavLink><Navbar.Link className="text-base">Applied Jobs</Navbar.Link></NavLink> */}
                {/* <NavLink><Navbar.Link className="text-base">Add A Job</Navbar.Link></NavLink> */}
                {/* <NavLink><Navbar.Link className="text-base">My Jobs</Navbar.Link></NavLink> */}
                <NavLink to="/blogs"><Navbar.Link className="text-base">Blogs</Navbar.Link></NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
