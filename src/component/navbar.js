
import React, { useState } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Tooltip,
    Switch,
} from "@material-tailwind/react";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaHand } from "react-icons/fa6";

export function NavbarDefault() {
    const [openNav, setOpenNav] = React.useState(false);
    const [dark, setDark] = useState(false)
    const [token, settoken] = React.useState(localStorage.getItem('token'));
    const navigate = useNavigate()

    let user = localStorage.getItem('user')
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const logOut = () => {
        settoken(localStorage.removeItem('token'))
        localStorage.removeItem('author')
        localStorage.removeItem('user')
        toast.success("LogOut Successfully", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigate('/')
    }
    const login = () => {
        navigate('/login')
    }
    const myBlog = () => {
        navigate('/myblog')
    }
    const darkTheme = () => {
        document.documentElement.classList.toggle('dark')
        setDark(!dark)
    }

    return (
        <div>
            <Navbar variant="gradient" className="mx-auto  block w-full shadow-md  max-w-full py-4  bg-gradient-to-tr from-sky-500 to-indigo-500 rounded-none rounded-b-xl  top-0 z-50 fixed ">
                <div className="container mx-auto flex items-center justify-between text-white ">
                    <Link to='/'>
                    <Typography
                        as="a"
                        className="block mr-4 cursor-pointer py-1.5 font-medium font-bold text-2xl font-sans"
                    >
                        Blog App
                    </Typography>
                    </Link>
                    {
                        token ? 
                            <Typography className="inline text-base font-normal italic ">
                                <FaHand className="icon inline-flex me-2" />Hello {user} ! </Typography>
                            : null
                    }
                    <div className="hidden lg:block">
                        {/* <Tooltip content={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode '} placement="bottom">
                            <span className="me-2">
                                <Switch onClick={darkTheme} ripple={false}
                                    className="h-full inline-flex w-full absolute duration-300 rounded-full checked:bg-[#0f172a]"
                                    containerProps={{
                                        className: "w-11 h-6 pt-2 ",
                                    }}
                                    circleProps={{
                                        className: "before:hidden left-0.5 border-none mt-2 -translate-y-2/4 "
                                    }}
                                /></span>
                        </Tooltip> */}
                        <Button variant="gradient" size="sm"  className="mx-2" onClick={() => navigate('/createblog')}>
                            {/* <CiCirclePlus className="icon" /> */}
                            <span className="px-2">Create Blog</span>   
                        </Button>
                        {
                            token ?
                                <>
                                    <Button variant="gradient" size="sm" className="me-2" onClick={myBlog}>
                                        <span className="px-2">My Blog</span>
                                    </Button>
                                    <Button variant="gradient" size="sm" className="" onClick={logOut}>
                                        <span className="px-2">LogOut</span>
                                    </Button>
                                </>
                                :
                                <Button variant="gradient" className='' size="sm"  onClick={login}>
                                    <span className="px-2">LogIn</span>
                                </Button>
                        }
                    </div>
                    <IconButton
                        variant="text"
                        className="overflow-hidden basis-full ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <div className="container mx-auto">
                        <Button variant="gradient" size="sm" fullWidth className="mb-2 mt-6 from-gray-900 to-gray-800" onClick={()=> navigate('/createblog')}>
                            {/* <CiCirclePlus /> */}
                            <span className="ps-2">Create Blog</span>
                        </Button>
                        {
                            token ?
                                <>
                                    <Button variant="gradient" fullWidth size="sm" className=" mb-2 me-2" onClick={myBlog}>
                                        <span>My Blog</span>
                                    </Button>
                                    <Button variant="gradient" fullWidth size="sm" className="mb-2" onClick={logOut}>
                                        <span>LogOut</span>
                                    </Button>
                                </>
                                :
                                <Button variant="gradient"  fullWidth size="sm" className="mb-2  " onClick={login}>
                                    <span>LogIn</span>
                                </Button>
                        }
                    </div>
                </Collapse>
            </Navbar>
            <ToastContainer />
        </div>
    );
}