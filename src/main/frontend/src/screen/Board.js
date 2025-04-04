import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import {boardList, postUpload} from "../fetch/boardFetch";

function Login() {
    const navigate = useNavigate();
    const [board,setBoard]=useState([]);
    const [page, setPage]=useState(0);
    const [size, setSize]=useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [post, setPost]=useState({title:'',contents:''});

    useEffect(()=>{
        fetchBoard();
    },[page,size]);

    const writePost = () => {
        postUpload(post.title, post.contents);
    }
    
    //글 목록 불러오기
    const fetchBoard = () =>{
        boardList(page, size)
            .then((res)=>{
                if(res){
                    setBoard(res.data.content)
                    setTotalPages(res.data.totalPages);
                    console.log(res);
                }
                else console.log('글 목록 조회 오류')
            })
    }

    // 이전 페이지
    const handlePrevPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    // 다음 페이지
    const handleNextPage = () => {
        if (page < totalPages - 1) {
            setPage(page + 1);
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={post.title}
                    onChange={(e) =>
                        setPost(prev => ({...prev, title: e.target.value}))}
                />
            </div>
            <div>
                <input
                    type="text"
                    value={post.contents}
                    onChange={(e) =>
                        setPost(prev => ({...prev, contents: e.target.value}))}
                />

            </div>
            <button onClick={writePost}>글쓰기</button>
            <ul>
                {board.map((board) => (
                    <li key={board.id}>
                        <h3>{board.title}</h3>
                        <p>{board.contents}</p>
                    </li>
                ))}
            </ul>

            {/* 페이지 이동 버튼 */}
            <button onClick={handlePrevPage} disabled={page === 0}>
                이전 페이지
            </button>
            <span> {page + 1} / {totalPages} </span>
            <button onClick={handleNextPage} disabled={page === totalPages - 1}>
                다음 페이지
            </button>
            <button> Test 페이지 이동</button>
        </div>
    );
}

export default Login;
