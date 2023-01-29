import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import {useState} from 'preact/hooks'
import {getbyid,updatedata} from '../../firebaseconfig/firebase.ts'

export const handler: Handlers = {
  async GET(_, ctx) {
    const { edit } = ctx.params;
    let res  = await getbyid(edit)
    return ctx.render(res,edit)
  },
};


export default function AboutPage({data}:PageProps) {
  const [name,setName] = useState(data.name)
  const [age,setAge] = useState(data.age)
  console.log(data)
  function editsubmit(e){
    e.preventDefault()
  }

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div>
      <h1>Edit data</h1>
      name = <input type="text" value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <br/>
      age = <input type="text" value={age}
      onChange={(e)=>setName(e.target.value)}
      />
      <button type="button" onClick={editsubmit}>edit</button>

    </div>
    </>
  );
}
