import React, { useState, useRef, useEffect } from 'react'
import "./Logourconfirm.css"
import { useNavigate } from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs";


const LogoutConfirm = ({ setLogOutConfirm }) => {
    const navigate = useNavigate()

    const [name, setName]=useState('')

    const ref = useRef()

    const Logouts = () => {
        localStorage.clear();
        navigate("/");
    }

    useEffect(() => {
        var username = localStorage.getItem("Userdetails")
        setName(username)
    })
    const Closepopup = () => {
        setLogOutConfirm(false)
    }
    const closeconfirm = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setLogOutConfirm && setLogOutConfirm(false)

        }
    }


    document.addEventListener("click", closeconfirm, true)

    return (
        <>

            <div className='confirmpopup' ref={ref}>
                <h4 className='areyou'>Are you sure you want to log out  {name} ?</h4>
                <span className='X' onClick={() => setLogOutConfirm(false)}>X</span>
                <div className='userava'>
                    <BsFillPersonFill/>
                </div>
                <button style={{ width: "80px", position: 'relative', top: '180px', left: '20px' }} className='btn btn-primary' onClick={Closepopup} >No</button>
                <button className='btn btn-danger' style={{ width: '80px', position: 'relative', top: '175px', float: 'right', right: '20px' }} onClick={Logouts}>Yes</button>
            </div>

        </>
    )
}
export default LogoutConfirm