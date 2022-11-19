export const prerender = false;

import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad} from './$types';
import type { ActionResult } from '@sveltejs/kit';

let result: any;
let api_key = 'Bearer 6996ad5869ded7fcd10a4e07a8f6e75a';
let url = 'https://api.pretrained.ai/test-8/text_analysis-1';
export let text_res: any;
export const load : PageServerLoad = async({params})=>{
  return result;
}

export const actions: Actions = {
  default: async({request}:{request:Request}) =>{
    const form = await request.formData();
    const text_ = form.get('text_inp');
    
    const bodyinit = {
      'text': String(text_),
    };
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(bodyinit),
      headers: {
        'Authorization': api_key,
        'Content-Type': 'application/json'
      }
    });
    result = await response.json();
    console.log(result)
    return result;
  }
};