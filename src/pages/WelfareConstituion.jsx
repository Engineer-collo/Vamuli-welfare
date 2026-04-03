import React from "react";
import jsPDF from "jspdf";

function Constitution() {
  const sections = [
    {
      title: "Name of the Welfare",
      content: `The welfare group shall be officially known as Vamuli Welfare. The name Vamuli symbolizes the unity of members from two primary families: the Muhya family and the Likhomba family. This name reflects the heritage, shared values, and collaborative goals of the families and serves as an identity that distinguishes this welfare from any other organization or community initiative.`
    },
    {
      title: "Purpose of the Welfare",
      content: `The purpose of Vamuli Welfare is multifaceted:
- To create a strong support system for all members through regular financial contributions.
- To foster unity, mutual respect, and cooperation between members of both families.
- To promote collective decision-making and participatory governance in matters affecting the welfare.
- To ensure the welfare can pool resources for investments, emergency support, or family projects.`
    },
    {
      title: "Membership",
      content: `Membership is open exclusively to individuals who are recognized members of the Muhya or Likhomba families.
- Must actively participate in welfare activities.
- Commit to regular monthly contributions.
- Approved by leadership and endorsed by two existing members.`
    },
    {
      title: "Monthly Contributions",
      content: `All members must contribute Ksh. 500 per month.
- Pay by the 5th of each month.
- Late payment incurs Ksh. 100 fine.
- Missing 3 consecutive months requires paying Ksh. 1800.
- Partial payments allowed: Ksh. 250 by 15th, remainder by 5th next month.`
    },
    {
      title: "Leadership",
      content: `Welfare leadership structure:
- Chairman: Leads and chairs meetings.
- Deputy Chairman: Supports chairman.
- Secretary: Records meetings and communications.
- Coordinator: Coordinates activities.
- Treasurer: Manages finances.
- Fines Officer: Manages fines and penalties.`
    },
    {
      title: "Meetings",
      content: `Regular meetings:
- Attend at least 3 meetings per year.
- Emergency meetings can be called by leadership.
- Minutes must be recorded and shared.
- Provide prior notice if absent.`
    },
    {
      title: "Borrowing of Welfare Funds",
      content: `Borrowing rules:
- No loan requests except emergency meetings.
- Approval needs ¾ member agreement.
- Loans only disbursed if all members informed.
- Repayment must follow agreed timeline.`
    },
    {
      title: "Emergency Borrowing Procedure",
      content: `Emergency loans:
- Notify Chairperson or Deputy.
- Leadership convenes within 3 working days.
- Official emergency meeting scheduled if approved.
- Meeting requires ¾ members present.
- Loan should not exceed member’s total contributions.
- Two guarantors required, responsible for repayment.
- Collateral/security may be required.
- Document loan details: amount, repayment, penalties.
- Signatures required: Chair, Secretary, Treasurer, Borrower.
- Non-repayment triggers: penalties, automatic deduction, guarantor liability, suspension, expulsion.`
    },
    {
      title: "Non-Compliance Clause",
      content: `Non-compliance consequences:
- Formal warnings.
- Minor fines.
- Serious violations: expulsion without refund.`
    },
    {
      title: "Conduct During Meetings",
      content: `Meeting conduct:
- Only recognized member may speak.
- Disruptions: Ksh. 50 fine or removal.
- Respectful debate encouraged.`
    },
    {
      title: "Confidentiality",
      content: `Confidentiality:
- Sharing sensitive info without consent: Ksh. 2000 fine.
- Ensures trust and security of operations.`
    },
    {
      title: "Annual Family Gathering",
      content: `Annual Gathering (26 Dec):
- Communal goat meal and social interaction.
- All members expected to attend.
- Fosters unity and celebration of achievements.`
    },
    {
      title: "Amendments",
      content: `Amendments:
- ¾ member approval required.
- Proposed during meeting and recorded.
- Ensures transparency and majority agreement.`
    },
    {
      title: "Dissolution",
      content: `Dissolution:
- Funds distributed equally among active members.
- Leadership ensures transparent accounting.`
    },
    {
      title: "Exit of a Member",
      content: `Exit of a member:
- No refund of contributions already made.`
    },
    {
      title: "Legality of the Constitution",
      content: `This constitution shall become legally binding and recognized as the official law 
governing Vamuli Welfare once it is approved and signed by at least three-quarters (3/4) 
of all registered members.`
    },
  ];
  
  

  const handleDownloadPDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pageHeight = 297;
    const margin = 15;
    let y = margin;

    pdf.setFontSize(14);
    pdf.setTextColor(0, 128, 0);
    pdf.text("Vamuli Welfare Constitution", 105, y, { align: "center" });
    y += 10;

    pdf.setFontSize(11);
    pdf.setTextColor(0, 0, 0);

    sections.forEach((section, i) => {
      const linesTitle = pdf.splitTextToSize(`${i + 1}. ${section.title}`, 180);
      if (y + linesTitle.length * 6 > pageHeight - margin) {
        pdf.addPage();
        y = margin;
      }
      pdf.setFont(undefined, "bold");
      pdf.text(linesTitle, margin, y);
      y += linesTitle.length * 6 + 2;

      const linesContent = pdf.splitTextToSize(section.content, 180);
      if (y + linesContent.length * 6 > pageHeight - margin) {
        pdf.addPage();
        y = margin;
      }
      pdf.setFont(undefined, "normal");
      pdf.text(linesContent, margin, y);
      y += linesContent.length * 6 + 5;
    });

    pdf.setFont(undefined, "bold");
    pdf.text(
      "This constitution shall become legally binding and recognized as the official law governing Vamuli Welfare once it is approved and signed by at least three-quarters (3/4) of all registered members.",
      15,
      y
    );

    pdf.save("Vamuli-Constitution.pdf");
  };

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-700 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-800"
        >
          Download Constitution PDF
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 border text-sm leading-relaxed">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Vamuli Welfare Constitution
        </h1>

        {sections.map((section, i) => (
          <section key={i} className="mb-6">
            <h2 className="text-lg font-semibold text-green-600 mb-1">
              {i + 1}. {section.title}
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </section>
        ))}
        <p className="mt-6 text-xs text-gray-600 text-center">
          Official Constitution of Vamuli Welfare
        </p>
      </div>
    </div>
  );
}

export default Constitution;