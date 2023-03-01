import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlZt9G0JmJ_RPVBY1Db3sPzj8IckCU53c",
  authDomain: "case-study-d.firebaseapp.com",
  databaseURL:
    "https://case-study-d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "case-study-d",
  storageBucket: "case-study-d.appspot.com",
  messagingSenderId: "26097434124",
  appId: "1:26097434124:web:25a6865c57fac16f30b829",
  measurementId: "G-2DKT8GP9KH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

try {
  await updateDoc(doc(db, "products", "Milk"), {
    quantity: 10,
    price: 75,
  });
  console.log("Milk successfully updated!");
} catch (e) {
  console.error("Error updating milk: ", e);
}

try {
  await updateDoc(doc(db, "products", "Eggs"), {
    quantity: 175,
    price: 15,
  });
  console.log("Eggs successfully updated!");
} catch (e) {
  console.error("Error updating eggs: ", e);
}

// exit the program
process.exit(0);
