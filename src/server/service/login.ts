import axios from "axios";


export async function LoginCall (data:any){
    console.log(data)
     return  axios.post('http://localhost:3004/login',
        
           data
        
        
     ,{
        headers: {
            'Content-Type': 'application/json'
          }
     })
}