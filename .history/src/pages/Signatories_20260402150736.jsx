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
  ];

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white shadow-xl rounded-xl p-10 border">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        MEMBER SIGNATORIES
      </h1>

      <p className="text-gray-700 mb-6 text-center">
        This document serves as an official record confirming that all members
        have read, understood, and agreed to abide by the{" "}
        <span className="font-semibold text-black">
          Vamuli Welfare Constitution
        </span>.
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3">No.</th>
              <th className="border p-3">Full Name</th>
              <th className="border p-3">Signature</th>
            </tr>
          </thead>
          <tbody>
            {members.map((name, index) => (
              <tr key={index}>
                <td className="border p-3">{index + 1}</td>
                <td className="border p-3">{name}</td>
                <td className="border p-3">
                  _________________________
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Officials */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          APPROVED BY OFFICIALS
        </h2>

        <div className="space-y-4 text-gray-800">
          <div className="flex justify-between border-b pb-2">
            <span>Chairperson</span>
            <span>_________________________</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Secretary</span>
            <span>_________________________</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Treasurer</span>
            <span>_________________________</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Coordinator</span>
            <span>_________________________</span>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-8 text-sm text-gray-600 text-center">
        This document shall be safely kept as an official record of agreement by
        all members of the welfare.
      </p>
    </div>
  );
}

export default Signatories;