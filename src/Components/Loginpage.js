import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Fetch from './fetch'
import Greeting from './Greeting'
import Lowscreen from './Lowscreenpopup'
import Screen from './Screensizepopup'
import Loadingspineer from './loadingspiiner'
import { FaEye,FaEyeSlash } from "react-icons/fa";



import "./Loginpage.css"
const Loginpage = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(true)

    //Loading spinner

    const[spinner, setSpinner]=useState(false)

    //Show password and hide password

    const[showpass, setShowpassword]=useState(true)

    const[passwor, setPassw]=useState("password")

    const changeIcon1=()=>{
        setShowpassword(!showpass)
        if (passwor==="password"){
            setPassw("text")
        }
        else{
            setPassw("password")
        }
    }

    const changeIcon2=()=>{
        setShowpassword(!showpass)
        if (passwor==="text"){
            setPassw("password")
        }
        else{
            setPassw("text")
        }
    }


    

    const navigate = useNavigate();

    const data = [ name, password ]

    const Submitform = (e) => {
        e.preventDefault();
        setSpinner(true);
        localStorage.setItem("Userdetails", name);
        setTimeout(()=>{
            setSpinner(false)
        },2000)
        setName("");
        setPassword("");
        setTimeout( ()=>{

        navigate("/Home")
        alert("Loged In Successfully")},3000 )

    }

    useEffect(() => {
        if (name.length >= 6 && password.length >= 6) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    })

    return (<>
        <div className='card' style={{width:"50%", height:'auto', position:'absolute', top:'35%', left:'25%'}} id="forms">
            <div className='card-body'>
                <form className='form-group' onSubmit={Submitform}>
                    <input type='text' name="username" placeholder='Username' className='form-control' value={name} onChange={e => setName(e.target.value)} />
                    <br />
                    <div>
                    <input type={passwor} name='password' placeholder='Password' className='form-control' value={password} onChange={e => setPassword(e.target.value)} />
                  {showpass ? <FaEyeSlash onClick={changeIcon1} style={{position:'relative', top:"-30px",right:'10px', float:'right'}}/> : <FaEye onClick={changeIcon2} style={{position:'relative', top:"-30px",right:'10px', float:'right'}}/>}
                   </div>
                    <br />
                    <button type='submit' className='btn btn-success' disabled={disabled} style={{width:'100%'}}> { spinner ? <Loadingspineer/> : "Submit"}</button>
                </form>
                
            </div>
            
        </div>
        <Screen />
                    </>

    )
}

export default Loginpage