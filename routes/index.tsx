import { Head } from "$fresh/runtime.ts";

import { useEffect, useState } from "preact/hooks";
import {getalldata} from '../firebaseconfig/firebase.ts'

export const handler: Handlers = {
  async GET(_, ctx) {
    return ctx.render(getalldata())
  },
};



export default function Home({data}) {
 
  return (
    <>
      <Head>
        <title>Fresh App123123</title>
      </Head>
      <div>
      <a href="/pages/abouto">ABOUT</a>
      {data.map((item,index)=>(
        <ul>
        <li key={index}>name : {item.data.name} - age {item.data.age}
        </li>
        <li>
         <a href={`/edit/${item.id}`}>edit</a>
          <button>delete</button>
        </li>
        </ul>
        ))}
    </div>
    </>
  );
}
