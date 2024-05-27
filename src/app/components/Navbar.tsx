import Image from "next/image";
import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <nav className="border stroke-primary hover:border-dashed  border-4 border-indigo-100  rounded-lg from-red-400 to-blue-600
    ">
      <div className="navbar bg-base-100 text-white">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl underline underline-offset-4">
          An Approach Towards Understanding Various Aspects  Of Graph In Real Life
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://www.cambridgemaths.org/Images/The-trouble-with-graphs.jpg"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
