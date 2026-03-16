import React from "react";

function Constitution() {
  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-10 border border-green-200">
      <h1 className="text-4xl font-extrabold text-center text-green-700 mb-10">
        Vamuli Welfare Constitution
      </h1>

      {/* Introduction */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          1. Name of the Welfare
        </h2>
        <p className="text-gray-700 text-lg">
          The welfare group shall be known as <span className="font-bold text-red-600">Vamuli Welfare</span>. 
          The name <span className="font-bold text-red-600">Vamuli</span> represents members from the 
          <span className="font-bold text-red-600"> Muhya family</span> and 
          <span className="font-bold text-red-600"> Likhomba family</span>, united to promote cooperation, financial support, and collective development.
        </p>
      </section>

      {/* Purpose */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          2. Purpose of the Welfare
        </h2>
        <p className="text-gray-700 text-lg">
          Vamuli Welfare exists to bring members together for mutual support through financial contributions, unity, and collective decision-making. 
          The welfare strengthens family relationships while building a financial base for development and future investments.
        </p>
      </section>

      {/* Membership */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          3. Membership
        </h2>
        <p className="text-gray-700 text-lg">
          Membership is open to individuals from the <span className="font-bold text-red-600">Muhya</span> and <span className="font-bold text-red-600">Likhomba</span> families who participate actively, follow welfare rules, and contribute regularly.
        </p>
      </section>

      {/* Contributions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          4. Monthly Contributions
        </h2>
        <p className="text-gray-700 text-lg">
          Each member shall contribute <span className="font-bold text-red-600">Ksh. 500</span> monthly. Contributions must be paid by the 5th of the following month. 
          <br />
          Late payments incur a penalty of <span className="font-bold text-red-600">Ksh. 100</span>. Missing three (3) consecutive contributions leads to expulsion unless the member pays all pending contributions and fines totaling <span className="font-bold text-red-600">Ksh. 1800</span>.  
          <br />
          Partial contributions are allowed: <span className="font-bold text-red-600">Ksh. 250</span> by the 15th of the month and the remaining <span className="font-bold text-red-600">Ksh. 250</span> by the 5th of the next month.  
          <br />
          Expelled members may rejoin only after settling all fines and missed contributions, and upon approval by the Chairman or Deputy Chairman.
        </p>
      </section>

      {/* Fines */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          5. Late Payment Fines
        </h2>
        <p className="text-gray-700 text-lg">
          Contributions paid after the deadline will attract a mandatory fine of <span className="font-bold text-red-600">Ksh. 100</span>. This ensures fairness and discipline.
        </p>
      </section>

      {/* Investment */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          6. Welfare Investment Goal
        </h2>
        <p className="text-gray-700 text-lg">
          The welfare aims to accumulate funds for investments decided collectively by members after periodic review. Investments should benefit all members and grow the welfare fund.
        </p>
      </section>

      {/* Leadership */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          7. Leadership
        </h2>
        <p className="text-gray-700 text-lg">
          The leadership consists of the Chairman, Deputy Chairman, Secretary, Coordinator, Treasurer, and Fines Officer. They are responsible for proper communication, record-keeping, and transparency.
        </p>
      </section>

      {/* Meetings */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          8. Meetings
        </h2>
        <p className="text-gray-700 text-lg">
          Meetings are held <span className="font-bold text-red-600">three (3) times per year</span>. 
          Emergency meetings may be called by the Chairman, Deputy Chairman, or Coordinator only after receiving directives.  
          Attendance is mandatory for decision-making.
        </p>
      </section>

      {/* Lateness */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          9. Lateness Fine
        </h2>
        <p className="text-gray-700 text-lg">
          Members arriving late shall pay a mandatory fine of <span className="font-bold text-red-600">Ksh. 50</span>.  
          Repeated lateness may be reviewed by the Chairman or Deputy Chairman.
        </p>
      </section>

      {/* Borrowing */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          10. Borrowing of Welfare Funds
        </h2>
        <p className="text-gray-700 text-lg">
          No member may borrow welfare funds <span className="font-bold text-red-600">unless</span> approved by at least three-quarters (¾) of members after an emergency meeting.  
          Loan disbursement requires all members’ presence at the meeting.
        </p>
      </section>

      {/* Conduct */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          11. Conduct During Meetings
        </h2>
        <p className="text-gray-700 text-lg">
          Members must maintain decorum. No interruptions are allowed; only the member speaking may talk <span className="font-bold text-red-600">unless</span> recognized.  
          Misconduct results in temporary removal; return requires a fine of <span className="font-bold text-red-600">Ksh. 50</span>.
        </p>
      </section>

      {/* Absence */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          12. Absence from Scheduled Meetings
        </h2>
        <p className="text-gray-700 text-lg">
          Missing a scheduled meeting <span className="font-bold text-red-600">without</span> prior approval of the Chairman or Deputy Chairman results in a mandatory fine of <span className="font-bold text-red-600">Ksh. 100</span>.
        </p>
      </section>

      {/* Confidentiality */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          13. Confidentiality
        </h2>
        <p className="text-gray-700 text-lg">
          Members shall not disclose welfare secrets. Breaches incur a fine of <span className="font-bold text-red-600">Ksh. 200</span>.
        </p>
      </section>

      {/* Annual Gathering */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          14. Annual Family Gathering
        </h2>
        <p className="text-gray-700 text-lg">
          Every 26th December, all Vamuli families—comprising <span className="font-bold text-red-600">Stephen Muhya</span> and <span className="font-bold text-red-600">Manase Likhomba</span> families—shall gather for a communal goat (mbuzi) meal to strengthen family bonds.
        </p>
      </section>

      {/* Roles of Leaders */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          15. Roles of Leaders
        </h2>
        {/* Leadership roles here (keep your previous Section 15 content) */}
      </section>

      {/* Amendments */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          16. Amendments
        </h2>
        <p className="text-gray-700 text-lg">
          Amendments to this constitution require a proposal submitted to the leadership and approval by at least <span className="font-bold text-red-600">¾ of members</span> present at a meeting.  
          No amendment is valid without proper recording in the minutes.
        </p>
      </section>

      {/* Quorum & Decision-Making */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          17. Quorum and Decision-Making
        </h2>
        <p className="text-gray-700 text-lg">
          A minimum of <span className="font-bold text-red-600">50% of members</span> is required for a meeting to make valid decisions.  
          Decisions require a simple majority unless otherwise stated for special matters.
        </p>
      </section>

      {/* Dissolution */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          18. Dissolution
        </h2>
        <p className="text-gray-700 text-lg">
          In the event of dissolution, all remaining funds and assets shall be distributed equally among active members or as decided by a majority vote.  
          The process shall be supervised by the Chairman and Treasurer to ensure transparency.
        </p>
      </section>
    </div>
  );
}

export default Constitution;