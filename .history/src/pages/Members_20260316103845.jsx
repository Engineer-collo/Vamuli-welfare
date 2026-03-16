import React from "react";

// Sample contributions data (24 members)
const contributions = [
  { id: 1, name: "Nicholus Jiveri", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 2, name: "Durusila Jiveri", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 3, name: "Janet Jiveri", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 4, name: "Jackson Alumasa", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 5, name: "Metrine Alumasa", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 6, name: "Rodgers Khamadi", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 7, name: "Lydia Khamadi", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 8, name: "Kennedy Alumasa", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 9, name: "Pamelah Alumasa", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 10, name: "Abigael Muhya", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 11, name: "Esther Muhya", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 12, name: "Elizabeth Khanyiwa", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 13, name: "Daniel Shunza", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 14, name: "Mergoret Shunza", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 15, name: "Margret Likhomba", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 16, name: "Collins Likhomba", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 17, name: "Dinah Shunza", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 18, name: "Manoah Karani", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 19, name: "Catherine Karani", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 20, name: "Priscilla Wesonga", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 21, name: "Zipporah Muhya", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 22, name: "Phillip Shunza", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 23, name: "Joseph Anusu", registration: 500, jan: 500, feb: 500, mar: 500 },
  { id: 24, name: "Jackline Kiprotich", registration: 500, jan: 500, feb: 500, mar: 500 },
];

// Extract months dynamically (excluding id & name)
const months = Object.keys(contributions[0]).filter((key) => key !== "id" && key !== "name");

// Calculate totals per month
const totals = {};
months.forEach((month) => {
  totals[month] = contributions.reduce((sum, c) => sum + c[month], 0);
});

// Calculate grand total per member
const contributionsWithTotals = contributions.map((c) => ({
  ...c,
  total: months.reduce((sum, month) => sum + c[month], 0),
}));

// Calculate full total (all members, all months)
const fullTotal = contributionsWithTotals.reduce((sum, c) => sum + c.total, 0);

function ContributionsTable() {
  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Vamuli Welfare Contributions(</h2>

      {/* Totals */}
      <div className="flex flex-wrap justify-center gap-6 mb-6 text-lg font-semibold">
        {months.map((month) => (
          <span key={month} className="text-green-700">
            {month.charAt(0).toUpperCase() + month.slice(1)} Total: Ksh {totals[month]} ✅
          </span>
        ))}
        <span className="text-blue-800 font-bold">
          Full Total: Ksh {fullTotal} ✅
        </span>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="p-3 text-left">No</th>
            <th className="p-3 text-left">Member</th>
            {months.map((month) => (
              <th key={month} className="p-3 text-left">
                {month.charAt(0).toUpperCase() + month.slice(1)}
              </th>
            ))}
            <th className="p-3 text-left">Total</th>
          </tr>
        </thead>

        <tbody>
          {contributionsWithTotals.map((c) => (
            <tr key={c.id} className="border-b hover:bg-gray-100 transition">
              <td className="p-3">{c.id}</td>
              <td className="p-3">{c.name}</td>
              {months.map((month) => (
                <td
                  key={month}
                  className={`p-3 font-semibold ${
                    c[month] > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {c[month] > 0 ? `${c[month]} ✅` : "0 ❌"}
                </td>
              ))}
              <td className="p-3 font-bold text-blue-800">{c.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContributionsTable;