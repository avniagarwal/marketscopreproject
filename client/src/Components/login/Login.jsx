import React from "react";
import "./Login.css";
import { useState } from "react";
import { axiosInstance } from '../../api';
import {
    toast,
    ToastContainer
  } from 'react-toastify'
import {
    Route,
    Navigate,
    useNavigate
  } from 'react-router-dom'

const Login= () =>{

    const navigate = useNavigate()

    const [username, setUername] = useState("");
    const [password, setPassword] = useState ("");
    const [LoginStatus, setLoginStatus] = useState("")
    const login = () => {
        axiosInstance.post('/login', {
           username: username,
           password: password,
        }).then((response) => {
           
        if (response.data[0]) {setLoginStatus(response.data[0].username)
            localStorage.setItem('username', username)
            if(response.data[0].teamleader === 1){
                localStorage.setItem('tl', "true")
            }
            if(response.data[0].recruiter === 1){
                localStorage.setItem('recruiter', "true")
            }
            if(response.data[0].sourcing === 1){
                localStorage.setItem('sl', "true")
            }
            console.log("Successful")
            console.log(response.data)
            if(response.data[0].teamleader === 1){
                navigate('/dashboardTL')
            }
            else if(response.data[0].recruiter === 1){
                navigate('/dashboardRecruiter')
            }
            else {
                navigate('/dashboardSL')
            }
          } else {
            console.log("Unsuccessful")
            toast('Wrong Credentials')
            }
        });
        };

     return(
        <>
        <div>
        <div className="login" > 
            
            <h1 className="Log">Log In</h1>
            <input type="text" placeholder="Enter your Email" 
                name="email"   
                onChange = { (e) => {
                 setUername (e.target.value);
              }}></input>
            <input type="password" name="password" 
                placeholder="Enter your Password"
                onChange = { (e) => {
                 setPassword (e.target.value);
              }}></input>
            <div className="button" onClick={login}>Login</div>
            {/* <div>or</div>
            <div className="button" onClick={ () => history.push("/register")}>Register</div> */}
        </div>
        {/* <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src={web2} alt="Couldnt display" />
        </div> */}
        </div>
        </>
     );

}

export default Login;