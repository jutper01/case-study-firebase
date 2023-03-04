import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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
  const docSnapMilk = await getDoc(doc(db, "products", "Milk"));
  const docSnapEggs = await getDoc(doc(db, "products", "Eggs"));

  if (docSnapMilk.exists()) {
    console.log("Milk data:", docSnapMilk.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No milk!");
  }

  if (docSnapEggs.exists()) {
    console.log("Eggs data:", docSnapEggs.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No eggs!");
  }
  console.log();
} catch (e) {
  console.error("Error reading products: ", e);
}

// ---------------------------- Suppliers --------------------------------
try {
  const docSnapMilk = await getDoc(doc(db, "supplier", "Milk"));
  const docSnapEggs = await getDoc(doc(db, "supplier", "Eggs"));

  if (docSnapMilk.exists()) {
    console.log("Milk supplier data:", docSnapMilk.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No milk!");
  }

  if (docSnapEggs.exists()) {
    console.log("Eggs supplier data:", docSnapEggs.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No eggs!");
  }
  console.log();
} catch (e) {
  console.error("Error reading suppliers: ", e);
}

// ---------------------------- ProductSupplier --------------------------------
try {
  const docSnapMilk = await getDoc(doc(db, "productSupplier", "Milk"));
  const docSnapEggs = await getDoc(doc(db, "productSupplier", "Eggs"));

  if (docSnapMilk.exists()) {
    console.log("Milk productSupplier data:", docSnapMilk.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No milk supplier!");
  }

  if (docSnapEggs.exists()) {
    console.log("Eggs productSupplier data:", docSnapEggs.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No eggs supplier!");
  }
  console.log();
} catch (e) {
  console.error("Error reading productSupplier: ", e);
}

// exit the program
process.exit(0);