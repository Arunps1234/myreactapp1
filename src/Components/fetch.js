import React , {useState, useEffect} from 'react'
import axios from 'axios'

const baseURL = "https://test-api-n1bp.onrender.com/employess/1"

function Fetch(){
    const[post, setPost]=useState('')


    useEffect(()=>{
        axios.get(baseURL) .then(
            responce =>{
                setPost(responce.data);
            } );
    }, [])
    return(
<h1></h1>

    )
}

export default Fetch