import React from "react";

// Sample contributions data
const contributions = [
  { id: 1, name: "Nicholus Jiveri", jan: 500, feb: 500, mar: 500 },
  { id: 2, name: "Durusila Jiveri", jan: 500, feb: 500, mar: 500 },
  { id: 3, name: "Janet Jiveri", jan: 500, feb: 500, mar: 500 },
  { id: 4, name: "Jackson Alumasa", jan: 500, feb: 500, mar: 500 },
  { id: 5, name: "Metrine Alumasa", jan: 500, feb: 500, mar: 500 },
  { id: 6, name: "Rodgers Khamadi", jan: 500, feb: 500, mar: 500 },
  { id: 7, name: "Lydia Khamadi", jan: 500, feb: 500, mar: 500 },
  { id: 8, name: "Kennedy Alumasa", jan: 500, feb: 500, mar: 500 },
  { id: 9, name: "Pamelah Alumasa", jan: 500, feb: 500, mar: 500 },
  { id: 10, name: "Abigael Muhya", jan: 500, feb: 500, mar: 500 },
  { id: 11, name: "Esther Muhya", jan: 500, feb: 500, mar: 500 },
  { id: 12, name: "Elizabeth Khanyiwa", jan: 500, feb: 500, mar: 500 },
  { id: 13, name: "Daniel Shunza", jan: 500, feb: 500, mar: 500 },
  { id: 14, name: "Mergoret Shunza", jan: 500, feb: 500, mar: 500 },
  { id: 15, name: "Margret Likhomba", jan: 500, feb: 500, mar: 500 },
  { id: 16, name: "Collins Likhomba", jan: 500, feb: 500, mar: 500 },
  { id: 17, name: "Dinah Shunza", jan: 500, feb: 500, mar: 500 },
  { id: 18, name: "Manoah Karani", jan: 500, feb: 500, mar: 500 },
  { id: 19, name: "Catherine Karani", jan: 500, feb: 500, mar: 500 },
  { id: 20, name: "Priscilla Wesonga", jan: 500, feb: 500, mar: 500 },
  { id: 21, name: "Zipporah Muhya", jan: 500, feb: 500, mar: 500 },
  { id: 22, name: "Phillip Shunza", jan: 500, feb: 500, mar: 500 },
  { id: 23, name: "Joseph Anusu", jan: 500, feb: 500, mar: 500 },
];

// Calculate totals
const totals = {
  jan: contributions.reduce((sum, c) => sum + c.jan, 0),
  feb: contributions.reduce((sum, c) => sum + c.feb, 0),
  mar: contributions.reduce((sum, c) => sum + c.mar, 0),
};

function ContributionsTable() {
  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Vamuli Welfare Contributions
      </h2>

      {/* Totals */}
      <div className="flex justify-center gap-10 mb-6 text-lg font-semibold">
        <span>Jan Total: Ksh {totals.jan} ✅</span>
        <span>Feb Total: Ksh {totals.feb} ✅</span>
        <span>Mar Total: Ksh {totals.mar} ✅</span>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="p-3 text-left">No</th>
            <th className="p-3 text-left">Member</th>
            <th className="p-3 text-left">Jan</th>
            <th className="p-3 text-left">Feb</th>
            <th className="p-3 text-left">Mar</th>
          </tr>
        </thead>

        <tbody>
          {contributions.map((c) => (
            <tr
              key={c.id}
              className="border-b hover:bg-gray-100 transition"
            >
              <td className="p-3">{c.id}</td>
              <td className="p-3">{c.name}</td>
              <td className="p-3 text-green-600 font-semibold">{c.jan} ✅</td>
              <td className="p-3 text-green-600 font-semibold">{c.feb} ✅</td>
              <td className="p-3 text-green-600 font-semibold">{c.mar} ✅</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContributionsTable;