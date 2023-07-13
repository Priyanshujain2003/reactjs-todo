import { useState } from "react";
import { useReducer } from "react";
import "../App.css";
import { useNavigate } from "react-router";
import axios from "axios";

//use state use me lo ya reducer baat ek hi hai pr reducer short method hota hai
// useReducer Hook
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_NAME":
//       return { ...state, name: action.payload };
//     case "SET_EMAIL":
//       return { ...state, email: action.payload };
//     case "SET_PASSWORD":
//       return { ...state, password: action.payload };
//     case "SET_PHONE_NUMBER":
//       return { ...state, phone_number: action.payload };
//     case "SET_ADDRESS":
//       return { ...state, address: action.payload };
//     default:
//       return state;
//   }
// }


const Signup = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [phone_number, setphone_number] = useState();
  const [address, setaddress] = useState();
  const navigate = useNavigate();

  // const [state, dispatch] = useReducer(reducer, {})

  const onSubmit = async (event) => {
    event.preventDefault();

    // using object store
    //use for useState Method
    const data = {
      name: name,
      email: email,
      password: password,
      phone_number: phone_number,
      address: address
    }
    console.log(data);




    // connect frontend to backend
    // use for use state
    const res = await axios.post("http://localhost:8800/signup", data);
    //use for useReducer
    // const res = await axios.post("http://localhost:8800/signup", state);

    // details store hogi database me
    // console.log(res)
    // direct loin page redirect
    res.data.success ? navigate("/login") : alert(res.data.message);

    // data set to localstorage
    // localStorage.setItem("userInfo", JSON.stringify(data));
  }

  return (
    <div className="header">
      <div className="priyanshu">
        <form onSubmit={onSubmit}>
          <h1>Sign Up</h1>
          {/* using through use state */}
          <label>Enter Your First Name</label><br></br>
          <input type="text" placeholder="Enter Your First Name"
            // using autofill
            value={name}
            required
            onChange={(event) => setname(event.target.value)}></input>

          {/* use through useReduer */}
          {/* <label>Enter Your First Name</label><br></br>
          <input type="text" placeholder="Enter Your First Name"
            // using autofill
            value={state?.name}
            required
            onChange={(event) => dispatch({ type: "SET_NAME", payload: event.target.value })}></input> */}



          <br></br><br></br>
          <label>Enter Your Email id</label><br></br>
          <input type="email" placeholder="Enter Your Email"
            value={email}
            required
            onChange={(event) => setemail(event.target.value)}></input>

          {/* use through useReduer */}
          {/* <label>Enter Your Email Id</label><br></br>
          <input type="text" placeholder="Enter Your Email"
            // using autofill
            value={state?.email}
            required
            onChange={(event) => dispatch({ type: "SET_EMAIL", payload: event.target.value })}></input> */}



          <br></br><br></br>
          <label>Enter Your Password</label><br></br>
          <input type="password" placeholder="Enter Your Password"
            value={password}
            required
            onChange={(event) => setpassword(event.target.value)}></input>


          {/* use through useReduer */}
          {/* <label>Enter Your Password</label><br></br>
          <input type="text" placeholder="Enter Your Password"
            // using autofill
            value={state?.password}
            required
            onChange={(event) => dispatch({ type: "SET_PASSWORD", payload: event.target.value })}></input> */}


          <br></br><br></br>
          <label>Enter Your Phone no</label><br></br>
          <input type="number" placeholder="Enter Your phone number"
            value={phone_number}
            required
            onChange={(event) => setphone_number(event.target.value)}></input>

          {/* use through useReduer */}
          {/* <label>Enter Your Phone no</label><br></br>
          <input type="number" placeholder="Enter Your Phone no"
            // using autofill
            value={state?.phone_number}
            required
            onChange={(event) => dispatch({ type: "SET_PHONE_NUMBER", payload: event.target.value })}></input> */}



          <br></br><br></br>
          <label>Enter Your Address </label><br></br>
          <input type="text" placeholder="Enter Your Address"
            value={address}
            required
            onChange={(event) => setaddress(event.target.value)}></input>


          {/* use through useReduer */}
          {/* <label>Enter Your Address</label><br></br>
          <input type="text" placeholder="Enter Your Address"
            // using autofill
            value={state?.address}
            required
            onChange={(event) => dispatch({ type: "SET_ADDRESS", payload: event.target.value })}></input> */}



          <br></br><br></br>
          <input className="btn" type="submit" value="submit"></input>

          {/* Page Redirect */}
          <p>
            Already have an Account <button onClick={() => navigate("/login")}>Login</button>
          </p>
        </form>
      </div>
    </div>
  )
}


export default Signup