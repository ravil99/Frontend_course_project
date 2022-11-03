export const prerender = false;

import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad} from './$types';
import type { ActionResult } from '@sveltejs/kit';

let result: any;

export const load : PageServerLoad = async({params})=>{
  return result;
}

export const actions: Actions = {
  default: async({request}:{request:Request}) =>{
    const data = await request.formData();
    const img = data.get('orgimg');

    const bodyinit = {
      'image':{
        'content': String(img),
      }
    }

    const res = await fetch('https://api.pretrained.ai/aigerim/face-blurring', {
      method: 'POST',
      body: JSON.stringify(bodyinit),
      headers: {
        'Authorization': 'Bearer 448e39890c60474f04d6daa5a9de5652',
        'Content-Type': 'application/json'
      }
    });
    result = await res.json();
  },
};