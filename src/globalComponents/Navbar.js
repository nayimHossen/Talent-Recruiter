import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <header>
      <div className="flex justify-between py-3 items-center container mx-auto px-5">
        {/* Website Logo */}
        <div>
          <h2 className="text-4xl font-bold text-accent">Telent</h2>
        </div>

        {/* md and lg navbar start */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between sm:gap-10">
            <div>
              <ul className="flex md:gap-3 lg:gap-6">
                <li className="font-bold">Home</li>
                <li className="font-bold">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="font-bold">Reviews</li>
                <li className="font-bold">Blogs</li>
                <li className="font-bold">Contact</li>
              </ul>
            </div>
            <div className="flex gap-2">
              <button className="bg-accent hover:bg-transparent text-white hover:border-accent hover:text-accent font-bold px-4 py-2 border-2 hover:border-2">
                Login
              </button>
              <button className="bg-accent hover:bg-transparent text-white hover:border-accent hover:text-accent font-bold px-4 py-2 border-2 hover:border-2">
                Register
              </button>
            </div>
          </div>
        </div>
        {/* md and lg navbar start */}

        {/* Mobile navbar start */}
        <label className="btn bg-white hover:bg-white px-3 swap swap-rotate border-2 md:hidden">
          <input type="checkbox" onClick={() => setCheckbox(!checkbox)} />
          <svg
            className="swap-off"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>

        {checkbox && (
          <div className="absolute top-20 inset-x-4 z-10 md:hidden">
            <ul className="menu bg-base-100 p-5 shadow-lg rounded-box border-2 w-full gap-y-3">
              <li className="font-bold">Home</li>
              <li className="font-bold">About</li>
              <li className="font-bold">Reviews</li>
              <li className="font-bold">Blogs</li>
              <li className="font-bold">Contact</li>

              <div className="gap-2">
                <button className="bg-accent hover:bg-transparent hover:border-accent text-white hover:text-accent font-bold px-4 py-2 border-2 hover:border-2 w-full">
                  Login
                </button>
                <button className="bg-accent hover:bg-transparent hover:border-accent text-white hover:text-accent font-bold px-4 py-2 border-2 hover:border-2 w-full">
                  Register
                </button>
              </div>
            </ul>
          </div>
        )}
        {/* Mobile navbar end */}
      </div>
    </header>
  );
};

export default Navbar;
