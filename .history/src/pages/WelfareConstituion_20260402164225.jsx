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
          The welfare group shall be officially known as{" "}
          <span className="font-semibold">Vamuli Welfare</span>. The name{" "}
          <span className="font-semibold">Vamuli</span> symbolizes the unity of
          members from two primary families: the <span className="font-semibold">Muhya family</span> 
          and the <span className="font-semibold">Likhomba family</span>. This name reflects the
          heritage, shared values, and collaborative goals of the families and 
          serves as an identity that distinguishes this welfare from any other 
          organization or community initiative.
        </>
      ),
    },
    {
      title: "Purpose of the Welfare",
      content: (
        <>
          The purpose of Vamuli Welfare is multifaceted:
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>To create a strong support system for all members through regular financial contributions.</li>
            <li>To foster unity, mutual respect, and cooperation between members of both families.</li>
            <li>To promote collective decision-making and participatory governance in matters affecting the welfare.</li>
            <li>To ensure the welfare can pool resources for investments, emergency support, or family projects.</li>
          </ul>
          Every activity undertaken by the welfare must align with these objectives to maintain integrity and purpose.
        </>
      ),
    },
    {
      title: "Membership",
      content: (
        <>
          Membership is open exclusively to individuals who are recognized 
          members of the <span className="font-semibold">Muhya</span> or{" "}
          <span className="font-semibold">Likhomba</span> families. 
          To become a member:
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>The individual must demonstrate willingness to actively participate in welfare activities.</li>
            <li>The individual must commit to making regular monthly contributions.</li>
            <li>All new members must be approved by the leadership team and endorsed by at least two existing members.</li>
          </ul>
          Membership signifies acceptance of the constitution and commitment to uphold all welfare rules and regulations.
        </>
      ),
    },
    {
      title: "Monthly Contributions",
      content: (
        <>
          All members are required to contribute a fixed amount of{" "}
          <span className="font-semibold">Ksh. 500</span> per month. These contributions form the primary financial resource of the welfare and are used for welfare support, investments, and emergency disbursements.
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Payment must be completed by the <span className="font-semibold">5th of the following month</span>.</li>
            <li>Late payment will incur a mandatory fine of <span className="font-semibold">Ksh. 100</span>.</li>
            <li>Members who miss contributions for three consecutive months without explanation or repayment may be removed unless they pay the accumulated <span className="font-semibold">Ksh. 1800</span>.</li>
            <li>Partial payments are allowed: <span className="font-semibold">Ksh. 250</span> by the 15th and the remaining <span className="font-semibold">Ksh. 250</span> by the 5th of the next month.</li>
          </ul>
          These rules ensure financial discipline and sustainability of the welfare funds.
        </>
      ),
    },
    {
      title: "Leadership",
      content: (
        <>
          The welfare leadership is responsible for governance, oversight, and operational decision-making. The leadership structure includes:
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li><span className="font-semibold">Chairman:</span> Provides overall leadership, chairs meetings, and ensures welfare objectives are met.</li>
            <li><span className="font-semibold">Deputy Chairman:</span> Supports the Chairman and acts in their absence.</li>
            <li><span className="font-semibold">Secretary:</span> Maintains records, documents meeting proceedings, and handles communications.</li>
            <li><span className="font-semibold">Coordinator:</span> Coordinates events, meetings, and activities involving members.</li>
            <li><span className="font-semibold">Treasurer:</span> Manages welfare finances, contributions, fines, and disbursements.</li>
            <li><span className="font-semibold">Fines Officer:</span> Ensures all fines and penalties are collected and recorded accurately.</li>
          </ul>
          Leaders must act transparently, follow the constitution, and report all major decisions to members.
        </>
      ),
    },
    {
      title: "Meetings",
      content: (
        <>
          Regular meetings are vital for decision-making and maintaining welfare accountability. Guidelines include:
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Members are expected to attend at least three (3) meetings per year.</li>
            <li>Emergency meetings may be convened by the Chairman, Deputy Chairman, or Coordinator in urgent situations affecting welfare funds or members.</li>
            <li>Minutes of meetings must be recorded and made available to all members.</li>
            <li>Members unable to attend must provide prior notice or risk fines.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Borrowing of Welfare Funds",
      content: (
        <>
          Borrowing from the welfare fund is strictly regulated:
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>No member may request a loan unless it is during an emergency meeting.</li>
            <li>Approval requires agreement by at least <span className="font-semibold">¾ of the members</span>.</li>
            <li>Loans are only disbursed if all members are present and informed of the request.</li>
            <li>Members are responsible for repaying borrowed funds in full according to the agreed timeline.</li>
          </ul>
          These measures protect the welfare fund from misuse and ensure fairness.
        </>
      ),
    },
    {
      title: "Emergency Borrowing Procedure",
      content: (
        <>
          In cases of urgent need, the following procedure must be followed:
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>The requesting member must inform the Chairman or Deputy Chairman of their issue.</li>
            <li>The welfare leaders meet within <span className="font-semibold">three (3) working days</span> to evaluate the necessity.</li>
            <li>If approved, an emergency meeting is scheduled for all members.</li>
            <li>Attendance of at least <span className="font-semibold">¾ of members</span> is required for validity.</li>
            <li>The borrowed money should not exceed member</li>
            <li>During the meeting, the requested loan amount, repayment period, and deadlines are clearly documented and agreed upon.</li>
            <li>Failure to repay the loan as agreed will result in fines, suspension of membership privileges, or expulsion.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Non-Compliance Clause",
      content: (
        <>
          Members who fail to comply with welfare rules, including contributions, attendance, and borrowing procedures, may:
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Be formally warned.</li>
            <li>Be fined for minor infractions.</li>
            <li>Be expelled without refund of contributions for serious violations.</li>
          </ul>
          Non-compliance threatens the welfare's integrity and fairness for all members.
        </>
      ),
    },
    {
      title: "Conduct During Meetings",
      content: (
        <>
          Members must maintain proper decorum during meetings:
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Only the member recognized by the chair may speak.</li>
            <li>Disruptions will result in a fine of <span className="font-semibold">Ksh. 50</span> or temporary removal from the meeting.</li>
            <li>Respectful debate and constructive feedback are encouraged.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Confidentiality",
      content: (
        <>
          All members must maintain strict confidentiality of welfare funds, deliberations, and decisions:
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Sharing sensitive welfare information without consent results in a fine of <span className="font-semibold">Ksh. 200</span>.</li>
            <li>Confidentiality ensures trust and security of the welfare operations.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Annual Family Gathering",
      content: (
        <>
          Every 26th December, families of <span className="font-semibold">Stephen Muhya</span> 
          and <span className="font-semibold">Manase Likhomba</span> shall gather:
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>The gathering includes a communal goat meal and social interaction.</li>
            <li>All members are expected to attend to maintain bonds and unity.</li>
            <li>This event fosters mutual support, communication, and celebration of the welfare's achievements.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Amendments",
      content: (
        <>
          Amendments to the constitution require careful consideration:
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Approval of at least <span className="font-semibold">¾ of members</span> is required.</li>
            <li>Amendments are proposed during a meeting and recorded in meeting minutes.</li>
            <li>This ensures transparency and that changes are agreed upon by a significant majority.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Dissolution",
      content: (
        <>
          In the event that the welfare is dissolved:
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>All funds are distributed equally among active members.</li>
            <li>Leadership must ensure transparent accounting and proper documentation.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Exit of a Member",
      content: (
        <>
          Members leaving voluntarily or by expulsion:
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Will not be refunded contributions already made.</li>
            <li>This ensures sustainability of welfare funds and that ongoing projects benefit both remaining members and exiting members.</li>
          </ul>
        </>
      ),
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
        <section key={i} className="mb-6 break-inside-avoid">
          <h2 className="text-lg font-semibold text-green-600 mb-1">
            {i + 1}. {section.title}
          </h2>
          <div className="text-gray-700 text-sm leading-relaxed">
            {section.content}
          </div>
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