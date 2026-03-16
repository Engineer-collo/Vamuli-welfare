import React from "react";
import contributionsData from "./contributionsData";

const LATE_FINE = 100;

// Extract months dynamically
const months = Object.keys(contributionsData[0]).filter(
  (key) =>
    !["id", "name", "role"].includes(key) &&
    !key.toLowerCase().includes("paiddate")
);

// Monthly contribution totals (no fines)
const contributionTotals = {};
months.forEach((month) => {
  contributionTotals[month] = contributionsData.reduce((sum, c) => {
    return sum + (c[month] || 0);
  }, 0);
});

// Calculate totals per member
const contributionsWithTotals = contributionsData.map((c) => {
  let contributionTotal = 0;
  let finesTotal = 0;

  months.forEach((month) => {
    const paidDateKey = month + "PaidDate";

    contributionTotal += c[month] || 0;

    if (c[paidDateKey] && c[paidDateKey] > 5) {
      finesTotal += LATE_FINE;
    }
  });

  return { ...c, contributionTotal, finesTotal };
});

// Global totals
const totalContributions = contributionsWithTotals.reduce(
  (sum, c) => sum + c.contributionTotal,
  0
);

const totalFines = contributionsWithTotals.reduce(
  (sum, c) => sum + c.finesTotal,
  0
);

function ContributionsTable() {
  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Vamuli Welfare Contributions (Year 2026)
      </h2>

      {/* Summary */}
      <div className="flex flex-wrap justify-center gap-6 mb-6 text-lg font-semibold">
        <span className="text-green-700">
          Contributions Total: Ksh {totalContributions}
        </span>

        <span className="text-red-600">
          Fines Total: Ksh {totalFines}
        </span>

        <span className="text-blue-800">
          Welfare Total: Ksh {totalContributions + totalFines}
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

            <th className="p-3 text-left">Contribution Total</th>
            <th className="p-3 text-left">Fines Total</th>
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
                const late = c[paidDateKey] && c[paidDateKey] > 5;

                if (late) value += LATE_FINE;

                return (
                  <td
                    key={month}
                    className={`p-3 font-semibold ${
                      late
                        ? "bg-yellow-100 text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {value} {late ? "⚠️" : "✅"}
                  </td>
                );
              })}

              <td className="p-3 font-bold text-blue-700">
                {c.contributionTotal}
              </td>

              <td className="p-3 font-bold text-red-600">
                {c.finesTotal}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContributionsTable;