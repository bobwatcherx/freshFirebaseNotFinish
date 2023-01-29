import { Head } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
    
import * as fs from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";
import {q,db} from '../firebaseconfig/firebase.ts'


export default function DeleteForm(props){
	
    console.log(props.alldata)

    async function deletebtn(){
          try{
await fs.deleteDoc(fs.doc(db, "users", props.alldata.deleteid));
console.log("success")
alert("success delete ")
window.location.href = "/"
}catch(err){
    console.log(err)
alert("Failed")
  
}
    }



	return (
    <>
      <h4>delete data {props.alldata.deleteid}</h4>
      <br/>
      <h2>name  : {props.alldata.res.name}</h2>
      <br/>
      <h2>age  : {props.alldata.res.age}</h2>
      <br/>
      <button onClick={deletebtn}>Delete Data</button>
    </>
  );
}