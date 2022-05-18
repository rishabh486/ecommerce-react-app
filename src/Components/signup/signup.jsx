import React from 'react'
import signup from "./signup.css"
import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";



function Signup() {
    const navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [checked,setChecked]=useState(false)
    const inputChange=(e)=>{
        setEmail(e.target.value)

    }
    const passwordChange=(e)=>{
        setPassword(e.target.value)
    }
    const checkChange=(e)=>{
        setChecked(e.target.value)
       console.log(e)
    }
    
    console.log(password)
    // console.log(checked)
    const submitChange= async(e)=>{
        e.preventDefault()
        try{
            const response=await axios.post(
                '/api/auth/signup',
                JSON.stringify({
                   
                    email,
                    password

                })
                
            )
            if (response.status == 201) {
                localStorage.setItem("ecom-token", response.data.encodedToken);
                window.location.href = "/"
                // navigate("/")
              }
            console.log(response)
        }
        catch(err){
            console.log(err.response)
        }
    }

  return (
    <div> <div class="wrapper-signup">
    <div class='Login'>
        <h2>Signup</h2>
        <form class='Login-form'>
            <div class='login-form-input'>
                <label for="username">Username</label>
                <input value={email} onChange={inputChange} id='username' type="text" class='form-inp' placeholder='username@gmail.com' />
            </div>
            <div class='login-form-input'>
                <label for="password">Password</label>
                <input  value={password} onChange={passwordChange}id='password' type="text" class='form-inp' placeholder='********' />
            </div>
            {/* <div class='user-settings'>
                <div class='remember-box'>
                    <input onChange={checkChange}value={checked}type="checkbox" id='remember-checkbox' />
                    <label for="remember-checkbox">I accept all terms & conditions</label>
                </div>

            </div> */}
            <button onClick={submitChange} type='submit' class='button-container-button primary-button'>Create New Account</button>
        </form>
    </div>
</div>
</div>
  )
}

export default Signup