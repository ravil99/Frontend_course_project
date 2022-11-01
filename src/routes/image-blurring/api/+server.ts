export const GET = async ({ request, url }) => {
    const res = await fetch(`https://api.pretrained.ai/aigerim/face-blurring`)
    const data = await res.json()
  
    
    return new Response(JSON.stringify(data), { status: 200 })
  }
  
  export const POST = async ({ request }) => {
    const body = await request.json()
    const authHeader = request.headers.get('Authorization')
  
  
    // if (authHeader !== 'Myauthheader') {
    //   return new Response(JSON.stringify({message: 'Invalid credentials'}), { status: 401 })
    // }
  
    console.log(body)
  
    return new Response(JSON.stringify({message: "Success"}), { status: 201 })
  }