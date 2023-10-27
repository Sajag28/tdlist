import './login.css'
import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login=()=>{
  return(
    <div className="main">
       <div class="d-flex justify-content-center">
         <div class="d-flex flex-column mb-3">
           <div class="p-2"><input className="email" type="text" placeholder="testid@gmail.com"/> 
           </div>
           <div></div>
           <div class="p-2"><input className="pass1" type="password" placeholder="Enter the 
            password" required/></div>
           <div></div>
           <div class="p-2"><input className="pass2" type="password" placeholder="Confirm password" 
          required/></div>
         </div>
         <div></div>
         <div class="d-flex justify-content-evenly">
           <button className="button1">Sign In</button>
           <div></div>
           <button className="button2">Not have Account</button>
         </div>
       </div>
    </div>
  )
}

export default Login;