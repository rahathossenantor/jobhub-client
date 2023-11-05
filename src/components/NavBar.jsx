"use client";

import { Button, Avatar, Dropdown, Navbar } from "flowbite-react";

const NavBar = () => {
    return (
        <Navbar fluid rounded className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <Navbar.Brand href="/">
                <img src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/jobhub-logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
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
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active>Home</Navbar.Link>
                <Navbar.Link>About</Navbar.Link>
                <Navbar.Link>Services</Navbar.Link>
                <Navbar.Link>Pricing</Navbar.Link>
                <Navbar.Link>Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
