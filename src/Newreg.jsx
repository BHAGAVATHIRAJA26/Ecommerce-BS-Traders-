import './App.css'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Abc(){
    const navigate=useNavigate();
    const [z1,setz1]=useState(false);
    const [t1,sett1]=useState();
    const [b1,setb1]=useState();
    const [name,setname]=useState();
    const [email,setemail]=useState();

    function f1(event){
      setname(event.target.value);
    }
    function f2(event){
      setemail(event.target.value);
    }
    function al(e){
        if(z1==true){
           alert("check a password,email")
        }
        e.preventDefault();
         axios
        .post("http://localhost:3500/newreg", {name,email,t1})
        .then((response) => {
          if(response.data.message==true && !z1){
              alert("Regisration is successfully completed")
              navigate("/"); 
          }
          else{
            alert("your email is already registered")
          }
        });
    }
    function pass(event){
      const d=event.target.value;
      sett1(event.target.value);
    }
    function ck(event){
      const v=event.target.value
      setb1(event.target.value);
      if(v!==t1){
        setz1(true);}
      else{
         setz1(false);
      }
  
    }
    return (<>
      <form id="f1" onSubmit={al}>
    <div id="c2">
  <div>
    <center><h2>Create New Account</h2></center><br></br>
    <label for="email1" className="form-label">User Name</label>
    <input type="text"  id="email1"  className="form-control" aria-describedby="emailHelp" onChange={f1}/>
    <label for="email1" className="form-label">Email address</label>
    <input type="email"  id="email1"  className="form-control" aria-describedby="emailHelp" onChange={f2}/>
  </div>
  <br></br>
  <div className="mb-3">
    <label for="p1" className="form-label" >Password</label>
    <input type="text" className="form-control" id="p1"  value={t1} onChange={pass} />
  </div>
  <div className="mb-3">
    <label for="p1" className="form-label">Re type-Password</label>
    <input type="text" className="form-control" id="p1"  value={b1} onChange={ck}/>
  </div>
  {z1 && <p style={{color:"red"}}>Password is InCorrect</p>}
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="c1y"/>
    <label className="form-check-label" for="c1y"  >Access a terms and condition</label>
  </div>
  <button type="submit" className="btn btn-primary btn-outline-dark" >Submit</button>
</div>
</form>
    </>);
}
export default Abc