"use client";

import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
    const { user, profileAvatar, signOutUser } = useAuth();

    return (
        <Navbar fluid rounded className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <Navbar.Brand href="/">
                <img src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/jobhub-logo.svg" className="mr-3" alt="jobhub-logo" />
            </Navbar.Brand>
            <div className="flex md:order-2">

                {
                    user
                        ? <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img={profileAvatar
                                    ? profileAvatar
                                    : user?.photoURL ? user?.photoURL : "https://flowbite.com/docs/images/people/profile-picture-2.jpg"} rounded />
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
                            <Dropdown.Item onClick={signOutUser}>Sign out</Dropdown.Item>
                        </Dropdown>
                        : <Button as="span" className="cursor-pointer px-3 bg-[#9777FA] text-base"><Link to="/login">Login</Link></Button>
                }
                <Navbar.Toggle />

            </div>
            <Navbar.Collapse>
                <Navbar.Link className="text-base"><NavLink to="/">Home</NavLink></Navbar.Link>
                <Navbar.Link className="text-base"><NavLink to="/alljobs">All Jobs</NavLink></Navbar.Link>
                <Navbar.Link className="text-base"><NavLink to="appliedjobs">Applied Jobs</NavLink></Navbar.Link>
                <Navbar.Link className="text-base"><NavLink to="addjob">Add A Job</NavLink></Navbar.Link>
                <Navbar.Link className="text-base"><NavLink to="myjobs">My Jobs</NavLink></Navbar.Link>
                <Navbar.Link className="text-base"><NavLink to="/blogs">Blogs</NavLink></Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
