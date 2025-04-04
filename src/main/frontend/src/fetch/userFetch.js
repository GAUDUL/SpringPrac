import axios from 'axios';

export const userLogin = async (id, pass) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SPRING_API}/user/login`, {
            user_id: id, // 객체 형태로 전달
            password: pass
        }, {
            withCredentials: true, // 쿠키 포함
        });
        return(response);
    } catch (error) {
        console.error('로그인 오류:', error); // 오류 로그 출력
    }
};


export const userRegister = async (id, pass)=>{
    try{
        const response = await axios.post(`${process.env.REACT_APP_SPRING_API}/user`,{
            user_id:id,
            password: pass
        },{
            withCredentials: true,
        });
        return(response)
    }catch (error){
        console.log('회원가입 오류: ',error);
    }
};

export const userLogout = async ()=>{
    try{
        const response=await axios.get(`${process.env.REACT_APP_SPRING_API}/user/logout`,{
            withCredentials: true,
        })
        return response
    } catch(error){
        console.log('로그아웃 오류: ',error)
    }
}
