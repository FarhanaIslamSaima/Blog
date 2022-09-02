import axios from "axios"

const URL="http://localhost:8000"

export const createpost=async(post)=>{
    try{
     return await axios.post(`${URL}/create`,post)
    } 
    catch(error){
          console.log("Errror While create Post",error)
    }
}
export const getallpost=async()=>{
    try{
       const response = await axios.get(`${URL}/get`)
       return response.data
    }
    catch(error){
        console.log("Error While getting post",error)
    }
}
export const getpost=async(id)=>{
try{
  const response= await axios.get(`${URL}/details/${id}`)
  return response.data
}
catch(error){
    console.log(error)
}
}
export const updatepost=async(id,post)=>{
    try{
         const response= await axios.post(`${URL}/update/${id}`,post)
         return response.data
    }
    catch(error){
        console.log(error)
    }

}
export const uploadFile=async(data)=>{
    try{
        const response= await axios.post(`${URL}/file/upload`,data)
        return response
         
    }
    catch(error){
        console.log(error)
    }
}
export const uploadComment=async(data)=>{
    try{
         return await axios.post(`${URL}/comment/new`,data)
    }
    catch(error){
        console.log(error)
    }

}
export const getComment=async()=>{
try{
    const response= await axios.get(`${URL}/comment/getcomment`)
    return response
}
catch(error){
    console.log(error)
}
}