import './Login2.css'
import {React, useState} from 'react'
import Signup from '../Signup/Signup.jsx'
import MainPage from '../MainPage/MainPage.jsx'
import {useHistory} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const Login2=()=>{
  console.log('Login component loaded');
  const history=useHistory()
  const [email,setEmail]=useState('')
  const [password1,setPass1]=useState('')
  const auth = getAuth();
  function signIn(){
    
    history.push('/Signup')
  }
  function emailChange(event){
    const newemail=event.target.value
    setEmail(newemail)
  }
  function passChange1(event){
    const password1=event.target.value
    setPass1(password1)
  }

  function submit(){
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.pass1').value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/MainPage');
      })
      .catch((error) => {
        console.log("Authentication Failed");
        alert('Oops! Authentication Failed');
      });
  }
  return(
    <div className="main">
       <div className="d-flex justify-content-center">
         <div className="d-flex flex-column mb-3">
           <div className="p-2"><input className="email" value={email} onChange={emailChange}type="text" placeholder="testid@gmail.com"/> 
           </div>
           <div></div>
           <div className="p-2"><input className="pass1" value={password1} onChange={passChange1} type="password" placeholder="Enter the 
            password" required/></div>

         </div>
         <div></div>
         <div className="d-flex justify-content-evenly">
           <button className="button1" onClick={submit}>Sign In</button>
           <div></div>
           <button className="button2" onClick={signIn}> Do Not have Account </button>
         </div>
       </div>
    </div>
  )
}

export default Login2;