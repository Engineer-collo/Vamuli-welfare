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
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("Vamuli-Signatories.pdf");
  };

  return (
    <div className="max-w-4xl mx-auto mt-4">

      {/* BUTTON */}
      <div className="flex justify-end mb-3">
        <button
          onClick={handleDownloadPDF}
          className="bg-green-700 text-white px-4 py-1 rounded text-sm"
        >
          Download PDF
        </button>
      </div>

      {/* DOCUMENT */}
      <div
        ref={formRef}
        className="relative bg-white p-4 border border-black text-[11px] leading-tight overflow-hidden"
      >

        {/* WATERMARK */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-[55px] font-bold text-gray-200 rotate-12 opacity-30">
            VAMULI WELFARE
          </p>
        </div>

        {/* HEADER */}
        <div className="flex items-center justify-between border-b pb-2 mb-2 relative z-10">
          <div className="flex items-center gap-2">
            <img
              src="/vamuli-logo.png"
              alt="logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-lg font-bold text-green-700">
                VAMULI WELFARE
              </h1>
              <p className="text-[10px]">Unity • Support • Development</p>
            </div>
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-center text-lg font-bold text-green-700 mb-2 relative z-10">
          MEMBER SIGNATORIES
        </h1>

        <p className="text-center text-[10px] mb-2 relative z-10">
          This document confirms that all members have read, understood, and agreed
          to the <span className="font-semibold">Vamuli Welfare Constitution</span>.
        </p>

        {/* TABLE */}
        <table className="w-full border border-gray-300 text-left text-[10px] relative z-10">
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

        {/* OFFICIALS */}
        <div className="mt-3 text-[10px] relative z-10">
          <h2 className="font-semibold text-green-600 mb-1">
            APPROVED BY OFFICIALS
          </h2>

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

        {/* FOOTER + STAMP */}
        <div className="flex justify-between items-center mt-4 relative z-10">
          <p className="text-[9px]">
            Official record of agreement by all members.
          </p>

          {/* STAMP */}
          <img
            src="/vamuli-stamp.png"
            alt="stamp"
            className="w-24 h-24 object-contain opacity-90"
          />
        </div>

      </div>
    </div>
  );
}

export default Signatories;