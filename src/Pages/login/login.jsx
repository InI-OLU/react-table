import React, { useState } from "react";
import Forminput from "../../Components/input/Forminput";
import axios from "axios";
import {toast} from 'react-toastify'
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [loading ,setLoading] = useState(false)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

const navigate = useNavigate()

 const handleSubmit = async() => {
    setLoading(true)
    await axios.post('https://dummyjson.com/auth/login',{
        username,password
    }).then((res) => {
        Cookies.set('Profile',JSON.stringify(res.data))
        toast.success('Login was successful')
        setLoading(false)
        navigate('/dashboard')
    }).catch(() => {
        setLoading(false)
        toast.error('Login Failed')
    })
 }

  return (
    <div className="Logon">
      <p>User Login</p>
      <div className="logpo">
     <Forminput name="username" placeholder="Username" label="Username" value={username} setValue={setUsername}/>
     <Forminput name="password" placeholder="Enter Pasword" label="Password" value={password} setValue={setPassword}/>
      </div>
      <button onClick={handleSubmit}>
          {loading ? "Logging in.... " : "Login"}
        </button>
    </div>
  );
};

export default Login;
