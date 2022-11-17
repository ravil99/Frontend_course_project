export const prerender = false;

import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad} from './$types';
import type { ActionResult } from '@sveltejs/kit';

let result: any;
let api_key = 'Bearer 6996ad5869ded7fcd10a4e07a8f6e75a';
let api_url = 'https://api.pretrained.ai/test-8/questions';
export let text_res: any;
export const load : PageServerLoad = async({params})=>{
  return result;
}

export const actions: Actions = {
  default: async({request}:{request:Request}) =>{
    const form = await request.formData();
    const question = form.get('user_question');
    const context = form.get('user_context')
    
    const bodyinit = {
      'text': String(question),
      'config': {
        'question-answerer': {
          'context': String(context),
        }
      }
    };
    console.log('Before fetch');
    const response = await fetch(api_url, {
      method: 'POST',
      body: JSON.stringify(bodyinit),
      headers: {
        'Authorization': api_key,
        'Content-Type': 'application/json'
      }
    });
    console.log('after fetch');
    result = await response.json();
    console.log(result)
    return result;
  }
};