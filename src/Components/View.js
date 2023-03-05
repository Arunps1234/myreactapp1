import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./View.css"
import { Link } from 'react-router-dom'

const View = ()=>{
const[mydata, setData]=useState([])
    useEffect(()=>{
axios.get("https://mycardapi.onrender.com/informatioss/"+empid).then(
    res=>{
setData(res.data)
    }
).catch(
    error=>{
        console.log(error)
    }
)
    },[])
    console.log(mydata)

    const {empid}=useParams();
    return(
        <>
        <Link to="/Home" className="btn btn-success" style={{position:'absolute', left:'50px', top:'50px'}}>Back</Link>
        <div className='card' style={{width:'auto', height:'auto', padding:'10px',borderRadius:'10px', position:'absolute', left:'35%', top:'30%'}}>
            
            <div className='card-title'>
                <h3> &nbsp; Name:{mydata.name}</h3>
            </div>
            <hr/>
<div className='card-body'>
    
    <h3>Email: {mydata.email}</h3>
    <hr/>

    <h3>Phone: {mydata.phone}</h3>
</div>
<hr/>

        </div>
        </>
    )
}

export default View