// src/pages/Home.jsx

import React from "react";
import contributions from "./contributionsData";

function Home() {

  const totalMembers = contributions.length;

  // get all contribution fields dynamically
  const months = Object.keys(contributions[0]).filter(
    (key) =>
      !["id", "name", "role"].includes(key) &&
      !key.toLowerCase().includes("paiddate")
  );

  const totalContributions = contributions.reduce((sum, member) => {
    const memberTotal = months.reduce((mSum, month) => {
      return mSum + (member[month] || 0);
    }, 0);

    return sum + memberTotal;
  }, 0);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}

      <div className="relative h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
          alt="community"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Vamuli Welfare
          </h1>

          <p className="max-w-2xl text-lg">
            A united welfare group focused on saving together, supporting one
            another and building investments for the future.
          </p>
        </div>
      </div>


      {/* STATS */}

      <div className="ptmax-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-6 -mt-16">

        <div className="bg-white shadow-xl rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold text-green-600">
            {totalMembers}
          </h2>
          <p className="text-gray-600 mt-2">Total Members</p>
        </div>

        <div className="bg-white shadow-xl rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600">
            Ksh {totalContributions}
          </h2>
          <p className="text-gray-600 mt-2">Total Contributions</p>
        </div>

      </div>

    </div>
  );
}

export default Home;