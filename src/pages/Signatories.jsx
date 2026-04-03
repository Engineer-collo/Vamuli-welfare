import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Signatories() {
  const members = [
    "Zipporah Muhya",
    "Margaret Likhomba",
    "Elizabeth Khanyiwa",
    "Esther Muhya",
    "Daniel Shunza",
    "Manoa Karani",
    "Collins Likhomba",
    "Marygoret Shunza",
    "Catherine Likhomba",
    "Abigael Muhya",
    "Jackline Kiprotich",
    "Nicholas Jiveri",
    "Durusila Jiveri",
    "Janet Jiveri",
    "Philip Shunza",
    "Metrine Alumasa",
    "Jackson Alumasa",
    "Rodgers Khamadi",
    "Lydia Khamadi",
    "Doris Likhomba",
    "Dinnah Shunza",
    "Kennedy Alumasa",
    "Pamelah Alumasa",
    "Joseph Anusu",
    "Mrs Collins Likhomba"
  ];

  const formRef = useRef();

  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(formRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("Vamuli-Signatories.pdf");
  };

  return (
    <div className="max-w-4xl mx-auto mt-4">

      {/* Download PDF Button */}
      <div className="flex justify-end mb-3">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-700 text-white px-4 py-1 rounded text-sm"
        >
          Download PDF
        </button>
      </div>

      {/* Document */}
      <div
        ref={formRef}
        className="bg-white p-4 border border-black text-[11px] leading-tight"
      >

        <h1 className="text-center text-lg font-bold text-green-700 mb-2">
          MEMBER SIGNATORIES
        </h1>

        <p className="text-center text-[10px] mb-2">
          This document confirms that all members have read, understood, and agreed
          to the <span className="font-semibold">Vamuli Welfare Constitution</span>.
        </p>

        {/* Table */}
        <table className="w-full border border-gray-300 text-left text-[10px]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-1 w-8">No.</th>
              <th className="border p-1">Full Name</th>
              <th className="border p-1 w-32">Signature</th>
            </tr>
          </thead>
          <tbody>
            {members.map((name, index) => (
              <tr key={index}>
                <td className="border p-1">{index + 1}</td>
                <td className="border p-1">{name}</td>
                <td className="border p-1">______________</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Officials */}
        <div className="mt-2 text-[10px]">
          <h2 className="font-semibold text-green-600 mb-1">APPROVED BY OFFICIALS</h2>

          <div className="space-y-1">
            <div className="flex justify-between border-b">
              <span>Chairperson</span>
              <span>______________</span>
            </div>
            <div className="flex justify-between border-b">
              <span>Secretary</span>
              <span>______________</span>
            </div>
            <div className="flex justify-between border-b">
              <span>Treasurer</span>
              <span>______________</span>
            </div>
            <div className="flex justify-between border-b">
              <span>Coordinator</span>
              <span>______________</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-2 text-center text-[9px]">
          Official record of agreement by all members.
        </p>
      </div>
    </div>
  );
}

export default Signatories;