// src/pages/Home.jsx

import React from "react";
import contributions from "../contributionsData";

function Home() {

  const totalMembers = contributions.length;

  const totalContributions = contributions.reduce((sum, m) => {
    return sum + (m.registration || 0) + (m.jan || 0) + (m.feb || 0);
  }, 0);

  const totalFines = contributions.reduce((sum, m) => {
    let fine = 0;

    if (m.janPaidDate > 5) fine += 100;
    if (m.febPaidDate > 5) fine += 100;

    return sum + fine;
  }, 0);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}

      <div className="relative h-[420px]">

        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
          alt="community"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Vamuli Welfare
          </h1>

          <p className="max-w-2xl text-lg">
            A united welfare group focused on saving together, supporting
            one another and building strong investments for the future.
          </p>

        </div>

      </div>


      {/* STATS SECTION */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6 -mt-16">

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

        <div className="bg-white shadow-xl rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold text-red-500">
            Ksh {totalFines}
          </h2>
          <p className="text-gray-600 mt-2">Total Fines</p>
        </div>

      </div>


      {/* ABOUT PREVIEW */}

      <div className="max-w-5xl mx-auto mt-16 px-6 text-center">

        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Our Goal
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          Vamuli Welfare brings members together to contribute regularly and
          build a strong financial foundation. Over time, the accumulated funds
          will allow the group to explore investment opportunities that will
          generate growth and financial stability for all members.
        </p>

      </div>


      {/* CTA */}

      <div className="text-center mt-12 pb-16">

        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg shadow-lg">
          View Contributions
        </button>

      </div>

    </div>
  );
}

export default Home;