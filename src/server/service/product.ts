import axios from "axios";


export async function ProductCall (){
    
     return  axios.get('http://localhost:3004/product')
}
export async function HomeProductCall() {
    return  axios.get('http://localhost:3004/home')

}