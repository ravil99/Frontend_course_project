export const prerender = false;

import {SECTRET_API_KEY} from '$env/static/private'
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

    const res = await fetch('https://api.pretrained.ai/aigerim-1/face-detection', {
      method: 'POST',
      body: JSON.stringify(bodyinit),
      headers: {
        'Authorization': SECTRET_API_KEY,
        'Content-Type': 'application/json'
      }
    });
    result = await res.json();
  },
};