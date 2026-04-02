import React from "react";

const members = [
  { id: 1, name: "Zipporah Muhya", phone: "0723433771" },
  { id: 2, name: "Margaret Likhomba", phone: "0712493243" },
  { id: 3, name: "Elizabeth Khanyiwa", phone: "0727493638" },
  { id: 4, name: "Esther Muhya", phone: "0727990867" },
  { id: 5, name: "Daniel Shunza", phone: "0715163470" },
  { id: 6, name: "Manoa Karani", phone: "0713789615" },
  { id: 7, name: "Collins Likhomba", phone: "0743250838" },
  { id: 8, name: "Marygoret Shunza", phone: "0795045847" },
  { id: 9, name: "Catherine Likhomba", phone: "0796253851" },
  { id: 10, name: "Abigael Muhya", phone: "0738986370" },
  { id: 11, name: "Jackline Kiprotich", phone: "0112477778" },
  { id: 12, name: "Nicholas Jiveri", phone: "0728955267" },
  { id: 13, name: "Durusila Jiveri", phone: "0718860564" },
  { id: 14, name: "Janet Jiveri", phone: "0790000253" },
  { id: 15, name: "Philip Shunza", phone: "0702640960" },
  { id: 16, name: "Metrine Alumasa", phone: "0704372211" },
  { id: 17, name: "Jackson Alumasa", phone: "0728880200" },
  { id: 18, name: "Rodgers Khamadi", phone: "0703440523" },
  { id: 19, name: "Lydia Khamadi", phone: "0799612418" },
  { id: 20, name: "Doris Likhomba", phone: "0700520325" },
  { id: 21, name: "Dinnah Shunza", phone: "0704362282" },
  { id: 22, name: "Kennedy Alumasa", phone: "0727662866" },
  { id: 23, name: "Pamelah Alumasa", phone: "0728983676" },
  { id: 24, name: "Joseph Anusu", phone: "0795343410" },
  { id: 25, name: "Joseph Anusu", phone: "0795343410" },

];

function VamuliContacts() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Vamuli Members Contacts
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Phone Number</th>
            </tr>
          </thead>

          <tbody>
            {members.map((member) => (
              <tr
                key={member.id}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="p-3">{member.id}</td>
                <td className="p-3">{member.name}</td>
                <td className="p-3">
                  <a
                    href={`tel:${member.phone}`}
                    className="text-blue-600 hover:underline"
                  >
                    {member.phone}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VamuliContacts;