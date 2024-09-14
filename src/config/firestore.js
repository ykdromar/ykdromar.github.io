import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import firebaseApp from "./firebaseConfig";
import { toast } from "react-toastify";

const db = getFirestore(firebaseApp);

const addData = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return;
  } catch (error) {
    console.log("Error in adding data: ", error);
    toast.error("Failed to sent message, Please try again!");
  }
};

const setData = async (collectionName, data, id) => {
  try {
    await setDoc(doc(db, collectionName, id), data);
    return;
  } catch (error) {
    console.log("Error in adding data: ", error);
    toast.error("Failed to sent message, Please try again!");
  }
};

export { addData, setData };
export default db;
