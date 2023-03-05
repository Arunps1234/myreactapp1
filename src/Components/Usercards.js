import React from 'react'
import "./Usercards.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Usercards = ({ user }) => {
    console.log(user)

    const navigate=useNavigate();
    const removes = (id, name) => {
        if (window.confirm(`DO YOU WANT TO REMOVE ${ name}?`)) {
            axios.delete("https://mycardapi.onrender.com/informatioss/" + id).then(
                res => {
                 alert("Deleted successfully")
                   window.location.reload();
                }).catch(error => {
                alert("Something went wrong")
            })
        }
    }

    const edits=(id)=>{
navigate("/edit/"+id)
    }


    const userview=(id)=>{
        navigate("/view/"+id)
    }
    if(user.length==0){
        return(
            <h5>No Data Found</h5>
        )
    }

    return (
        <>
            <div className='card'>
                <div className='card-head'>
                    <div className='card-title'>
                    <p  style={{paddingLeft:'20px'}}>  <h5> Name : </h5> {user.name}</p>

                    </div>
                    
                </div>
                
                <div className='card-body' key={user.id}>
                    <p> <h5>Phone : </h5>{user.phone}</p>
                    <br />
                    <p> <h5>Email: </h5> {user.email}</p>

                    <div  >
                        <button className='btn btn-success' style={{ width: '80px' }}  onClick={()=>{userview(user.id )}}>View</button> &nbsp;
                        <button className='btn btn-warning' style={{ width: '80px' }} onClick={()=>{edits(user.id)}}>Edit</button>  &nbsp;
                        <button className='btn btn-danger' style={{ width: '80px' }} onClick={() => { removes(user.id, user.name) }}>Delete</button>

                    </div>


                </div>

            </div>
            <div className='pop1'>

            </div>
  </>

    )

}






export default Usercards