import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const [formdata, setfromdata] = useState({
        username:'',
        password:''
    })
    const submitHandle =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/api/login',{
                username:formdata.username,
                password:formdata.password
        }).then((res)=>{
           console.log(res)
           if(res.data?.message == "success"){
            navigate('/dashboard')
           }
          }).catch((err)=> {
            console.log(err?.response?.data?.message)
          })
    }

  return (
    <div>
        <h3>Login Page</h3>
        <form onSubmit={submitHandle}>
           <div>
           <label>Username</label>
            <input type='email' placeholder='Enter your email' name="username" onChange={(e)=> setfromdata({...formdata, [e.target.name]:e.target.value})} value={formdata.username}/>
           </div>
           <div>
           <label>Username</label>
            <input type='text' placeholder='Enter your email' name="password" onChange={(e)=> setfromdata({...formdata, [e.target.name]:e.target.value})} value={formdata.password}/>
           </div>
           <div>
            <button type='submit'>login</button>
           </div>
        </form>
    </div>
  )
}

export default Login