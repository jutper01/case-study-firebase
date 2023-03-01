import { initializeApp } from "firebase/app";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

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
  await deleteDoc(doc(db, "products", "Milk"));
  console.log("Milk successfully deleted!");
} catch (e) {
  console.error("Error removing milk: ", e);
}

try {
  await deleteDoc(doc(db, "products", "Eggs"));
  console.log("Eggs successfully deleted!");
} catch (e) {
  console.error("Error removing eggs: ", e);
}

// exit the program
process.exit(0);