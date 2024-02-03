import React from "react";
import logo from "../assets/logo.png"; //

const UserInfoCard = ({ userInfo }) => {
  const {
    id,
    name,
    studentNumber,
    email,
    courseCode,
    appointmentDate,
    title,
    copies,
    remarks,
    amount,
    status,
    onStatusChange,
    onGenerateBindingOrder,
    onGenerateAcknowledgementReceipt,
    onExportPDF,
    onExportDOCX,
  } = userInfo;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
      <div className="flex flex-col items-center bg-white p-6 shadow rounded-lg">
        <div className="flex justify-center items-center mb-4">
          <div className="rounded-full bg-gray-200 p-4 text-3xl font-semibold">
            {id}
          </div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <img
            src={logo}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-2"
          />
          <div className="font-bold text-xl text-center">{name}</div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center text-gray-700 text-base mb-2">
            <p>Student Number</p>
            <p>{studentNumber}</p>
          </div>
          <div className="flex justify-between items-center text-gray-700 text-base mb-2">
            <p>Email</p>
            <p>{email}</p>
          </div>
          <div className="flex justify-between items-center text-gray-700 text-base mb-2">
            <p>Course Code</p>
            <p>{courseCode}</p>
          </div>
          <div className="flex justify-between items-center text-gray-700 text-base mb-2">
            <p>Appointment Date</p>
            <p>{appointmentDate}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-900 font-bold">Title</p>
        <p className="text-gray-700 text-base">{title}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-gray-900 font-bold">Copies</p>
          <p className="text-gray-700 text-base">{copies}</p>
        </div>
        <div>
          <p className="text-gray-900 font-bold">Remarks</p>
          <p className="text-gray-700 text-base">{remarks}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-900 font-bold">Amount</p>
        <p className="text-gray-700 text-base">{amount}</p>
      </div>
      <div className="flex flex-row mt-4 mb-4">
        <div className="flex flex-col w-3/5">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Paid</span>
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Claimed</span>
          </label>
        </div>
        <div className="text-sm text-gray-700">
          <p>Ack. ID ---</p>
          <p>Order ID ---</p>
          <p>OR ID ---</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          className={`rounded-full px-4 py-1 text-sm ${
            status === "Pending"
              ? "bg-green-200 text-green-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => onStatusChange("Pending")}
        >
          Pending
        </button>
        <button
          className={`rounded-full px-4 py-1 text-sm ${
            status === "Submitted"
              ? "bg-green-200 text-green-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => onStatusChange("Submitted")}
        >
          Submitted
        </button>
        <button
          className={`rounded-full px-4 py-1 text-sm ${
            status === "Checked"
              ? "bg-green-200 text-green-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => onStatusChange("Checked")}
        >
          Checked
        </button>
        {/* Add more status buttons as needed */}
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onGenerateBindingOrder}
        >
          Generate Binding Order
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onGenerateAcknowledgementReceipt}
        >
          Generate Acknowledgement Receipt
        </button>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={onExportPDF}
        >
          PDF
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={onExportDOCX}
        >
          DOCX
        </button>
      </div>
    </div>
  );
};

export default UserInfoCard;
