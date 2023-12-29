import React from 'react'
import {
    Button
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const LoginFirst = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div style={{ height: "417px" }}>
                <div style={{paddingTop: "150px"}}>
                    <div >
                        <h2 className='text-center text-3xl font-semibold mb-8  dark:text-white'>For Create Blog, You need to Login First</h2>
                    </div>
                    <div className='text-center'>
                        <Button className='shadow-gray-900/10 bg-gray-900' onClick={() => navigate('/login')}>Login Here</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginFirst