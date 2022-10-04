import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { GrUpdate } from 'react-icons/gr';
import useData from '../../Hooks/useData';
const EditTask = () => {
    const [lists, setList] = useData()
    // console.log(lists);
    const navigate = useNavigate()
    const { id } = useParams()
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (values) => {
        const TaskData = {
            title: values.title,
            description: values.description,
        };
        const url = `https://to-do-app-server2.onrender.com/list/${id}`
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(TaskData),
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(
                    'Good job!',
                    'You update your list!',
                    'success'
                )
                // console.log(data);
                navigate('/todoData')
            })
    }
    const TaskDetailsSchema = object().shape({
        title: string()
            .min(6, "Minimum 6 characters required")
            .required("Title is required"),
        description: string()
            .min(6, "Minimum 6 characters required")
            .required("Description  is required"),

    });
    return (
        <div>
            <div className=' d-flex align-items-center justify-content-center flex-column h-100 mt-5'>
                <div className='form p-5 '>
                    <div>

                        <div className="title"><span>Update Your Task Please !!</span></div>
                    </div>
                    <Formik
                        initialValues={{ title: "", description: "" }}
                        validationSchema={TaskDetailsSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setSubmitting(false);
                            handleSubmit(values);
                            resetForm({ values: "" })
                        }}
                    >
                        {({ touched, errors, isSubmitting }) => (
                            <Form>

                                <div className="form-group mt-5">
                                    <Field
                                        
                                        type="text"
                                        id='name'
                                        name="title"
                                        placeholder="Task Title"
                                        className={`form-control ${touched.title && errors.title
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="title"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <Field
                                        type="text"
                                        id='email'
                                        name="description"
                                        placeholder="Task Description"
                                        className={`form-control ${touched.description && errors.description
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="description"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <button
                                    id='form-submit-btn'
                                    type="submit"
                                    className='mt-3 btn btn-success'
                                >
                                    {loading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    {loading ? "" : "Update"}
                                    <GrUpdate className='ms-3 fs-5 text-white' />
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            {/* <form className='px-12' onSubmit={handleUpdate} >
                
                <input type="text" placeholder=" update Name" name='name' required class="input input-bordered mt-2 w-full max-w-xs" />
                <br />
                <input type="text" placeholder="Update Task" name='task' required class="input input-bordered mt-2 w-full max-w-xs" />
                <br />
                <input type="submit" value='Update' class="input input-bordered w-full mt-2 max-w-xs text-center bg-success text-lg" />
            </form> */}
        </div>
    );
};

export default EditTask;