import React from "react";

// Fine per missed month
const FINE_AMOUNT = 100;

function FinesTable({ contributions }) {
  // Extract month keys (exclude id & name)
  const months = Object.keys(contributions[0]).filter(
    (key) => key !== "id" && key !== "name"
  );

  // Calculate fines for each member
  const finesData = contributions
    .map((c) => {
      const missedMonths = months.filter((month) => c[month] === 0);
      if (missedMonths.length === 0) return null; // No fine
      return {
        id: c.id,
        name: c.name,
        missedMonths,
        totalFine: missedMonths.length * FINE_AMOUNT,
      };
    })
    .filter(Boolean); // Remove nulls

  // Calculate total fines for all members
  const totalFines = finesData.reduce((sum, c) => sum + c.totalFine, 0);

  if (finesData.length === 0) {
    return (
      <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Fines Report</h2>
        <p className="text-green-600 font-semibold">No fines! All members are up to date ✅</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Fines Report</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-red-600 text-white">
            <th className="p-3 text-left">No</th>
            <th className="p-3 text-left">Member</th>
            <th className="p-3 text-left">Missed Months</th>
            <th className="p-3 text-left">Total Fine (Ksh)</th>
          </tr>
        </thead>

        <tbody>
          {finesData.map((c) => (
            <tr key={c.id} className="border-b hover:bg-gray-100 transition">
              <td className="p-3">{c.id}</td>
              <td className="p-3">{c.name}</td>
              <td className="p-3">{c.missedMonths.join(", ")}</td>
              <td className="p-3 font-bold text-red-600">{c.totalFine}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 font-bold text-lg text-red-700">
        Total Fines Collected: Ksh {totalFines}
      </div>
    </div>
  );
}

export default FinesTable;