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
const db = fs.getFirestore(app)
const q = fs.query(fs.collection(db, "users"))
const querySnapshot = await fs.getDocs(q);

// GET ALL DATA

export function getalldata(){
  let alldata = []
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  alldata.push({id:doc.id,data:doc.data()})
});
return alldata
}

// GET DATA BY ID
export async function getbyid(id){
  const docRef = fs.doc(db, "users", id);
const docSnap = await fs.getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  return docSnap.data()
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
  return "no document"
}

}
// DELETE DATA
export async function deletebyid(id){
  try{
await fs.deleteDoc(fs.doc(db, "users", id));
console.log("success")
return "success"
}catch(err){
    console.log(err)
return "error"

}
}


// Update DATA
export function updatedata(id,data){
//     const data = {
//   title: "Vancouver",
//   provinceName: "British Columbia",
//   countryCode: "CA"
// };
const docRef = fs.doc(db, "users", id);
fs.setDoc(docRef, data)
.then(docRef => {
    console.log("Entire Document has been updated successfully");
    return "succes update document"
})
.catch(error => {
    console.log(error);
    return "error"

})
}

