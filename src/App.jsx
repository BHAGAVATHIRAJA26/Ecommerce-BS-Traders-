
import Conn from './Conn.jsx'  
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Reg from './Newreg.jsx';
import axios from "axios";

import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider,useGoogleLogin} from "@react-oauth/google";





import { useState} from 'react';




function App() {

   
 
  const navigate=useNavigate();
  const [p1,setp1]=useState(false);
  const [name,setname]=useState("");
  const [password,setpassword]=useState("");
  
  const fi = (e) => setname(e.target.value);
  const se = (e) => setpassword(e.target.value);

  //const MyContext = createContext();

 
    function handleSubmit(e){
        e.preventDefault(); 
    axios
      .post("http://localhost:3500/", { name,password })
      .then((response) => {
        setp1(response.data.message); 
      
    if(response.data.message){
   
      alert("Successfully Login")
      navigate("/product")
    }
    else{
      alert("invalid email or password")
    }});
  }
  function Reg2(){
    navigate("/newreg"); 
  }

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) =>  navigate("/product"),
    onError: () => console.log("Error occurred"),

  });
  return (

    <>
  
  {!p1 && 
<form id="f1" onSubmit={handleSubmit}>
    <div id="c1">

  <div>
    <center><h2>Login</h2></center><br></br>
    <label htmlFor="email1" className="form-label">Email address</label>
    <input type="email"  id="email1"  className="form-control" aria-describedby="emailHelp" onChange={fi}/>
  </div>
  <br></br>
  <div className="mb-3">
    <label htmlFor="p1" className="form-label">Password</label>
    <input type="password" className="form-control" id="p1" onChange={se}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="c1y"/>
    <label className="form-check-label" htmlFor="c1y">Check me out</label>
  </div>
  <div><button type="submit" className="btn btn-primary btn-outline-dark"  style={{cursor:"pointer"}}>Submit</button></div>
<div className='a1'><p>Don't have an account ? <a onClick={Reg2} style={{cursor:"pointer",color:'blue'}}> Register here</a></p></div>
<br></br>

      <div
      className="btn btn-primary btn-outline-dark w-100"
      onClick={() => login()}
    >
      <i className="bi bi-google"></i> Login with Google
      
    </div>

</div>
</form>}
    {p1 && 
            <Conn></Conn>
    }
    
      </>
  );
}

export default App

