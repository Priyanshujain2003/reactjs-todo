import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import axios from "axios";
import Mycontext from "../context";


const Login = () => {

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [error, seterrors] = useState(false);
  // define useNavigate Function
  const navigate = useNavigate();

// use context 
const context = useContext(Mycontext)
console.log(context);

  const onSubmit = async (event) => {
    event.preventDefault();

    // phle wali error show na ho
    seterrors("");

// frontend to backend 
// fetch data login to database
    const obj = {
      email: email,
      password: password
    }

    // const res = await axios.post("http://localhost:8800/login", obj);
    // using alert print and redirect
    // res.data.success ? navigate("/list"): alert(res.data.message); 
    // using useState error print
    // res.data.success ? navigate("/list") : seterrors(res.data.message)
  
    const res = await axios.post("http://localhost:8800/login", obj)
   
    if(res.data.success)
    {
      alert("Login Successfull")
      localStorage.setItem("token" , res.data.token);
      navigate("/list")
    }
    else
    {
      alert(res.data.message);
    }
  }

  return (
    <div className="header-1" style={{backgroundColor : context.backgroundColor}} >
      <form className="form-1" onSubmit={onSubmit}>
        <h1>Login Page</h1>

        {/* ERROR SHOW */}
        {/* {error ? (

          <div>
            <p style={{ color: "red" }} >{error}</p>
          </div>
        ) : null} */}


        <br></br><br></br>
        <label>Enter Your Email id</label><br></br>
        <input type="email" placeholder="Enter Your Email"
          required
          value={email}
          onChange={(event) => setemail(event.target.value)}></input>

        <br></br><br></br>
        <label>Enter Your Password</label><br></br>
        <input type="password" placeholder="Enter Your Password"
          required
          value={password}
          onChange={(event) => setpassword(event.target.value)}></input>

        <br></br><br></br>
        <input className="btn" type="submit" value="submit"></input>
        <br></br>

        {/* Page Redirect */}
        <p>
          Don't have an Account <button onClick={() => navigate("/Signup")}>Signup</button>
        </p>

      </form>
    </div>
  )
}


export default Login