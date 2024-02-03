import { useEffect, useState } from "react";
import ListComponent from "./components/ListComponent";
import Sidebar from "./components/Sidebar";
import UserInfoCard from "./components/UserInfoCard";
import { createTransaction, fetchTransactions } from "./api/transactions";

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
  const [transactions, setTransactions] = useState([]);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const getTransactions = async () => {
    const transactions = await fetchTransactions();

    console.log("Fetched transactions:", transactions);
    setTransactions(transactions);
  };

  useEffect(() => {
    getTransactions(); // Fetch transactions from the database
  }, []);

  const handleOpen = (item) => () => {
    console.log("Opening item:", item);
    setSelectedItem(item);
    setShowUserInfo(true);
  };

  const hadnleClose = () => {
    setShowUserInfo(false);
  };

  return (
    <div className="flex flex-row w-full bg-gray-200">
      <Sidebar />
      <ListComponent items={transactions} handleOpenItem={handleOpen} />
      {showUserInfo && (
        <UserInfoCard userInfo={selectedItem} onClose={hadnleClose} />
      )}
    </div>
  );
}

export default App;
