import { Head } from "$fresh/runtime.ts";
import * as fs from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

import { useEffect, useState } from "preact/hooks";
import {q} from '../firebaseconfig/firebase.ts'

export const handler: Handlers = {
  async GET(_, ctx) {
    const querySnapshot = await fs.getDocs(q);
  // GET ALL DATA

  let res = []
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
   res.push({id:doc.id,data:doc.data()})
});
return ctx.render(res)

  },
};



export default function Home({data}) {
  console.log(data)
  return (
    <>
     <Head>
        <title>Fresh App123123</title>
      </Head>
      <div>
      <a href="/addnewdata/addnew">Add new data</a>
      {data.map((item,index)=>(
        <ul>
        <li key={index}>name : {item.data.name} - age {item.data.age}
        </li>
        <li>
         <a href={`/edit/${item.id}`}>edit</a>
          ||
          <a href={`/delete/${item.id}`}>Delete</a>
        </li>
        </ul>
        ))}
    </div>
    </>
  );
}
