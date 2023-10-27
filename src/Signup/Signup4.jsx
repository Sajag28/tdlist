import './Signup4.css'
import {React,useState} from 'react'
import {useHistory} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
const Signup4=()=>{
  const [email,setEmail]=useState();
  const [pass1,setPass1]=useState();
  const [pass2,setPass2]=useState();
  const history=useHistory();
  const auth = getAuth();
  function chngEmail(event){
    event.preventDefault();
    setEmail(event.target.value);
  }
  function chngPass1(event){
    event.preventDefault();
    setPass1(event.target.value);
  }
  function chngPass2(event){
    event.preventDefault();
    setPass2(event.target.value);
  }
  function submit(){
    if(pass1!=pass2){
      alert("Passwords do not match");
    }
    else{
      const email = document.querySelector('.email').value;
      const password = document.querySelector('.pass1').value;

      auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          alert("Signup Successful");
          history.push("/MainLogin");
        })
        .catch((error) => {
          alert('Oh no! Signup failed, Error 404');
        });

    }
  }

  return(
    <div className="container">
      <div className="d-flex justify-content-start">
        <div><h1>Create a free account at this spot</h1></div>
        <div></div>
        <div className="d-flex flex-column mb-3">
          <input type="text" className="email" onChange={chngEmail} placeholder="Please enter your email here" value= 
          {email}/>
          <div></div>
          <input type="password" className="pass1" onChange={chngPass1} placeholder="Please enter your password" value= 
          {pass1}/>
          <div></div>
          <input type="password" className="pass2" onChange={chngPass2} placeholder="Please confirm your password here" 
          value={pass2}/>
          <div></div>
          <button className="button3" onClick={submit}>Launch my Free Account</button>
        </div>
        <div>
         <img className="i1" src="" alt="signupimage"/>
        </div>
      </div>
    </div>
  )
}
export default Signup4;