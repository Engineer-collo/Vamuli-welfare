import React from "react";
import contributionsData from "./contributionsData";

const LATE_FINE = 100;

// Extract months dynamically (all except id, name, role, and PaidDate fields)
const months = Object.keys(contributionsData[0]).filter(
  (key) =>
    !["id", "name", "role"].includes(key) && !key.toLowerCase().includes("paiddate")
);

// Calculate totals per month including fines
const totals = {};
months.forEach((month) => {
  totals[month] = contributionsData.reduce((sum, c) => {
    const paidDateKey = month + "PaidDate";
    let value = c[month] || 0;
    if (c[paidDateKey] && c[paidDateKey] > 5) {
      value += LATE_FINE;
    }
    return sum + value;
  }, 0);
});

// Calculate grand total per member including fines
const contributionsWithTotals = contributionsData.map((c) => {
  const total = months.reduce((sum, month) => {
    const paidDateKey = month + "PaidDate";
    let value = c[month] || 0;
    if (c[paidDateKey] && c[paidDateKey] > 5) {
      value += LATE_FINE;
    }
    return sum + value;
  }, 0);
  return { ...c, total };
});

// Full total
const fullTotal = contributionsWithTotals.reduce((sum, c) => sum + c.total, 0);

function ContributionsTable() {
  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Vamuli Welfare Contributions (Year 2026)
      </h2>

      {/* Totals */}
      <div className="flex flex-wrap justify-center gap-6 mb-6 text-lg font-semibold">
        {months.map((month) => (
          <span key={month} className="text-green-700">
            {month.charAt(0).toUpperCase() + month.slice(1)} Total: Ksh {totals[month]} ✅
          </span>
        ))}
        <span className="text-blue-800 font-bold">Full Total: Ksh {fullTotal} ✅</span>
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
              {months.map((month) => {
                const paidDateKey = month + "PaidDate";
                let value = c[month] || 0;
                const late = c[paidDateKey] && c[paidDateKey] > 5; // dynamic for any month
                if (late) value += LATE_FINE;

                return (
                  <td
                    key={month}
                    className={`p-3 font-semibold ${
                      late ? "bg-yellow-100 text-red-600" : value > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {value} {late ? "⚠️" : "✅"}
                  </td>
                );
              })}
              <td className="p-3 font-bold text-blue-800">{c.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContributionsTable;