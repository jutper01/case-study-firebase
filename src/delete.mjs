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

// ---------------------------- Products --------------------------------
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

// ---------------------------- Suppliers --------------------------------
try {
  await deleteDoc(doc(db, "supplier", "Milk"));
  console.log("Milk supplier successfully deleted!");
} catch (e) {
  console.error("Error removing milk supplier: ", e);
}

try {
  await deleteDoc(doc(db, "supplier", "Eggs"));
  console.log("Eggs supplier successfully deleted!");
} catch (e) {
  console.error("Error removing eggs supplier: ", e);
}

// ---------------------------- ProductSuppliers --------------------------------
try {
  await deleteDoc(doc(db, "productSupplier", "Milk"));
  console.log("Milk product supplier successfully deleted!");
} catch (e) {
  console.error("Error removing milk product supplier: ", e);
}

try {
  await deleteDoc(doc(db, "productSupplier", "Eggs"));
  console.log("Eggs product supplier successfully deleted!");
} catch (e) {
  console.error("Error removing eggs product supplier: ", e);
}

// ---------------------------- Orders --------------------------------
try {
  await deleteDoc(doc(db, "orders", "Milk"));
  console.log("Milk order successfully deleted!");
} catch (e) {
  console.error("Error removing milk order: ", e);
}

try {
  await deleteDoc(doc(db, "orders", "Eggs"));
  console.log("Eggs order successfully deleted!");
} catch (e) {
  console.error("Error removing eggs order: ", e);
}

// exit the program
process.exit(0);