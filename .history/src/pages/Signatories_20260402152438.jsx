import React from "react";

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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 bg-white shadow-lg rounded-lg p-6 border 
                    print:shadow-none print:border-none print:p-4 print:mt-0 print:max-w-full 
                    print:text-sm print:leading-tight">

      {/* Print Button */}
      <div className="flex justify-end mb-3 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-green-700 text-white px-4 py-1 rounded shadow hover:bg-green-800 text-sm"
        >
          Print
        </button>
      </div>

      <h1 className="text-2xl font-bold text-center text-green-700 mb-3 print:text-xl">
        MEMBER SIGNATORIES
      </h1>

      <p className="text-gray-700 mb-4 text-center text-sm print:text-xs">
        This document confirms that all members have read, understood, and agreed
        to the <span className="font-semibold">Vamuli Welfare Constitution</span>.
      </p>

      {/* Table */}
      <table className="w-full border border-gray-300 text-left text-sm print:text-xs">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-1 w-10">No.</th>
            <th className="border p-1">Full Name</th>
            <th className="border p-1 w-40">Signature</th>
          </tr>
        </thead>
        <tbody>
          {members.map((name, index) => (
            <tr key={index} className="break-inside-avoid">
              <td className="border p-1">{index + 1}</td>
              <td className="border p-1">{name}</td>
              <td className="border p-1">______________</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Officials */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-green-600 mb-2 print:text-base">
          APPROVED BY OFFICIALS
        </h2>

        <div className="space-y-2 text-sm print:text-xs">
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
      <p className="mt-4 text-xs text-gray-600 text-center">
        Official record of agreement by all members.
      </p>

      {/* Print CSS */}
      <style>
        {`
          @media print {
            @page {
              size: A4;
              margin: 10mm;
            }

            body {
              -webkit-print-color-adjust: exact;
            }

            table {
              page-break-inside: avoid;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Signatories;