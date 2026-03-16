import React from "react";

function Constitution() {
  const sections = [
    {
      title: "Name of the Welfare",
      content: (
        <>
          The welfare group shall be known as{" "}
          <span className="font-semibold text-black">Vamuli Welfare</span>. The
          name <span className="font-semibold text-black">Vamuli</span>{" "}
          represents members drawn from the{" "}
          <span className="font-semibold text-black">Muhya family</span> and the{" "}
          <span className="font-semibold text-black">Likhomba family</span>,
          united to promote cooperation, financial support, and collective
          development.
        </>
      ),
    },
    {
      title: "Purpose of the Welfare",
      content:
        "Vamuli Welfare exists to bring members together for mutual support through financial contributions, unity, and collective decision-making while strengthening family relationships.",
    },
    {
      title: "Membership",
      content: (
        <>
          Membership is open to individuals from the{" "}
          <span className="font-semibold text-black">Muhya</span> and{" "}
          <span className="font-semibold text-black">Likhomba</span> families
          who are willing to participate in welfare activities and contribute
          regularly.
        </>
      ),
    },
    {
      title: "Monthly Contributions",
      content: (
        <>
          Each member shall contribute{" "}
          <span className="font-semibold text-black">Ksh. 500</span> monthly.
          Contributions must be paid by the{" "}
          <span className="font-semibold text-black">5th of the following month</span>.
          <br />
          Late payments attract a fine of{" "}
          <span className="font-semibold text-black">Ksh. 100</span>.
          <br />
          Missing three consecutive contributions results in expulsion unless
          the member pays{" "}
          <span className="font-semibold text-black">Ksh. 1800</span> covering
          contributions and fines.
          <br />
          Partial payments are allowed:{" "}
          <span className="font-semibold text-black">Ksh. 250</span> by the
          15th and the remaining{" "}
          <span className="font-semibold text-black">Ksh. 250</span> by the
          5th of the following month.
        </>
      ),
    },
    {
      title: "Late Payment Fines",
      content: (
        <>
          Contributions paid after the deadline will attract a mandatory fine
          of <span className="font-semibold text-black">Ksh. 100</span>.
        </>
      ),
    },
    {
      title: "Welfare Investment Goal",
      content:
        "The welfare aims to accumulate funds and later invest in projects agreed upon by members for the benefit of all.",
    },
    {
      title: "Leadership",
      content:
        "Leadership shall consist of the Chairman, Deputy Chairman, Secretary, Coordinator, Treasurer and Fines Officer.",
    },
    {
      title: "Meetings",
      content: (
        <>
          Members shall hold meetings{" "}
          <span className="font-semibold text-black">three (3) times per year</span>.
          Emergency meetings may be called by the Chairman, Deputy Chairman or
          Coordinator when necessary.
        </>
      ),
    },
    {
      title: "Lateness Fine",
      content: (
        <>
          Any member arriving late to a meeting shall pay a mandatory fine of{" "}
          <span className="font-semibold text-black">Ksh. 50</span>.
        </>
      ),
    },
    {
      title: "Borrowing of Welfare Funds",
      content: (
        <>
          No member shall borrow welfare funds{" "}
          <span className="font-semibold text-black">unless</span> approved by{" "}
          <span className="font-semibold text-black">¾ of members</span> during
          an emergency meeting. Loan disbursement will only occur if{" "}
          <span className="font-semibold text-black">all members</span> are
          present.
        </>
      ),
    },
    {
      title: "Conduct During Meetings",
      content: (
        <>
          Members must maintain order. Only the member speaking may talk{" "}
          <span className="font-semibold text-black">unless</span> another
          member raises a hand and is recognized by the chair. Violators shall
          step outside and pay a fine of{" "}
          <span className="font-semibold text-black">Ksh. 50</span> before
          returning.
        </>
      ),
    },
    {
      title: "Absence from Scheduled Meetings",
      content: (
        <>
          Missing a scheduled meeting{" "}
          <span className="font-semibold text-black">without</span> permission
          from the Chairman or Deputy Chairman will attract a fine of{" "}
          <span className="font-semibold text-black">Ksh. 100</span>.
        </>
      ),
    },
    {
      title: "Confidentiality",
      content: (
        <>
          Disclosing welfare secrets will result in a fine of{" "}
          <span className="font-semibold text-black">Ksh. 200</span>.
        </>
      ),
    },
    {
      title: "Annual Family Gathering",
      content: (
        <>
          Every 26th December the families of{" "}
          <span className="font-semibold text-black">Stephen Muhya</span> and{" "}
          <span className="font-semibold text-black">Manase Likhomba</span>{" "}
          shall gather and share a communal goat meal (mbuzi).
        </>
      ),
    },
    {
      title: "Roles of Leaders",
      content:
        "Leaders shall oversee welfare activities, maintain discipline, ensure transparency in finances, and guide meetings.",
    },
    {
      title: "Amendments",
      content: (
        <>
          Amendments to this constitution require approval by{" "}
          <span className="font-semibold text-black">¾ of members</span>.
        </>
      ),
    },
    {
      title: "Quorum and Decision Making",
      content: (
        <>
          A minimum of{" "}
          <span className="font-semibold text-black">50% of members</span>{" "}
          must be present for decisions to be valid.
        </>
      ),
    },
    {
      title: "Dissolution",
      content:
        "If the welfare is dissolved, all remaining funds shall be distributed equally among active members.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white shadow-xl rounded-xl p-10 border">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
        Vamuli Welfare Constitution
      </h1>

      {/* Table of Contents */}
      <div className="mb-10 bg-gray-50 p-6 rounded-lg border">
        <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-1">
          {sections.map((section, i) => (
            <li key={i}>
              <a
                href={`#section-${i + 1}`}
                className="text-green-700 hover:underline"
              >
                {i + 1}. {section.title}
              </a>
            </li>
          ))}
        </ol>
      </div>

      {/* Sections */}
      {sections.map((section, i) => (
        <section key={i} id={`section-${i + 1}`} className="mb-10">
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            {i + 1}. {section.title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {section.content}
          </p>
        </section>
      ))}
    </div>
  );
}

export default Constitution;