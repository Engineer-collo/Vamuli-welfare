import React from "react";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <div className="relative h-[400px]">
      <img
  src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
  alt="team planning"
  className="w-full h-full object-cover"
/>
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Vamuli Welfare
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            A united welfare group focused on saving, supporting one another,
            and building investments for a stronger future together.
          </p>
        </div>
      </div>

      {/* ABOUT INTRO */}
      <div className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Who We Are
        </h2>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Vamuli Welfare is a community initiative where members contribute
          regularly to build a collective financial foundation. Through unity,
          discipline, and transparency, the group aims to accumulate funds
          which can later be invested in meaningful opportunities that will
          grow the welfare and benefit every member.
        </p>
      </div>

      {/* MISSION & VISION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-12">

        {/* Mission */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="mission"
            className="h-56 w-full object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold text-green-600 mb-3">
              Our Mission
            </h3>

            <p className="text-gray-700">
              Our mission is to encourage a culture of saving and financial
              cooperation among members through structured monthly
              contributions. By working together and maintaining transparency,
              we strengthen our welfare and create financial security for all
              members.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="vision"
            className="h-56 w-full object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold text-green-600 mb-3">
              Our Vision
            </h3>

            <p className="text-gray-700">
              Our vision is to grow Vamuli Welfare into a strong and sustainable
              financial community where accumulated funds are invested wisely
              to generate long-term growth and benefits for every member.
            </p>
          </div>
        </div>
      </div>

      {/* INVESTMENT GOAL */}
      <div className="bg-green-700 text-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-4">
            Our Long-Term Goal
          </h2>

          <p className="text-lg leading-relaxed">
            The goal of Vamuli Welfare is to accumulate contributions from
            members over a period of time such as one year, two years, or
            longer. Once the funds reach a strong financial level, the group
            will meet and collectively decide on the best investment
            opportunities. These investments will allow the welfare to grow,
            generate income, and strengthen financial stability for the entire
            group.
          </p>

        </div>
      </div>

    </div>
  );
}

export default About;