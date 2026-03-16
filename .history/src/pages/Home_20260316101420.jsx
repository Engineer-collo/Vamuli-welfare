import React from "react";
import groupPhoto from "../assets/vamuli-group.jpg"; // place your photo in src/assets/

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to Vamuli Welfare
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Connecting members, managing contributions, and building our community.
          </p>
          <a
            href="/members"
            className="inline-block bg-white text-green-700 font-bold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            View Members
          </a>
        </div>
      </section>

      {/* Group Photo Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Vamuli Welfare Family
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Bringing together members for community support, growth, and welfare.
        </p>

        <div className="flex justify-center">
          <img
            src={groupPhoto}
            alt="Vamuli Welfare Group"
            className="rounded-lg shadow-lg w-full max-w-3xl object-cover"
          />
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Members</h3>
            <p className="text-gray-600">
              View all Vamuli Welfare members and stay connected.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Contributions</h3>
            <p className="text-gray-600">
              Track contributions and manage welfare payments easily.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-gray-600">
              Build community ties and support members through welfare programs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;