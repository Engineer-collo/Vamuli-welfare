import React from "react";
import contributionsData from "./contributionsData";

const LATE_FINE = 100;

// Extract months dynamically
const months = Object.keys(contributionsData[0]).filter(
  (key) =>
    !["id", "name", "role"].includes(key) &&
    !key.toLowerCase().includes("paiddate")
);

// Monthly contribution totals
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

      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-green-700">
        Vamuli Welfare Contributions (2026)
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">

        <div className="bg-green-100 p-4 rounded-lg font-semibold">
          Contributions Total
          <div className="text-green-700 text-xl">
            Ksh {totalContributions}
          </div>
        </div>

        <div className="bg-red-100 p-4 rounded-lg font-semibold">
          Fines Total
          <div className="text-red-600 text-xl">
            Ksh {totalFines}
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg font-semibold">
          Welfare Total
          <div className="text-blue-800 text-xl">
            Ksh {totalContributions + totalFines}
          </div>
        </div>

      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">

        <table className="min-w-full border-collapse">

          <thead>
            <tr className="bg-green-600 text-white text-sm md:text-base">
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Member</th>

              {months.map((month) => (
                <th key={month} className="p-3 text-left">
                  {month.charAt(0).toUpperCase() + month.slice(1)}
                </th>
              ))}

              <th className="p-3 text-left">Contribution</th>
              <th className="p-3 text-left">Fines</th>
            </tr>
          </thead>

          <tbody>
            {contributionsWithTotals.map((c) => (
              <tr key={c.id} className="border-b hover:bg-gray-100">

                <td className="p-3">{c.id}</td>
                <td className="p-3 font-medium">{c.name}</td>

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
                          : "text-green-700"
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

          {/* Monthly totals row */}
          <tfoot>
            <tr className="bg-gray-100 font-bold">
              <td colSpan="2" className="p-3">
                Monthly Totals
              </td>

              {months.map((month) => (
                <td key={month} className="p-3 text-green-700">
                  {contributionTotals[month]}
                </td>
              ))}

              <td className="p-3 text-blue-700">
                {totalContributions}
              </td>

              <td className="p-3 text-red-600">
                {totalFines}
              </td>
            </tr>
          </tfoot>

        </table>

      </div>
    </div>
  );
}

export default ContributionsTable;