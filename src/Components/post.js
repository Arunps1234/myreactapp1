import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./Post.css"
import { useNavigate } from 'react-router-dom'
import Loadingspineer from './loadingspiiner'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";


const Post = () => {

    //useStates
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false)
    const [popup, setPOpUp] = useState(false)
    const [btndisabled, setBtnDisabled] = useState(false)

    //error messages
    const [uname, setUname] = useState(false)
    const [uemail, setUemail] = useState(false)
    const [uphone, setUphone] = useState(false)

    const navigate = useNavigate();

    const ref = useRef();

    const values = { name, email, phone }

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        setBtnDisabled(true)

        axios.post("https://mycardapi.onrender.com/informatioss", values).then(responce => {
            setLoading(false);
            setName("");
            setEmail("");
            setPhone("");
            setTimeout(() => {
                alert("Successfully sent")

                navigate("/Home")
            }, 500)


        }).catch(error => {
            console.log(error)
            alert("Something went wrong please try again")
            setLoading(false);
            setBtnDisabled(false)
        })

    }

    const goBack = () => {
        setPOpUp(true)
    }

    const closex = () => {
        setPOpUp(false)
    }

    const nogoback = () => {
        setPOpUp(false)
    }
    const movetoHome = () => {
        navigate("/Home")
    }
    const closeback = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setPOpUp && setPOpUp(false)
        }
    }

    document.addEventListener("click", closeback, true)




    return (
        <>

            <div className='col-sm-6 offset-sm-3'>
                <br />
                <button onClick={goBack} className='btn btn-primary' style={{ width: '100px', float: 'left', marginLeft: '-350px' }}> <BsFillArrowLeftCircleFill/> &nbsp;Back</button>
                <div  >
                    <form className='form-group' onSubmit={onSubmit}>
                        <br />
                        <span className='text-danger' style={{ float: 'right', position: 'relative', top: '5px', right: '8px' }} >*</span>
                        <input type="text" className='form-control' placeholder='Username ' name="name" value={name} onChange={e => { setName(e.target.value) }} required />

                        {uname &&
                            <span className='text-danger'>Please Enter the Username</span>
                        }
                        <br />
                        <span className='text-danger' style={{ float: 'right', position: 'relative', top: '5px', right: '8px' }}>*</span>

                        <input type="email" placeholder='Email' className='form-control' value={email} name="email" onChange={e => { setEmail(e.target.value) }} required />
                        {uemail &&
                            <span className='text-danger'>Please Enter the Email</span>
                        }
                        <br />
                        <span className='text-danger' style={{ float: 'right', position: 'relative', top: '5px', right: '8px' }}>*</span>

                        <input type='text' placeholder='Phonenumber' name="phone" className='form-control' value={phone} onChange={e => setPhone(e.target.value)} required />
                        {uphone &&
                            <span className='text-danger'>Please Enter the Phonenumber</span>
                        }
                        <br />
                        <button type="submit" className='btn btn-success' disabled={btndisabled} id="submitbutton" style={{ width: '100%' }}>{loading ? <Loadingspineer style={{ float: 'right' }}> </Loadingspineer> : "Submit"}</button>


                    </form>
                </div>
                {popup &&
                    <div className='backconfirm' ref={ref}>
                        <div className='x' onClick={closex}>X</div>
                        <div className='backmessage'><h5>Are You Sure  Want to Move Home Page</h5></div>
                        <button className='btn btn-primary' id="no" onClick={nogoback}>No</button>
                        <button className='btn btn-danger' id="yes" onClick={movetoHome}>YES</button>

                    </div>

                }
            </div>

        </>
    )
}

export default Post