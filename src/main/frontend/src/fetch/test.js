import axios from 'axios';

export const connectTest= async ()=>{
    try{
        const res=await axios.get(
            `${process.env.REACT_APP_SPRING_API}/test`,
        )
        return res.data
    } catch(err){
        console.error(err);
        return false;
    }
}