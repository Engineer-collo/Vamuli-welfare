import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function LoanForm() {
  const formRef = useRef();

  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(formRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("Vamuli-Loan-Form.pdf");
  };

  return (
    <div className="max-w-4xl mx-auto mt-4">

      {/* BUTTON */}
      <div className="flex justify-end mb-3">
        <button
          onClick={handleDownloadPDF}
          className="bg-green-700 text-white px-3 py-1 rounded text-sm"
        >
          Download PDF
        </button>
      </div>

      {/* FORM */}
      <div
        ref={formRef}
        className="relative bg-white p-4 border border-black text-[12px] leading-tight overflow-hidden"
      >

        {/* WATERMARK */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-[60px] font-bold text-gray-200 rotate-12 opacity-30">
            VAMULI WELFARE
          </p>
        </div>

        {/* HEADER */}
        <div className="flex justify-between items-center border-b pb-2 mb-2 relative z-10">
          <div className="flex items-center gap-2">
            <img
              src="/vamuli-logo.png"
              alt="logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-lg font-bold text-green-700">
                VAMULI WELFARE
              </h1>
              <p className="text-[10px]">Unity • Support • Development</p>
            </div>
          </div>

          <div className="text-right text-[10px]">
            <p>Form No: __________</p>
          </div>
        </div>

        <h2 className="text-center font-bold text-sm underline mb-2 relative z-10">
          LOAN AGREEMENT FORM
        </h2>

        {/* BORROWER + LOAN */}
        <div className="grid grid-cols-2 gap-2 mb-2 relative z-10">
          <div className="border p-2">
            <p className="font-semibold">Borrower Details</p>
            <p>Name: ________________________</p>
            <p>Member No: ____________________</p>
            <p>ID No: ________________________</p>
            <p>Phone: ________________________</p>
          </div>

          <div className="border p-2">
            <p className="font-semibold">Loan Details</p>
            <p>Amount: ______________________</p>
            <p>Approved Date: _______________</p>
            <p>Deadline: ____________________</p>
            <p>Purpose: _____________________</p>
          </div>
        </div>

        {/* GUARANTORS */}
        <div className="border p-2 mb-2 relative z-10">
          <p className="font-semibold">Guarantors</p>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="font-semibold text-[11px]">Guarantor 1</p>
              <p>Name: ____________________</p>
              <p>Member No: _______________</p>
              <p>ID: ______________________</p>
              <p>Phone: ___________________</p>
              <p>Sign: ____________________</p>
            </div>

            <div>
              <p className="font-semibold text-[11px]">Guarantor 2</p>
              <p>Name: ____________________</p>
              <p>Member No: _______________</p>
              <p>ID: ______________________</p>
              <p>Phone: ___________________</p>
              <p>Sign: ____________________</p>
            </div>
          </div>
        </div>

        {/* CONDITIONS */}
        <div className="border p-2 mb-2 relative z-10">
          <p className="font-semibold">Conditions</p>
          <ul className="list-disc ml-4 text-[11px]">
            <li>Loan must not exceed savings.</li>
            <li>Repayment within agreed period.</li>
            <li>10% monthly penalty on default.</li>
            <li>Guarantors assume liability.</li>
            <li>
              Failure to repay will lead to legal action including recovery
              enforcement and possible arrest as per law.
            </li>
          </ul>
        </div>

        {/* DECLARATION + APPROVAL */}
        <div className="grid grid-cols-2 gap-2 relative z-10">
          <div className="border p-2">
            <p className="font-semibold">Declaration</p>
            <p className="text-[11px]">
              I agree to all terms and accept legal consequences in case of default.
            </p>
            <p>Sign: ____________________</p>
            <p>Date: ____________________</p>
          </div>

          <div className="border p-2">
            <p className="font-semibold">Approval</p>
            <p>Chair: __________ Sign: ______</p>
            <p>Sec: ___________ Sign: ______</p>
            <p>Treasurer: ______ Sign: ____</p>
          </div>
        </div>

        {/* FOOTER + STAMP */}
        <div className="flex justify-between items-center mt-4 relative z-10">
          <p className="text-[10px]">
            Official & legally binding document
          </p>

          {/* REAL STAMP */}
          <img
            src="/vamuli-stamp.png"
            alt="stamp"
            className="w-24 h-24 object-contain opacity-90"
          />
        </div>

      </div>
    </div>
  );
}

export default LoanForm;