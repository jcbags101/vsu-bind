import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import db from "../firebase-config";

const fetchTransactions = async () => {
  const transactionsCol = collection(db, "transactions");
  const dataSnapshot = await getDocs(transactionsCol);
  const dataList = dataSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return dataList;
};

const createTransaction = async (transaction) => {
  const transactionsCol = collection(db, "transactions");
  const docRef = await addDoc(transactionsCol, transaction);
  const docSnapshot = await getDoc(docRef);

  return {
    id: docSnapshot.id,
    ...docSnapshot.data(),
  };
};

export { fetchTransactions, createTransaction };
