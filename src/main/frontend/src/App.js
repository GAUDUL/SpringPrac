import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screen/Login'
import Board from "./screen/Board";


function App() {
    return (
        //라우터 세팅
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/board" element={<Board />} />
            </Routes>
        </Router>
    );
}

export default App;
