// src/component/student/StudentUpdate.js
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import * as studentService from "../../service/StudentService";

function StudentUpdate() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        name: "",
        address: "",
        point: 0
    });

    useEffect(() => {
        const fetchStudent = async () => {
            const fetchedStudent = await studentService.getAllStudents(id);
            setStudent(fetchedStudent);
        };
        fetchStudent();
    }, [id]);

    const objectValid = {
        name: Yup.string().required("Tên không được để trống")
            .min(3, "Tên không được ngắn hơn 3 ký tự")
    }

    const updateStudent = async (value) => {
        value.point = +value.point;
        let isSuccess = await studentService.updateStudent(id, value);
        if (isSuccess) {
            toast.success("Cập nhật thành công");
            navigate("/student");
        } else {
            toast.error("Cập nhật thất bại.");
        }
    }

    return (
        <>
            <Formik initialValues={student} onSubmit={updateStudent} validationSchema={Yup.object(objectValid)}>
                <Form>
                    Name: <Field name="name"/>
                    <ErrorMessage name="name" component="p"></ErrorMessage>
                    Address: <Field name="address"/>
                    Point: <Field name="point"/>
                    <button type="submit">Cập nhật</button>
                </Form>
            </Formik>
        </>
    )
}

export default StudentUpdate;