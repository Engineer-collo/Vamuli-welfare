import React from "react";

function Constitution() {
  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">

      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Vamuli Welfare Constitution
      </h1>

      {/* Introduction */}

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-green-600 mb-2">
          1. Name of the Welfare
        </h2>

        <p className="text-gray-700">
          The name of the welfare group shall be <strong>Vamuli Welfare</strong>.
          The name <strong>Vamuli</strong> represents members drawn from the
          <strong> Muhya family </strong> and the <strong>Likhomba family</strong>,
          united together to promote cooperation, financial support, and
          collective development.
        </p>
      </section>

      {/* Purpose */}

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-green-600 mb-2">
          2. Purpose of the Welfare
        </h2>

        <p className="text-gray-700">
          The purpose of Vamuli Welfare is to bring members together to support
          one another through financial contributions, unity, and collective
          decision-making. The welfare aims to strengthen relationships among
          members while building a financial base that can support development
          and future investment opportunities.
        </p>
      </section>

      {/* Membership */}

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-green-600 mb-2">
          3. Membership
        </h2>

        <p className="text-gray-700">
          Membership is open to individuals from the Muhya and Likhomba
          families who are willing to participate in the welfare activities,
          follow the rules of the group, and contribute regularly to the
          welfare fund.
        </p>
      </section>

      {/* Contributions */}

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-green-600 mb-2">
          4. Monthly Contributions
        </h2>

        <p className="text-gray-700">
          Each member shall contribute Ksh.500 monthly.
          Contributions are expected to be paid within the agreed payment
          period to maintain consistency and growth of the welfare fund.

          kiwango cha kutoa ni Ksh.500 kila mwezi. the previous months contribution should not exceed 5th of the following month. or else a late penalty fee 
           of Ksh.100 shall be applied and if a member misses 3 consucutive contributions he/she shall be expelled from the welfare unless he pays all the pending contributions plus fines of Ksh 300 . 
           members are allowed to make persial contributions of either 250 on 15th of the contribution month and the remaining 250 not later than 5th of the following month to avoid late penalty fee
           if a member was expelled and wishes to come back to the welfare he/she shall be required to pay all the accr
        </p>
      </section>

      {/* Fines */}

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-green-600 mb-2">
          5. Late Payment Fines
        </h2>

        <p className="text-gray-700">
          Any member who pays their monthly contribution after the agreed
          deadline shall be required to pay a fine of Ksh 100. This rule helps
          maintain discipline and fairness among members.
        </p>
      </section>

      {/* Investment */}

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-green-600 mb-2">
          6. Welfare Investment Goal
        </h2>

        <p className="text-gray-700">
          The long-term goal of Vamuli Welfare is to accumulate funds through
          regular contributions. After a period such as one year, two years, or
          more, members will meet and collectively decide on suitable
          investment opportunities that will grow the welfare fund and benefit
          all members.
        </p>
      </section>

      {/* Leadership */}

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-green-600 mb-2">
          7. Leadership
        </h2>

        <p className="text-gray-700">
          The welfare shall be guided by elected leaders including Chairman, Deputy-Chairman, Fines-officer, Treasurer,
          Coordinator and  Secretary. These leaders will ensure proper
          communication, record keeping, and transparency in all welfare
          activities.
        </p>
      </section>

      {/* Meetings */}

      <section>
        <h2 className="text-xl font-semibold text-green-600 mb-2">
          8. Meetings
        </h2>

        <p className="text-gray-700">
          Members shall hold meetings every three(3) months to discuss welfare
          matters, review financial progress, and make decisions regarding
          investments or other group activities.
        </p>
      </section>

    </div>
  );
}

export default Constitution;