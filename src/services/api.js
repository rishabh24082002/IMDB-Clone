import axios from 'axios';

export const categoryofMovies=async(API_URL)=>{
    try{
        const response=await axios.get(API_URL);
        return response.data;
    }catch(error){
        console.log('error while calling the api',error.message);
        return error.response.data;
    }
}