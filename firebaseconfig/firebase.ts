import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import * as fs from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxwerEkMk0IzRT_xN17HXhT-Qw743c-wg",
  authDomain: "testdoang-e8396.firebaseapp.com",
  projectId: "testdoang-e8396",
  storageBucket: "testdoang-e8396.appspot.com",
  messagingSenderId: "969724166255",
  appId: "1:969724166255:web:03f0aa356ea1c8b30d4d9a",
  measurementId: "G-LDLHNY5NN1"

};

const app = initializeApp(firebaseConfig)
export const db = fs.getFirestore(app)
export const q = fs.query(fs.collection(db, "users"))

// GET DATA BY ID
export async function getbyid(id){
  const docRef = fs.doc(db, "users", id);
const docSnap = await fs.getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data()
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
  return "no document"
}

}



