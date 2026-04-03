import React from "react";
import jsPDF from "jspdf";

function Constitution() {
  const sections = [
    {
      title: "Definitions",
      content: `For clarity, the following definitions shall apply throughout this constitution:
- "Welfare" refers to the Vamuli Welfare Group.
- "Member" refers to any person formally recognized under Membership rules.
- "Leadership" refers to the elected office bearers of the Welfare.
- "Emergency" refers to an unforeseen event requiring immediate financial assistance or intervention.
- "Contribution" refers to monthly financial payments made by members to support the Welfare.`
    },
    {
      title: "Name of the Welfare",
      content: `The welfare group shall be officially known as Vamuli Welfare. 
The name "Vamuli" symbolizes the unity of members from two primary families: the Muhya family and the Likhomba family. 
This name reflects the heritage, shared values, and collaborative goals of the families and serves as a unique identity recognized within the community and legally in Kenya.`
    },
    {
      title: "Purpose of the Welfare",
      content: `Vamuli Welfare aims to promote social, economic, and communal well-being among its members:
1. Provide a strong support system for all members through regular contributions.
2. Foster unity, mutual respect, and cooperation between members.
3. Promote collective decision-making in matters affecting the welfare.
4. Pool resources for investment, emergency support, or family/community projects.
5. Uphold ethical, lawful, and transparent operations consistent with Kenyan law.`
    },
    {
      title: "Membership",
      content: `Membership is open exclusively to individuals who are recognized members of the Muhya or Likhomba families:
    
    - Must actively participate in welfare activities.
    - Must commit to regular monthly contributions.
    - Must be approved by the leadership and endorsed by at least two existing members.
    - Membership can be suspended or terminated for non-compliance with the constitution.
    
    Admission Requirements for New Members:
    - A non-refundable registration fee of Ksh. 500 must be paid upon joining.
    - Any new member shall be required to pay all accumulated contributions equivalent to the total contributions made by existing active members, in order to attain equal financial standing within the welfare.
    
    Failure to meet these financial obligations shall result in denial or suspension of membership rights until full compliance is achieved.`
    },
    {
      title: "Monthly Contributions",
      content: `All members shall make contributions as follows:
- Amount: Ksh. 500 per month.
- Payment deadline: 5th of each month.
- Late payment fine: Ksh. 100.
- Consecutive non-payment (3 months): Ksh. 1800 total.
- Partial payments allowed: Ksh. 250 by 15th, remainder by 5th next month.
- Contributions are non-refundable except upon dissolution as per Section 15.`
    },
    {
      title: "Leadership Structure and Roles",
      content: `The Welfare shall be managed by elected office bearers:
1. Chairman – Presides over meetings, oversees welfare management.
2. Deputy Chairman – Supports Chairman and acts in their absence.
3. Secretary – Maintains records, meeting minutes, and communication.
4. Treasurer – Manages finances, contributions, and expenditures.
5. Coordinator – Organizes events and welfare activities.
6. Fines Officer – Monitors compliance, imposes fines, and reports breaches.

Leadership elections shall be held every 2 years with ¾ member approval for new appointments.`
    },
    {
      title: "Meetings",
      content: `Meetings are essential for governance:
- Regular meetings: Minimum 3 per year.
- Emergency meetings: Can be called by any office bearer.
- Attendance: Members are required to attend or provide prior notice.
- Minutes: Must be recorded, distributed, and filed for transparency.`
    },
    {
      title: "Borrowing of Welfare Funds",
      content: `Borrowing rules:
- Loans are generally prohibited except for emergencies.
- Requests must be submitted to Chairperson or Deputy.
- Approval requires ¾ majority agreement of present members.
- Loan disbursement only after all members are informed.
- Repayment schedules must be documented and strictly followed.`
    },
    {
      title: "Emergency Borrowing Procedure",
      content: `Emergency Loans Procedure:
1. Member notifies Chairperson or Deputy of urgent need.
2. Leadership convenes within 3 working days.
3. Emergency meeting held with ¾ of members present.
4. Loan cannot exceed member's total contributions.
5. Two guarantors are required and responsible for repayment.
6. Collateral may be requested for security.
7. Loan agreement documents: amount, repayment schedule, penalties.
8. Signatures required: Chairperson, Secretary, Treasurer, Borrower.
9. Non-repayment consequences:
   - Fines as per Section 10.
   - Automatic deduction from contributions.
   - Guarantor assumes liability.
   - Possible suspension or expulsion.`
    },
    {
      title: "Non-Compliance Clause",
      content: `Consequences of non-compliance:
- First violation: Formal warning.
- Minor breaches: Fines as stipulated.
- Serious or repeated breaches: Expulsion without refund.
- Leadership shall document all actions taken.`
    },
    {
      title: "Conduct During Meetings",
      content: `Member conduct:
- Only recognized members may speak.
- Respectful debate is encouraged.
- Disruption may result in fines (Ksh. 50) or removal from the meeting.`
    },
    {
      title: "Confidentiality",
      content: `All members must maintain confidentiality:
- Unauthorized sharing of sensitive welfare information: Ksh. 2000 fine.
- Confidentiality ensures trust, security, and smooth operations.`
    },
    {
      title: "Annual Family Gathering",
      content: `Held on 26th December annually:
- Includes communal meal and social interaction.
- Attendance is expected for all members.
- Promotes unity and celebrates welfare achievements.`
    },
    {
      title: "Financial Oversight and Audit",
      content: `- Treasurer shall maintain accurate records of all financial transactions.
- Annual audit to be conducted by at least two members not in leadership.
- Audit report presented during annual meeting for transparency.`
    },
    {
      title: "Dispute Resolution",
      content: `- Any disputes among members shall be reported to leadership.
- Leadership shall mediate in good faith.
- Unresolved disputes may require ¾ majority vote during a meeting.
- Decisions are final and binding unless legally challenged.`
    },
    {
      title: "Amendments",
      content: `Amendments to this constitution:
- Proposed during a formal meeting.
- Require ¾ majority approval of members present.
- Must be recorded and distributed to all members.
- Ensures transparency and participatory governance.`
    },
    {
      title: "Dissolution",
      content: `- Welfare may be dissolved only by ¾ member majority.
- All funds distributed equally among active members.
- Leadership ensures transparent accounting of all assets before dissolution.`
    },
    {
      title: "Exit of a Member",
      content: `- No refund of contributions already made.
- Leadership must record member exit for transparency.`
    },
    {
      title: "Legal Compliance",
      content: `- The Welfare operates in accordance with Kenyan law.
- Constitution becomes legally binding upon approval by at least ¾ of registered members.
- All members and leadership shall uphold legal obligations, including tax compliance if applicable.`
    }
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

    pdf.save("Vamuli-Constitution.pdf");
  };

  return (
    <div className="max-w-5xl mx-auto mt-6">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleDownloadPDF}
          className="bg-green-700 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-800"
        >
          Download Constitution
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
          Official Constitution of Vamuli Welfare, Kenya
        </p>
      </div>
    </div>
  );
}

export default Constitution;