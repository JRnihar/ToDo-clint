import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { BiAddToQueue } from 'react-icons/bi';
import Swal from 'sweetalert2';

const TodoFrom = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        const TaskData = {
            title: values.title,
            description: values.description,
        };
        const url = `https://to-do-app-server2.onrender.com/list`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(TaskData)
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire(
                    'Good job!',
                    'You Add your list!',
                    'success'
                )
              
                navigate('/todoData')
            })
    };
    const TaskDetailsSchema = object().shape({
        title: string()
            .min(6, "Minimum 6 characters required")
            .required("Title is required"),
        description: string()
            .min(6, "Minimum 6 characters required")
            .required("Description  is required"),

    });
    return (
        <div className=' d-flex align-items-center justify-content-center flex-column h-100 mt-5'>
            <div className='form p-5 '>
                <div>

                    <div className="title"><span>Add Your Task Please !!</span></div>
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
                                    className={`form-control  ${touched.title && errors.title
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
                                {loading ? "" : "Add"}
                                <BiAddToQueue className='ms-3 fs-4' />
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default TodoFrom;