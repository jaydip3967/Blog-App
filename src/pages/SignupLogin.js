import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaUser, FaLock } from "react-icons/fa";
import * as Yup from 'yup'
import axios from 'axios';
import '../styles/signuplogin.css'
import signupImg from '../media/signupImg.svg'
import loginImg from '../media/loginImg.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';




const SignupSchema = Yup.object().shape({
    fullname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Fullname is Required'),
    username: Yup.string()
        .min(3, 'Too Short!')
        .max(20, 'Too Long!')
        .required('UserName is Required'),
    password: Yup.string()
        .min(6, 'Minimum 6 character required')
        .required('Password is Required'),
    // .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{6,99}$/,
    //     'Must contain at least 6 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number'
    //   ),
    cpassword: Yup.string()
        .required('Confirm Password is Required')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
});
const loginSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('UserName is Required'),
    password: Yup.string()
        .min(6, 'Minimum 6 character required')
        .required('Password is Required')
});
const SignupLogin = () => {
    const navigate = useNavigate()
    // const dispatch = useDispatch()

    const [signUpValue, setSignUpValues] = useState({
        fullname: '',
        username: '',
        password: '',
    })
    const [loginvalue, setLoginvalue] = useState({
        username: "",
        password: ""
    })

    const CreatnewUser = async (values) => {
        try {
            const res = await axios.post('http://localhost:3001/signup', values)
            toast.success(res.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            setTimeout(() => {
                navigate('/')
            }, 1200)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('author', res.data.data._id)
            localStorage.setItem('user', res.data.data.username)
            // console.log(res.data.data.username);

        } catch (error) {
            toast.error(error.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            console.log(error);

        }
    }
    const loginUser = async (values) => {
        try {
            const res = await axios.post('http://localhost:3001/login', values)
            toast.success(res.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                // icon: <LoginIcon sx={{ color: lightGreen['A400'] }} />
            });
            setTimeout(() => {
                navigate('/')
            }, 1200)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('author', res.data.data._id)
            localStorage.setItem('user', res.data.data.username)
            console.log(res);

        } catch (error) {
            toast.error(error.response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            console.log(error);
        }
    }

    const signUp = () => {
        const container = document.getElementById("container");
        container.classList.add("sign-up-mode");
    }
    const Login = () => {
        const container = document.getElementById("container");
        container.classList.remove("sign-up-mode");
    }
    return (
        <div>
            <div className='signuplogin' id='container'>
                <div className='forms-container'>
                    <div className='signin-signup'>

                        {/* ----------------------------Login--------------------------------- */}
  
                        <Formik
                            initialValues={loginvalue}
                            validationSchema={loginSchema}

                            onSubmit={async (values) => {
                                await loginUser(values)
                                setLoginvalue({
                                    username: "",
                                    password: ""
                                })
                            }}
                        >
                            <Form className='sign-in-form'>
                                <h2 className='title ml-32'>Sign in</h2>
                                <div className='input-field'>
                                    <FaUser className='icon' />
                                    <Field type="text" name="username" placeholder="username" />
                                </div>
                                <div className='errormsg'><ErrorMessage name='username' /></div>
                                <div className='input-field'>
                                    <FaLock className='icon' />
                                    <Field type="password" name="password" placeholder="password" />
                                </div>
                                <div className='errormsg'><ErrorMessage name='username' /></div>
                                <br />
                                <div className='ml-32'>
                                    <input type="submit" defaultValue='login' className='btn solid' />
                                </div>
                            </Form>
                        </Formik>

                        {/* --------------------------------Sign up-------------------------------- */}

                        <Formik
                            initialValues={signUpValue}
                            validationSchema={SignupSchema}
                            onSubmit={async (values) => {
                                await CreatnewUser(values)
                                setSignUpValues({
                                    fullname: '',
                                    username: '',
                                    password: '',
                                })
                            }}
                        >
                            <Form className='sign-up-form'>
                                <h2 className='title ml-32'>Sign up</h2>
                                <div className='input-field'>
                                    <FaUser className='icon' />
                                    <Field type="text" name="fullname" placeholder="Fullname" />
                                </div>
                                <div className='errormsg'><ErrorMessage name='username' /></div>
                                <div className='input-field'>
                                    <FaUser className='icon' />
                                    <Field type="text" name="username" placeholder="username" />
                                </div>
                                <div className='errormsg'><ErrorMessage name='username' /></div>
                                <div className='input-field'>
                                    <FaLock className='icon' />
                                    <Field type="password" name="password" placeholder="password" />
                                </div>
                                <div className='errormsg'><ErrorMessage name='username' /></div>
                                <div className='input-field'>
                                    <FaLock className='icon' />
                                    <Field type="password" name="cpassword" placeholder="Confirm password" />
                                </div>
                                <div className='errormsg'><ErrorMessage name='username' /></div>
                                <br />
                                <div className='ml-32'>
                                    <input type="submit" defaultValue='sign up' className='btn solid' />
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className='panels-container'>
                    <div className='panel left-panel'>
                        <div className='content'>
                            <h3>New here ?</h3>
                            <p className='text-lg'>
                                Join us today! Create your account to get started.
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={signUp}>
                                Sign up
                            </button>
                        </div>
                        <img src={signupImg} alt="" className='image' />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p className='text-lg'>
                                Unlock the possibilities. Log in to your account.
                            </p>
                            <button className="btn transparent mb-5" id="sign-in-btn" onClick={Login}>
                                Log in
                            </button>
                        </div>
                        <img src={loginImg} className="image" alt="" />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default SignupLogin
