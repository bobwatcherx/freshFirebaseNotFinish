
import { Head } from "$fresh/runtime.ts";
import {getbyid} from '../../firebaseconfig/firebase.ts'
import DeleteForm from '../../islands/DeleteForm.tsx'
import { Handlers, PageProps } from "$fresh/server.ts";


export const handler: Handlers = {
  async GET(_, ctx) {
    const { deleteid } = ctx.params;
    let res  = await getbyid(deleteid)
    return ctx.render({"res":res,"deleteid":deleteid})
  },
};

export default function Deletepage({data}:PageProps){

	
	return (
	<>
	<DeleteForm alldata={data}/>
	</>

		)
}