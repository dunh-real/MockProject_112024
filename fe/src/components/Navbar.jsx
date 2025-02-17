/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import {
  Navbar as MaterialNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logoSvg from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pages = [
    { page: "Home", route: "/home" },
    { page: "About Us", route: "/about-us" },
    { page: "Contact", route: "/contact" },
    { page: "Insurance Types", route: "/insurance-types" },
  ];

  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
      {pages.map((item) => (
        <li key={item.page} className="p-1">
          <Link
            to={item.route}
            className="font-normal text-black cursor-pointer hover:text-blue-500"
          >
            <Typography as="span" variant="small" className="font-black-500">
              {item.page}
            </Typography>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <MaterialNavbar className="sticky top-0 z-10 h-max max-w-full py-2 px-4 lg:px-8 bg-white">
      <div className="flex items-center justify-between text-blue-gray-900">
        {/* Logo */}
        <Typography as="a" href="#" className="mr-4 cursor-pointer">
          <img src={logoSvg} alt="Company Logo" className="h-10" />
        </Typography>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center center gap-4">
          {navList}
          <Button
            variant="text"
            size="sm"
            aria-label="Log in"
            onClick={() => navigate("/login")}
          >
            Log In
          </Button>
          <Button variant="gradient" size="sm" aria-label="Sign in">
            Sign In
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      {/* Mobile Navigation */}
      <MobileNav open={openNav}>
        {navList}
        <div className="flex flex-col items-center gap-2">
          <Button fullWidth variant="text" size="sm" onClick>
            Log In
          </Button>
          <Button fullWidth variant="gradient" size="sm">
            Sign In
          </Button>
        </div>
      </MobileNav>
    </MaterialNavbar>
  );
};
