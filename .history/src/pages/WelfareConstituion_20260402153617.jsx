import React from "react";

function Constitution() {
  const handlePrint = () => {
    window.print();
  };

  const sections = [
    {
      title: "Name of the Welfare",
      content: (
        <>
          The welfare group shall be known as{" "}
          <span className="font-semibold">Vamuli Welfare</span>. The name{" "}
          <span className="font-semibold">Vamuli</span> represents members drawn
          from the <span className="font-semibold">Muhya family</span> and the{" "}
          <span className="font-semibold">Likhomba family</span>.
        </>
      ),
    },
    {
      title: "Purpose of the Welfare",
      content:
        "Vamuli Welfare exists to bring members together for mutual support through financial contributions, unity, and collective decision-making.",
    },
    {
      title: "Membership",
      content: (
        <>
          Membership is open to individuals from the{" "}
          <span className="font-semibold">Muhya</span> and{" "}
          <span className="font-semibold">Likhomba</span> families.
        </>
      ),
    },
    {
      title: "Monthly Contributions",
      content: (
        <>
          Each member shall contribute{" "}
          <span className="font-semibold">Ksh. 500</span> monthly.
          <br />
          Deadline: <span className="font-semibold">5th of the following month</span>.
          <br />
          Late fine: <span className="font-semibold">Ksh. 100</span>.
          <br />
          Missing 3 months → pay{" "}
          <span className="font-semibold">Ksh. 1800</span> or be removed.
        </>
      ),
    },
    {
      title: "Leadership",
      content:
        "Leadership shall consist of Chairman, Deputy Chairman, Secretary, Coordinator, Treasurer, and Fines Officer.",
    },
    {
      title: "Meetings",
      content:
        "Members shall meet three (3) times per year. Emergency meetings may be called when necessary.",
    },
    {
      title: "Borrowing of Welfare Funds",
      content:
        "No member shall borrow funds unless approved by ¾ of members in an emergency meeting.",
    },
    {
      title: "Emergency Borrowing Procedure",
      content: (
        <>
          <ul className="list-disc ml-5 space-y-1">
            <li>Member informs Chairperson/Deputy.</li>
            <li>Leaders meet within 3 days.</li>
            <li>Emergency meeting is scheduled.</li>
            <li>¾ of members must attend.</li>
            <li>
              Lending amount and repayment deadline must be clearly agreed.
            </li>
            <li>
              Failure to repay leads to penalties or possible expulsion.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Non-Compliance Clause",
      content:
        "Failure to follow procedures leads to removal without compensation.",
    },
    {
      title: "Conduct During Meetings",
      content:
        "Members must maintain order. Violators pay a Ksh. 50 fine.",
    },
    {
      title: "Confidentiality",
      content:
        "Disclosing welfare matters attracts a Ksh. 200 fine.",
    },
    {
      title: "Annual Gathering",
      content:
        "Families meet every 26th December for a communal gathering.",
    },
    {
      title: "Amendments",
      content: "Changes require ¾ member approval.",
    },
    {
      title: "Dissolution",
      content:
        "If dissolved, funds are shared equally among active members.",
    },
    {
      title: "Exit of a member",
      content:
        "If a member is removed from the welfare, or they leave at will they will s",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-6 bg-white shadow-lg rounded-lg p-6 border 
                    print:shadow-none print:border-none print:p-4 print:mt-0 print:max-w-full 
                    print:text-sm print:leading-relaxed">

      {/* Print Button */}
      <div className="flex justify-end mb-4 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-green-700 text-white px-5 py-2 rounded-lg shadow hover:bg-green-800"
        >
          Print Constitution
        </button>
      </div>

      <h1 className="text-3xl font-bold text-center text-green-700 mb-6 print:text-2xl">
        Vamuli Welfare Constitution
      </h1>

      {/* Sections */}
      {sections.map((section, i) => (
        <section key={i} className="mb-4 break-inside-avoid">
          <h2 className="text-lg font-semibold text-green-600 mb-1">
            {i + 1}. {section.title}
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            {section.content}
          </p>
        </section>
      ))}

      {/* Footer */}
      <p className="mt-6 text-xs text-gray-600 text-center">
        Official Constitution of Vamuli Welfare
      </p>

      {/* Print Styles */}
      <style>
        {`
          @media print {
            @page {
              size: A4;
              margin: 15mm;
            }

            body {
              -webkit-print-color-adjust: exact;
            }

            section {
              page-break-inside: avoid;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Constitution;