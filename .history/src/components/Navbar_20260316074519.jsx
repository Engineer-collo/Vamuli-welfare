import React from "react";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Vamuli Welfare</h1>

        <ul className="flex gap-6 text-sm">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">Members</li>
          <li className="hover:text-gray-200 cursor-pointer">Contacts</li>
          <li className="hover:text-gray-200 cursor-pointer">Fines</li>
          <li className="hover:text-gray-200 cursor-pointer">Contributions</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;