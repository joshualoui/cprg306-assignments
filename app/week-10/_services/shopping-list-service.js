import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (id) => {
  try {
    const itemsCollection = collection(db, "users", id, "items");
    const itemsSnapshot = await getDocs(itemsCollection);
    const itemsList = itemsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return itemsList;
  } catch (error) {
    console.error("Error getting items: ", error);
    throw error;
  }
};
