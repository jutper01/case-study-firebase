import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";

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
  await updateDoc(doc(db, "products", "Milk"), {
    quantity: 10,
    price: 75,
    productID: "100",
  });
  console.log("Milk successfully updated!");
} catch (e) {
  console.error("Error updating milk: ", e);
}

try {
  await updateDoc(doc(db, "products", "Eggs"), {
    quantity: 175,
    price: 15,
    productID: "200",
  });
  console.log("Eggs successfully updated!");
} catch (e) {
  console.error("Error updating eggs: ", e);
}

// ---------------------------- Suppliers --------------------------------
try {
  await updateDoc(doc(db, "supplier", "Milk"), {
    name: "Milk & Whiskey Inc.",
    phone: "555-555-5555",
    supplierID: "100",
  });
  console.log("Milk Inc. successfully updated!");
} catch (e) {
  console.error("Error updating Milk Inc.: ", e);
}

try {
  await updateDoc(doc(db, "supplier", "Eggs"), {
    name: "Eggs & Bacon Co.",
    phone: "999-999-9999",
    supplierID: "200",
  });
  console.log("Eggs Inc. successfully updated!");
} catch (e) {
  console.error("Error updating Eggs Inc.: ", e);
}

// ---------------------------- ProductSuppliers --------------------------------
try {
  const docSnapMilk = await getDoc(doc(db, "products", "Milk"));
  const docSnapEggs = await getDoc(doc(db, "products", "Eggs"));
  const docSnapMilkSupplier = await getDoc(doc(db, "supplier", "Milk"));
  const docSnapEggsSupplier = await getDoc(doc(db, "supplier", "Eggs"));

  if (docSnapMilk.exists() && docSnapEggs.exists()) {
    const milkProductID = docSnapMilk.data().productID;
    const milkSupplierID = docSnapMilkSupplier.data().supplierID;
    const eggsProductID = docSnapEggs.data().productID;
    const eggsSupplierID = docSnapEggsSupplier.data().supplierID;

    console.log("Milk productID: ", milkProductID);
    console.log("Milk supplierID: ", milkSupplierID);
    console.log("Eggs productID: ", eggsProductID);
    console.log("Eggs supplierID: ", eggsSupplierID);

    await updateDoc(doc(db, "productSupplier", "Milk"), {
      productID: milkProductID,
      supplierID: milkSupplierID,
    });
    console.log("Milk product supplier successfully updated!");

    await updateDoc(doc(db, "productSupplier", "Eggs"), {
      productID: eggsProductID,
      supplierID: eggsSupplierID,
    });
    console.log("Eggs product supplier successfully updated!");
  } else {
    console.log("Error updating product suppliers!");
  }

} catch (e) {
  console.error("Error product suppliers: ", e);
}

// exit the program
process.exit(0);
