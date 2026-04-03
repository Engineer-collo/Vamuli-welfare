import React from "react";
import jsPDF from "jspdf";

const members = [
  { id: 1, name: "Zipporah Muhya" },
  { id: 2, name: "Margaret Likhomba" },
  { id: 3, name: "Elizabeth Khanyiwa" },
  { id: 4, name: "Esther Muhya" },
  { id: 5, name: "Daniel Shunza" },
  { id: 6, name: "Manoa Karani" },
  { id: 7, name: "Collins Likhomba" },
  { id: 8, name: "Marygoret Shunza" },
  { id: 9, name: "Catherine Likhomba" },
  { id: 10, name: "Abigael Muhya" },
  { id: 11, name: "Jackline Kiprotich" },
  { id: 12, name: "Nicholas Jiveri" },
  { id: 13, name: "Durusila Jiveri" },
  { id: 14, name: "Janet Jiveri" },
  { id: 15, name: "Philip Shunza" },
  { id: 16, name: "Metrine Alumasa" },
  { id: 17, name: "Jackson Alumasa" },
  { id: 18, name: "Rodgers Khamadi" },
  { id: 19, name: "Lydia Khamadi" },
  { id: 20, name: "Doris Likhomba" },
  { id: 21, name: "Dinnah Shunza" },
  { id: 22, name: "Kennedy Alumasa" },
  { id: 23, name: "Pamelah Alumasa" },
  { id: 24, name: "Joseph Anusu" },
  { id: 25, name: "Mrs Collins Likhomba" },
];

function MembershipCertificates() {
  const handleDownloadPDF = (member) => {
    const pdf = new jsPDF("landscape", "mm", "a4");
    const pageWidth = 297;
    const pageHeight = 210;
    const margin = 15;

    const membershipId = `VAM-${String(member.id).padStart(2, "0")}`;

    // --- Border ---
    pdf.setLineWidth(1.2);
    pdf.setDrawColor(0, 128, 0);
    pdf.rect(margin, margin, pageWidth - margin * 2, pageHeight - margin * 2);

    // --- Watermark ---
    pdf.saveGraphicsState?.();
    pdf.setFontSize(45);
    pdf.setTextColor(230, 230, 230);
    pdf.setFont(undefined, "bold");
    pdf.text("Vamuli Welfare", pageWidth / 2, pageHeight / 2, {
      align: "center",
      angle: 15,
    });
    pdf.restoreGraphicsState?.();

    // --- Logo ---
    const logoWidth = 40;
    const logoHeight = 40;

    pdf.addImage(
      "/vamuli-logo.png",
      "PNG",
      pageWidth / 2 - logoWidth / 2,
      margin + 5,
      logoWidth,
      logoHeight
    );

    let y = margin + 55;

    // --- Header ---
    pdf.setFontSize(24);
    pdf.setTextColor(0, 100, 0);
    pdf.setFont(undefined, "bold");
    pdf.text("Vamuli Welfare", pageWidth / 2, y, { align: "center" });

    y += 12;
    pdf.setFontSize(18);
    pdf.setTextColor(0, 0, 0);
    pdf.setFont(undefined, "normal");
    pdf.text("Membership Certificate", pageWidth / 2, y, { align: "center" });

    // --- Body ---
    y += 18;
    pdf.setFontSize(12);
    pdf.text("This is to certify that", pageWidth / 2, y, { align: "center" });

    y += 10;
    pdf.setFontSize(18);
    pdf.setFont(undefined, "bold");
    pdf.text(member.name, pageWidth / 2, y, { align: "center" });

    y += 10;
    pdf.setFontSize(12);
    pdf.setFont(undefined, "normal");
    pdf.text(
      "has been officially recognized as a member of Vamuli Welfare.",
      pageWidth / 2,
      y,
      { align: "center" }
    );

    y += 8;
    pdf.text(`Membership ID: ${membershipId}`, pageWidth / 2, y, {
      align: "center",
    });

    y += 6;
    pdf.text("Date of Joining: January 3, 2026", pageWidth / 2, y, {
      align: "center",
    });

    // --- Signatures ---
    y += 18;
    pdf.setLineWidth(0.5);
    pdf.line(margin + 25, y, pageWidth / 2 - 15, y);
    pdf.line(pageWidth / 2 + 15, y, pageWidth - margin - 25, y);

    y += 5;
    pdf.setFontSize(10);
    pdf.text("Chairperson", (margin + pageWidth / 2 - 15) / 2, y, {
      align: "center",
    });
    pdf.text(
      (pageWidth / 2 + 15 + pageWidth - margin - 25) / 2,
      y,
      "Secretary",
      { align: "center" }
    );

    // --- Official Stamp ---
    const stampSize = 50;

    pdf.addImage(
      "/vamuli-stamp.png",
      "PNG",
      pageWidth - margin - stampSize,
      pageHeight - margin - stampSize,
      stampSize,
      stampSize
    );

    pdf.save(`${membershipId}-${member.name}.pdf`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white shadow-lg border rounded-lg">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
        Vamuli Welfare Membership Certificates
      </h1>

      {members.map((member) => (
        <div
          key={member.id}
          className="flex justify-between items-center mb-3 border p-3 rounded-lg shadow-sm"
        >
          <span className="text-gray-800 font-medium">{member.name}</span>
          <button
            onClick={() => handleDownloadPDF(member)}
            className="bg-green-700 text-white px-4 py-1 rounded shadow hover:bg-green-800"
          >
            Download Certificate
          </button>
        </div>
      ))}
    </div>
  );
}

export default MembershipCertificates;