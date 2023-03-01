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
} catch (e) {
  console.error("Error reading products: ", e);
}

// exit the program
process.exit(0);