import { Head } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
import * as fs from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";
import {db} from '../firebaseconfig/firebase.ts'

export default function AddForm(){
	const [name,setName] = useState()
	const [age,setAge] = useState()

	async function addnew(){
		try{
			const docRef = await fs.addDoc(fs.collection(db, "users"), {
  name: name,
  age: age
});
console.log("Document written with ID: ", docRef.id);
	alert("success created")
	window.location.href = "/"

}catch(err){
	console.log(err)
	alert("errror")
}
	}

	return (
		<>
		<h3>Input add new data</h3>
		<br/>
		name : <input type="text" onInput={(e)=>setName(e.target.value)}/>
		<br/>
		age : <input type="text" onInput={(e)=>setAge(e.target.value)}/>
		<br/>
		<button
		onClick={addnew}
		>add new button</button>
		</>

		)
}