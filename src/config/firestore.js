import { getFirestore, collection, addDoc } from "firebase/firestore";
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

export { addData };
export default db;
