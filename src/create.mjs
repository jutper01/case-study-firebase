import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

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

// ---------------------------- Suppliers --------------------------------
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

// ---------------------------- ProductSupplier --------------------------------
try {
  const docSnapMilk = await getDoc(doc(db, "products", "Milk"));
  const docSnapMilkSupplier = await getDoc(doc(db, "supplier", "Milk"));

  if (docSnapMilk.exists() && docSnapMilkSupplier.exists()) {
    const productID = docSnapMilk.data().productID;
    const supplierID = docSnapMilkSupplier.data().supplierID;

    await setDoc(doc(db, "productSupplier", "Milk"), {
      productID: productID,
      supplierID: supplierID,
    });
    console.log("Milk supplier added");
  } else {
    // doc.data() will be undefined in this case
    console.log("No milk or supplier!");
  }
} catch (e) {
  console.error("Error adding milk supplier: ", e);
}

try {
  const docSnapEggs = await getDoc(doc(db, "products", "Eggs"));
  const docSnapEggsSupplier = await getDoc(doc(db, "supplier", "Eggs"));

  if (docSnapEggs.exists() && docSnapEggsSupplier.exists()) {
    const productID = docSnapEggs.data().productID;
    const supplierID = docSnapEggsSupplier.data().supplierID;

    await setDoc(doc(db, "productSupplier", "Eggs"), {
      productID: productID,
      supplierID: supplierID,
    });
    console.log("Eggs supplier added");
  } else {
    // doc.data() will be undefined in this case
    console.log("No eggs or supplier!");
  }
} catch (e) {
  console.error("Error adding eggs supplier: ", e);
}

// ---------------------------- Orders --------------------------------
try {
  const docSnapMilk = await getDoc(doc(db, "products", "Milk"));

  await setDoc(doc(db, "orders", "Milk"), {
    orderID: 99,
    productID: docSnapMilk.data().productID,
    quantity: 5,
  });
  console.log("Milk order added");
} catch (e) {
  console.error("Error adding milk order: ", e);
}

try {
  const docSnapEggs = await getDoc(doc(db, "products", "Eggs"));

  await setDoc(doc(db, "orders", "Eggs"), {
    orderID: 100,
    productID: docSnapEggs.data().productID,
    quantity: 10,
  });
  console.log("Eggs order added");
} catch (e) {
  console.error("Error adding eggs order: ", e);
}

// exit the program
process.exit(0);
