import React from "react";
import logo from "../Content/Logo.png";

function NavBar() {
  return (
    <div className="w-screen bg-[#0C0718] absolute top-0 left-0">
      <div className="flex justify-between items-center h-12 px-8">
        <div>
          <img src={logo} alt="logo" className="w-20" />
        </div>
        <div>
          <div className="flex text-sm font-medium text-gray-600">
            <a
              href="/"
              className="-mb-px border-b border-current p-4 text-blue-500"
            >
              Trade
            </a>
            <a
              href="/"
              className="-mb-px border-b border-transparent p-4 hover:text-blue-500"
            >
              Earn
            </a>

            <a
              href="/"
              className="-mb-px border-b border-transparent p-4 hover:text-blue-500"
            >
              Support
            </a>

            <a
              href="/"
              className="-mb-px border-b border-transparent p-4 hover:text-blue-500"
            >
              About
            </a>
          </div>
        </div>
        <button className="rounded-full bg-gradient-to-r from-[#3C78D4] to-[#6330CC] text-gray-300 p-2 text-sm hover:border-2 hover:border-slate-100">
          Connect wallet
        </button>
      </div>
    </div>
  );
}

export default NavBar;
