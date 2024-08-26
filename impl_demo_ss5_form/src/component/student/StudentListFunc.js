import {useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import * as studentService from "../../service/StudentService"
import {toast} from "react-toastify";


function StudentListFunc() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [minScore, setMinScore] = useState("");
    const [maxScore, setMaxScore] = useState("");
    const navigate = useNavigate();


    useEffect (() => {
        //     Call API search name
        getAllStudents(name)
    }, [name])

    useEffect(() => {
        return () => {
            //clean up <=> componentWillUnmount
        }
    }, [])

    const getAllStudents = async (name) => {
        let res = await studentService.getAllStudents(name);
        setStudents(res)
    }
    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
    }



    const handleDelete = async (id) => {
        try {
            await studentService.deleteStudent(id);
            // Refresh the student list
            getAllStudents(name);
            toast.success("Xóa học sinh thành công");
        } catch (error) {
            console.error(error); // Print the error to the console
            toast.error("Có lỗi xảy ra khi xóa học sinh");
        }
    }

    return (
        <>
            <Link to="/create">Thêm mới</Link>
            <input value={name} onChange={(e) => setName(e.target.value)} />


            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Point</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.point}</td>
                            <td>
                                <button onClick={() => handleUpdate(item.id)}>Update</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    )
}

export default StudentListFunc;