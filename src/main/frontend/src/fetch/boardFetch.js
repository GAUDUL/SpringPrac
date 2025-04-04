import axios from 'axios';

export const postUpload = async (title, contents) => {
    try{
        const response = await axios.post(
            `${process.env.REACT_APP_SPRING_API}/board/upload`,{
                title: title,
                contents: contents
            }
        )
        return (response);
    }catch(e){
        console.error(e);
        return false;
    }
};

export const boardList = async (page, size) =>{
    try{
        const res = await axios.get(
            `${process.env.REACT_APP_SPRING_API}/board/list`,{
                params: {page, size}
            }
        )
        return (res);
    }catch(e){
        console.error(e);
        return false;
    }
}

