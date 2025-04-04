import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import {connectTest} from "../fetch/test";
import {userLogin, userRegister} from "../fetch/userFetch";

function Login() {
    const navigate = useNavigate();
    const [check, setCheck] = useState('');
    const [user, setUser]=useState({userId:'',password:''});

    useEffect(()=>{
        const fetchData = async()=> {
            const res = await connectTest();
            setCheck(res);
        }
        fetchData();
    },[]);



    //로그인 핸들러
    const handleLogin = () => {
        userLogin(user.userId,user.password)
            .then((response)=>{
                if(response) console.log("로그인성공")
                navigate('/board');
            })
    }

    //회원가입 핸들러
    const handleRegister = () => {
        userRegister(user.userId, user.password);
    }

    return (
        <div>
            서버 연결 {check}
            <div>
                <label>아이디 </label>
                <input
                    type="text"
                    value={user.userId}
                    onChange={(e) => setUser(prev=>({...prev,userId:e.target.value}))}
                    required
                />
            </div>
            <div>
                <label>비밀번호 </label>
                <input
                    type="text"
                    value={user.password}
                    onChange={(e)=>setUser(prev=>({...prev,password:e.target.value}))}
                    required
                />
            </div>
            <button onClick={handleRegister}>회원가입</button>
            <button onClick={handleLogin}>로그인</button>
        </div>
    );
}

export default Login;
