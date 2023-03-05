import React, { useEffect, useState, useRef } from 'react'
import { BsDisplay, BsPersonCircle } from "react-icons/bs";
import { BiUpArrow } from "react-icons/bi";
import LogoutConfirm from './LogoutConfirmationpopup';
import Greeting from './Greeting';
import "./Homepage.css"
import Cards from './Cards';
import Post from './post';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Usercards from './Usercards';


const Homepage = () => {




    const ref = useRef()
    const Closepopup = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setUserAvatartPopUp && setUserAvatartPopUp(false)
        }
    }

    document.addEventListener("click", Closepopup, true)


    const [username, setUserName] = useState('')
    const [useravtarpopup, setUserAvatartPopUp] = useState(false)
    const [logoutconfirm, setLogOutConfirm] = useState(false)

    //user datas

    const [users, setUsers] = useState([])
    console.log(users)

    const [getvalue, setGetvalue] = useState('')
    useEffect(() => {
        var details = localStorage.getItem("Userdetails")
        setUserName(details)
    })

    const Openpopup = () => {
        setUserAvatartPopUp(!useravtarpopup)
    }

    const confirmpop = () => {
        setUserAvatartPopUp(false)
        setLogOutConfirm(true)
    }

    useEffect(() => {
        axios.get("https://mycardapi.onrender.com/informatioss").then(
            responce => {
                setUsers(responce.data)
            }
        ).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <>
        <div id="home">
            <div>
                <div className='topnav'>
                    <h1 className='username'>Welcome {username} ,<Greeting /> </h1>


                    <BsPersonCircle className='useravatar' onClick={Openpopup}></BsPersonCircle>

                    {useravtarpopup &&
                        <div className='useravatarpopup' ref={ref}>
                            <BiUpArrow className='arrow' />
                            <strong className='name'>{username}</strong>
                            <hr />
                            <strong className='logout' onClick={confirmpop}>Logout</strong>
                        </div>
                    }





                </div>
                {logoutconfirm &&
                    <LogoutConfirm setLogOutConfirm={setLogOutConfirm} />
                }
            </div>
            <div>
            </div>
            <div>
                {
                    useravtarpopup ? " " :

                        <Link to="/create" className='btn btn-success' style={{ width: '200px', float: 'right',position:'relative' ,top:'10px', left:'05px' }} >Create</Link>
                }</div>

            {users.map(user => (
                <div className='mycards' >
                    
                    <Usercards user={user} key={user.id} />
                </div>
            ))}
</div>
        </>
    )
}

export default Homepage