import { useState } from "react";
import ListComponent from "./components/ListComponent";
import Sidebar from "./components/Sidebar";
import UserInfoCard from "./components/UserInfoCard";

const mockData = [
  {
    id: 18,
    title: "AGRONOMIC RESPONSE AND POTASSIUM UPTAKE OF DIFFERENT POT...",
    status: "Binding",
    name: "Judy Lee Baguinang",
    studentNumber: "21-1-00300",
    email: "21-1-00300@vsu.edu.ph",
    courseCode: "BSCS",
    appointmentDate: "January 13, 2023",
    copies: 4,
    remarks: "Awaiting review",
    amount: 600,
  },
  {
    id: 19,
    title: "SUMMER BRIDGE PROGRAM: A REMOTE ON-THE-JOB TRAINING AT AL...",
    status: "Binding",
    name: "Alex Johnson",
    studentNumber: "21-1-00456",
    email: "21-1-00456@vsu.edu.ph",
    courseCode: "BSIT",
    appointmentDate: "February 20, 2023",
    copies: 2,
    remarks: "Needs revision",
    amount: 300,
  },
  {
    id: 20,
    title: "EXPLORING ABC-NET ARCHITECTURE FOR LAND COVER SEMANTIC S...",
    status: "Submitted",
    name: "Maria Garcia",
    studentNumber: "21-1-00789",
    email: "21-1-00789@vsu.edu.ph",
    courseCode: "BSEE",
    appointmentDate: "March 5, 2023",
    copies: 3,
    remarks: "Under review",
    amount: 450,
  },
  {
    id: 21,
    title: "PERFORMANCE OF TRADITIONAL UPLAND RICE (Oryza sativa L.) VARIE...",
    status: "Pending",
    name: "Ethan Wright",
    studentNumber: "21-1-01234",
    email: "21-1-01234@vsu.edu.ph",
    courseCode: "BSAG",
    appointmentDate: "April 10, 2023",
    copies: 5,
    remarks: "Pending approval",
    amount: 750,
  },
  // ... Add more items as needed
];

const userInfoData = {
  id: 20,
  name: "Judy Lee Baguinang",
  studentNumber: "21-1-00300",
  email: "21-1-00300@vsu.edu.ph",
  courseCode: "BSCS",
  appointmentDate: "January 13, 2023",
  title:
    "EXPLORING ABC-NET ARCHITECTURE FOR LAND COVER SEMANTIC SEGMENTATION IN BARANGAY HIBUNAWAN, BAYBAY CITY, LEYTE: A TRANSFER LEARNING APPROACH",
  copies: 4,
  remarks: "---", // Replace with actual remarks if available
  amount: 600,
  status: "Pending", // This should be one of the statuses used in the component, e.g., 'Pending', 'Submitted', etc.
  onStatusChange: (newStatus) => console.log(`Status changed to ${newStatus}`),
  onGenerateBindingOrder: () => console.log("Generate Binding Order clicked"),
  onGenerateAcknowledgementReceipt: () =>
    console.log("Generate Acknowledgement Receipt clicked"),
  onExportPDF: () => console.log("Export PDF clicked"),
  onExportDOCX: () => console.log("Export DOCX clicked"),
};

function App() {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => () => {
    console.log("Opening item:", item);
    setSelectedItem(item);
    setShowUserInfo(true);
  };

  return (
    <div className="flex flex-row w-full bg-gray-200">
      <Sidebar />
      <ListComponent items={mockData} handleOpenItem={handleOpen} />
      {showUserInfo && <UserInfoCard userInfo={selectedItem} />}
    </div>
  );
}

export default App;
