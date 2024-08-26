import axios from "axios";

const URL_STUDENT = "http://localhost:8080/students"

export const getAllStudents = async (name) => {
    try {
        let res = await axios.get(URL_STUDENT+"?name_like="+name);
        return res.data;
    } catch (e) {
        return []
    }
}

export const saveStudent = async (student) => {
    try {
        await  axios.post(URL_STUDENT, student)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}
export const updateStudent = async (id, student) => {
    try {
        const response = await axios.put(`${URL_STUDENT}/${id}`, student);
        return response.data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export const deleteStudent = async (id) => {
    try {
        const response = await axios.delete(`${URL_STUDENT}/${id}`);
        return response.data;
    } catch (e) {
        console.log(e);
        return null;
    }
}
