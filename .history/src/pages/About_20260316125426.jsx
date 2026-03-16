// src/pages/About.jsx

import React from "react";

function About() {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        About Vamuli Welfare
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        <strong>Vamuli Welfare</strong> is a community-driven welfare group
        created to promote unity, financial support, and long-term development
        among its members. Through regular contributions and responsible
        financial management, the group aims to build a strong financial base
        that will benefit all members both now and in the future.
      </p>

      {/* Mission */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">
          Our Mission
        </h2>
        <p className="text-gray-700">
          Our mission is to encourage consistent saving among members through
          structured monthly contributions while fostering cooperation,
          transparency, and accountability. By working together, we aim to
          create financial security and opportunities that uplift every member
          of the welfare group.
        </p>
      </div>

      {/* Vision */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">
          Our Vision
        </h2>
        <p className="text-gray-700">
          Our vision is to grow Vamuli Welfare into a strong and sustainable
          financial community. As contributions accumulate over time, members
          will periodically meet to evaluate the total funds and identify
          meaningful investment opportunities that can generate income and
          expand the welfare’s financial strength for the long term.
        </p>
      </div>

      {/* Goal */}
      <div>
        <h2 className="text-2xl font-semibold text-green-600 mb-2">
          Our Long-Term Goal
        </h2>
        <p className="text-gray-700">
          The primary goal of Vamuli Welfare is to accumulate funds through
          member contributions over a period of time—such as one year, two
          years, or longer. Once the group reaches a substantial financial
          milestone, members will collectively decide on viable investment
          opportunities. These investments will help grow the welfare fund,
          ensuring sustainability, financial empowerment, and continued support
          for all members.
        </p>
      </div>
    </div>
  );
}

export default About;