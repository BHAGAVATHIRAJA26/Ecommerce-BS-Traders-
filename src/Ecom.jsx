import myImage from './myimage.jpg';
import './App.css'
import { createContext } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect,useState } from 'react'
import Det from './Detail.jsx'  

import { useNavigate ,Link} from 'react-router-dom';

import { compoundArray } from "./arr"

function Ecom(props){
   const navigate=useNavigate();
    function inp(){
        navigate("/detail/"+props.id); 
    }
    
    function c1(){
        compoundArray.push(props.id);
    navigate("/Card")
        
    }
    return(
        <>
     
        
        
        
                 <b id='b2'><div id='b9' onClick={inp}><img src={props.urimg} alt="logo" height="280px" width="370px"></img></div><h6>{props.detail}</h6>
                                              <h6>Rating: ⭐⭐⭐⭐</h6><b>₹{props.cos-(props.cos*props.dis/100)} <span style={{paddingLeft:"10px"}}>MRP:</span><s> ₹{props.cos} </s> <span style={{paddingLeft:"10px"}}>discount:</span>  {props.dis}% off</b><br></br>
                                             <Link to="/Card"><div id='b7' className='btn  btn-lg btn-dark btn-light' onClick={c1}>Add Card</div></Link>
                                         </b>
                                
                               
                                
        
        
        </>
    )
}
export default Ecom
 