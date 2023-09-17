import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const homeFeed = async () => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`);
        if(response.status===200){
            return response.data;
        }
    } catch (error) {
        console.error(error); 
    }
}

export const searchTermQuery=async(term)=>{
    const query=term.toLowerCase();
    try{
        const response=await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`)
        if(response.status===200){
            return response.data;
        }
    }catch(error){
        console.error(error);
    }
}

