import { Head } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
// import {updatedata} from '../firebaseconfig/firebase.ts'
import * as fs from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";
import {q,db} from '../firebaseconfig/firebase.ts'




export default function Editform(props){
	let data = props.alldata
	 const [name,setName] = useState(data.res.name)
  const [age,setAge] = useState(data.res.age)
	 

async function editsubmit(e){
      let newdata = {
      name:name,
      age:age
    }
   const docRef = fs.doc(db, "users", props.alldata.edit);
    fs.setDoc(docRef, newdata)
    .then(docRef => {
        console.log("Entire Document has been updated successfully");
        alert("success")
window.location.href = "/"
        
    })
    .catch(error => {
        console.log(error);

    })
    
  }

	return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div>
      <h1>Edit data</h1>
      name = <input type="text" value={name}
      onInput={(e)=>setName(e.target.value)}
      />
      <br/>
      age = <input type="text" value={age}
      onInput={(e)=>setAge(e.target.value)}
      />
      <button type="button" onClick={editsubmit}>edit</button>

    </div>
    </>
  );
}