import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Maybenavbar({ children }) {
    const location = useLocation()
    const [showNavbar, setShowNavbar] = useState(false)

    useEffect(() => {
        if (location.pathname === '/login'){
            setShowNavbar(false)
        } else{
            setShowNavbar(true)
        }
    }, [location])
    return (
        <div>{showNavbar && children} </div>
    )
}

export default Maybenavbar