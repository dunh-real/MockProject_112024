/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import {
  Navbar as MaterialNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";
import logoSvg from '../assets/logo.svg';
import { Container } from '@mui/material';

export const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Home", "About Us", "Contact", "Product"].map((item) => (
        <Typography
          key={item}
          as="li"
          variant="small"
          color="white"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center" color="white !important">
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Container className="sticky top-0 z-10 h-max max-w-full rounded-none  py-2" style={{background: "white", maxWidth: "-webkit-fill-available"}}>
      <div className="flex items-center justify-between text-blue-gray-900 mt-4" style={{margin: "16px"}}>
        {/* Logo và Input */}
        <div className="flex items-center gap-6">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img src={logoSvg} alt="Liberty Mutual Logo" className="h-10" />

          </Typography>
        </div>

        {/* Navigation và Buttons */}
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Button variant="text" size="sm" className="hidden lg:inline-block">
              <span>Log In</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Sign in</span>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
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
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm">
            <span>Log In</span>
          </Button>
          <Button fullWidth variant="gradient" size="sm">
            <span>Sign in</span>
          </Button>
        </div>
      </MobileNav>
    </Container>

  );
};
