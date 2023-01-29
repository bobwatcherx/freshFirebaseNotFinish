import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import {getbyid} from '../../firebaseconfig/firebase.ts'

import Editform from '../../islands/Editform.tsx'

export const handler: Handlers = {
  async GET(_, ctx) {
    const { edit } = ctx.params;
    let res  = await getbyid(edit)
    return ctx.render({"res":res,"edit":edit})
  },
};


export default function AboutPage({data}:PageProps) {
 
    return (
      <>
      <Editform alldata={data}/>
      </>)
 
}
