import React, { useState } from "react";

function ContributionForm({ contributions, setContributions }) {
  const [formData, setFormData] = useState({
    memberId: contributions[0]?.id || 1,
    month: "jan",
    amount: 500,
    paidDate: 5,
  });

  const months = Object.keys(contributions[0]).filter(
    (key) => key !== "id" && key !== "name" && !key.toLowerCase().includes("paiddate")
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setContributions((prev) =>
      prev.map((member) => {
        if (member.id === Number(formData.memberId)) {
          return {
            ...member,
            [formData.month]: Number(formData.amount),
            [`${formData.month}PaidDate`]: Number(formData.paidDate),
          };
        }
        return member;
      })
    );
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Contribution</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 items-center justify-center"
      >
        <select
          name="memberId"
          value={formData.memberId}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          {contributions.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>

        <select
          name="month"
          value={formData.month}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month.charAt(0).toUpperCase() + month.slice(1)}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="border p-2 rounded w-24"
        />

        <input
          type="number"
          name="paidDate"
          value={formData.paidDate}
          onChange={handleChange}
          placeholder="Paid Date"
          className="border p-2 rounded w-24"
          min={1}
          max={31}
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Update
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-2 text-center">
        Note: Payment before 5th incurs a fine of Ksh 100 ⚠️
      </p>
    </div>
  );
}

export default ContributionForm;