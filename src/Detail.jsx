import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import myImage from './myimage.jpg';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { compoundArray } from "./arr"
function Detail(){
    
        const {id}=useParams();


        const [a,setA]=useState("");
        const navigate=useNavigate();
        function s1(){
            navigate('/Sell');
            
        }

        function c1(){
          console.log("hello")
          compoundArray.push(id);
      navigate("/Card");
    }
        
          

            useEffect(()=>{
      axios.get(`http://localhost:3500/product/${id}`)
        .then((response)=>{
        setA(response.data);
        })
        .catch(error=>console.error(error));
    },[id]);
    console.log(a);
    console.log(a.desc)
    return(<>
    
    <div id='a2'>
                        <b id='i'>BS Traders</b>
                        <div id='a4'> 
                        <input type='text' size='60'  placeholder='   Search  for Products , Brands and More'></input>
                        <i class="bi bi-search"> </i>
                        </div>
                        <div>
                              <div id='a7' className='btn  btn-lg btn-light' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="bi bi-person-circle"></i>Profile</div>
                          <Link to='/Sell'><div id='a7' className='btn  btn-lg btn-light'> <i className="bi bi-shop" onClick={s1}></i> Sell</div></Link>

                          <Link to='/Card'><div id='a8' className='btn  btn-lg btn-light'><i class="bi bi-cart" onClick={c1}></i>Add To Cart</div></Link>
                        </div>


<div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"><i className="bi bi-person-circle"></i>Profile</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    
  </div>
  <div class="offcanvas-body" >
    <h6><i class="bi bi-envelope"> EMAIL:</i> bhagavathiraja.s26@gmail.com</h6>
    <h6 style={{ marginTop: "20px" }}><i class="bi bi-telephone-fill">PHONE:</i> 9443278330</h6>
    
    <h6 style={{ marginTop: "20px" }}><i class="bi bi-telephone-fill">ANOTHER-PHONE :</i> 9443278330</h6>
    
    <h6 style={{ marginTop: "20px" }}><i class="bi bi-house-door-fill">ADDRESS:</i> Kaveri Nagar East Garden</h6>
    
    <h6  style={{ marginTop: "20px" }} >CITY :Oddanchatram</h6>
    
    <h6 style={{ marginTop: "20px" }}>DISTRICT: Dindigul</h6>
    
    <h6 style={{ marginTop: "20px" }}>STATE: Tamil Nadu</h6>
    
    <h6 style={{ marginTop: "20px" }}>COUNTRY: Indian</h6>
  </div>
</div>
</div>

{a &&

        <div id='u1'>
            <div id='u'><img id='u' src={a.url} alt="logo" height="500px" width="500px"></img></div>
            <div id='u2'><b>{a.desc} <h6 > Rating: ⭐⭐⭐⭐</h6><b>₹{a.cos-(a.cos*a.dis/100)} <span style={{paddingLeft:"10px"}}>MRP:</span><s> ₹{a.cos} </s> <span style={{paddingLeft:"10px"}}>discount:</span>  {a.dis}% off</b><br></br>
                        <div id='b7' className='btn  btn-lg btn-dark btn-light' onClick={c1}>Add Card</div>
                    </b>
                    
                    </div>
        </div>
}
              
                
    </>)
}
export default Detail