import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
 import {Context} from "../../context/Context";
 import axios from "axios";
 import "./login.css";


export default function Login() {
   const userRef=useRef();
 const passwordRef=useRef();
 const{ dispatch,isFetching }=useContext(Context);
  const handleSubmit = async (e)=>{
    e.preventDefault();
     dispatch({type:"LOGIN_START"});
    try{
const res = await axios.post("/auth/login",{
  username:userRef.current.value,
  password:passwordRef.current.value,
});
 dispatch({type:"LOGIN_SUCCESS",payload:res.data});
     }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
   }
   };
  return (
    <section className="login-body">
    <div class="container">
		<div class="login-container">
			<div class="login-container-img">
			</div>
			<div class="login-container-content">
				<form action="" class="login-form" onSubmit={handleSubmit}>
        <h1 id="heading">Login to Ucritic</h1>
					<p class="field">
						<label>Username</label>
						<input type="text" 
            name="username" placeholder="username"
            ref={userRef}/>
					</p>
					<p class="field">
						<label>Password</label>
						<input type="password"
             name="password" placeholder="password"
             ref={passwordRef}/>
					</p>
					<button type="submit" class="submitBtn" disabled={isFetching}>Login</button>
					<div class="parting-line"><span>or</span></div>
					<div class="google-background">
						<div class="google-icon"></div>
					  <button>Sign in with Google</button>
					</div>
          <div className="registration">
            <span> New to Ucritic? </span>
            <button>
            <Link className="link" to="/register">Register here
            </Link>
            </button>
          </div>
				</form>
			</div>
		</div>
	</div>
</section>
  );
}