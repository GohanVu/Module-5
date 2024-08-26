import logo from './logo.svg';
import './App.css';
import StudentCreate from "./component/student/StudentCreate";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import StudentListFunc from "./component/student/StudentListFunc";
import StudentUpdate from "./component/student/StudentUpdate";

function App() {
  return (
    <>
        <BrowserRouter>
            <div>
                <NavLink to="/student">Danh sách</NavLink>
                <NavLink to="/create">Thêm mới</NavLink>
            </div>
            <Routes>
                <Route path="/create" element={<StudentCreate/>}/>
                <Route path="/student" element={<StudentListFunc/>}/>
                <Route path="/update/:id" element={<StudentUpdate/>}/> {/* Add Route for update */}
            </Routes>
        </BrowserRouter>
        <ToastContainer/>
    </>
  );
}

export default App;