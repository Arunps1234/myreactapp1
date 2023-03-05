import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const { empid } = useParams();

    const [name, setname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const navigate=useNavigate()

    const data = { name, email, phone }
    useEffect(() => {
        axios.get("https://mycardapi.onrender.com/informatioss/" + empid).then(
            res => {
                setname(res.data.name);
                setEmail(res.data.email);
                setPhone(res.data.phone)
            }
        )
    },[])

    const editdata = (e) => {
        e.preventDefault();
        axios.put("https://mycardapi.onrender.com/informatioss/" + empid, data).then(
            responce => {
               setname(responce.data.name);
                setEmail(responce.data.email);
                setPhone(responce.data.phone);
                alert("edited successfully")
                navigate("/Home")
            }
        ).catch(err => {
            alert("Something went wrong")
        },[])
    }



    return (
        <>
            <Link to="/Home" className="btn btn-success" style={{ width: '100px', position: 'absolute', top: '20px', left: '20px' }}>Back</Link>
            <form onSubmit={editdata}>
                <br /><br /> <br />


                <div className="col-sm-6 offset-sm-3">

                    <input type='text' placeholder='Username' className='form-control' value={name} onChange={e=>setname(e.target.value)}/>
                    <br />
                    <input type='text' placeholder='Email' className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
                    <br />
                    <input type="text" placeholder='Phonenumber' className='form-control' value={phone} onChange={e => setPhone(e.target.value)} />
                    <br />
                    <button type='submit' className='btn btn-success' style={{ width: '100%' }} >Edit</button>

                </div>
            </form>


        </>
    )
}


export default Edit