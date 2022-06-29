import "./register.css"
import { useState } from "react";
import axios from "axios";
export default function Register() {
const[username,setUsername]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const [error, setError] = useState(false);
const handleSubmit= async (e)=>{
 e.preventDefault();
 try{
  e.preventDefault();
  const res= await axios.post("/auth/register",{
  username,
  email,
  password,
  });
   res.data && window.location.replace("/login");
 }catch(err){
  setError(true);
 }
}
    return (
 <div class="container-register">
    <div class="content">
       <img src="https://media.istockphoto.com/videos/welcome-sign-linear-gradient-leftright-transition-on-black-background-video-id1211888212?s=640x640" alt="" class="cld-responsive" />
            <h1 class="form-title">Register Here</h1>
            <form class="register-form"  onSubmit={handleSubmit}>
               <input type="text"
                placeholder="NAME"
                 class="regsiter-input"
                 onChange={e=>setUsername(e.target.value)} />
                <input type="email"
                 placeholder="EMAIL ADDRESS"
                  class="regsiter-input"
                  onChange={e=>setEmail(e.target.value)}/>
                <input type="password"
                 placeholder="TYPE YOUR PASSWORD" 
                  class="regsiter-input"
                  onChange={e=>setPassword(e.target.value)} /><br/>
                <button type="submit" class="registerBtn">
                  REGISTER
                  </button> 
           </form>
           {error && <span style={{color:"red", marginTop:"15px",fontWeight:"900"}}>Something went wrong!</span>}
 </div>
 </div>

)
}