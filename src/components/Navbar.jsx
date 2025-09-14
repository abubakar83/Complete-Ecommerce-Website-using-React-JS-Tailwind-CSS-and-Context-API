import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { MapPin } from "lucide-react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {cartItem} = useCart()

  const toggleDropDown = () => {
    setOpenDropdown(!openDropdown);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* logo + location */}
        <div className="flex gap-4 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-2xl md:text-3xl">
              <span className="text-red-500 font-serif">Z</span>aptro
            </h1>
          </Link>
          {/* Location */}
          <div className="hidden md:flex gap-1 cursor-pointer text-gray-700 items-center">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? (
                <div className="-space-y-2">
                  <p>{location.county}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown onClick={toggleDropDown} />
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-7 items-center">
          <ul className="flex gap-7 items-center text-lg font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-2 border-red-500" : "text-black"
                } cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"products"}
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-2 border-red-500" : "text-black"
                } cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"about"}
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-2 border-red-500" : "text-black"
                } cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"contact"}
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-2 border-red-500" : "text-black"
                } cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-2 -right-2 text-white text-sm">
              {cartItem.length}
            </span>
          </Link>
          <div>
            <SignedOut>
              <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-6 w-6" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-2 -right-2 text-white text-xs">
              {cartItem.length}
            </span>
          </Link>
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <CgClose size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <ul className="flex flex-col gap-4 text-lg font-semibold">
            <NavLink to={"/"} onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to={"products"} onClick={() => setMobileMenuOpen(false)}>
              Products
            </NavLink>
            <NavLink to={"about"} onClick={() => setMobileMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to={"contact"} onClick={() => setMobileMenuOpen(false)}>
              Contact
            </NavLink>
          </ul>
          <div>
            <SignedOut>
              <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer w-full" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}

      {/* Location Dropdown */}
      {openDropdown && (
        <div className="w-[250px] shadow-2xl z-50 bg-white fixed top-16 left-4 md:left-40 border-2 p-5 border-gray-100 rounded-md">
          <h1 className="font-semibold mb-4 text-xl flex justify-between">
            Change Location
            <span onClick={toggleDropDown}>
              <CgClose />
            </span>
          </h1>
          <button
            onClick={getLocation}
            className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400"
          >
            Detect my Location
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;