import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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
  await setDoc(doc(db, "products", "Milk"), {
    productID: 1,
    code: 1234,
    quantity: 15,
    price: 100,
  });
  console.log("Milk added");
} catch (e) {
  console.error("Error adding milk: ", e);
}

try {
  await setDoc(doc(db, "products", "Eggs"), {
    productID: 2,
    code: 1111,
    quantity: 250,
    price: 20,
  });
  console.log("Eggs added");
} catch (e) {
  console.error("Error adding eggs: ", e);
}

try {
  await setDoc(doc(db, "supplier", "Milk"), {
    supplierID: 1,
    name: "Milk Inc.",
    phone: 1177,
  });
  console.log("Milk Inc. added");
} catch (e) {
  console.error("Error adding Milk Inc.: ", e);
}

try {
  await setDoc(doc(db, "supplier", "Eggs"), {
    supplierID: 2,
    name: "Egg Inc.",
    phone: 1122,
  });
  console.log("Egg Inc. added");
} catch (e) {
  console.error("Error adding Egg Inc.: ", e);
}

// exit the program
process.exit(0);
