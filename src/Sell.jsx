
import Conn from './Conn.jsx'  
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import Reg from './Newreg.jsx';
import axios from "axios";

import myImage from './myimage.jpg';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

import React from 'react'
import Ecom from './Ecom.jsx'
import { useNavigate } from 'react-router-dom';

function Sell() {

       const [img,setimg]=useState();
       const [desc,setdesc]=useState();
       const [cos,setcos]=useState();
       const [dis,setdis]=useState();
       const [nop,setnop]=useState();
       const [mob,setmob]=useState();

      function a1(event){
          setimg(event.target.files[0]);
          const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setimg(reader.result); // store Base64 string
  };
      }

      function a2(event){
          setdesc(event.target.value);
      }

      function a3(event){
          setcos(event.target.value);
      }

      function a4(event){
          setdis(event.target.value);
      }

      function a5(event){
            
          setnop(event.target.value);}
      

      function a6(event){
          setmob(event.target.value);
      }

      function uu(e){
        if(desc===undefined || img===undefined || cos===undefined || dis===undefined || nop===undefined || mob===undefined){
          alert("Fill a product details")
        }
        else{
        const formData=new FormData();
        formData.append("img", img);
        formData.append("desc", desc);
        formData.append("cos", cos);
        formData.append("dis", dis);
        formData.append("nop", nop);
        formData.append("mob", mob);
        e.preventDefault();
         axios
        .post("http://localhost:3500/Sell",formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          if(response.data.message==true){
              alert("your product is ready to sell")       
          }
          else{
            alert("your product is not saved")
          }
        });
      }
    
    }

      function hi(){
                navigate('/Product')
            }
      
        const navigate=useNavigate();
            function s1(){
          
            navigate('/Card');
            }
  return (
    <>
  <div id='aw'>
        <div id='a2'>
                            <b id='i'>BS Traders</b>
                            <div id='a4'> 
                            <input type='text' size='60'  placeholder='   Search  for Products , Brands and More'></input>
                            <i class="bi bi-search"> </i>
                            </div>
                            <div>
                                  <div id='a7' className='btn  btn-lg btn-light' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="bi bi-person-circle"></i>Profile</div>
                             
    
                                  <Link to="/Card"><div id='a8' className='btn  btn-lg btn-light'><i class="bi bi-cart" onClick={s1}></i>Add To Cart</div></Link>
                                  <Link to='/Product'><div id='awe' className='btn  btn-lg btn-light'><i class="bi bi-house-door-fill" onClick={hi}></i>Home</div></Link>
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
    
    
            <div id='u1'>
    
                <div id='oo'>
                    
                        
                <center><h1>SALES YOUR PRODUCT</h1></center>
                      <br></br> <br></br>
                      <form onSubmit={uu}>
                      <table id="ui1">
                            <tr>
                          
                              <td><label for="aq">Product Image</label></td>
                              <td><input type="file" accept='image/*' id="aq" onChange={a1}></input></td>
                              <td><label for="tt">Description</label></td>
                              <td><textarea placeholder="maximum 30 words" id="tt" rows="5" cols="60" style={{fontfamily: "Courier New, Courier, monospace"}} onChange={a2}  maxLength={160}></textarea></td>
                               
                              </tr>
                              <br></br>
                              <tr>
                              <td><label for="ayq">Cost of Product</label></td>
                              <td><input type="number" id="ayq" onChange={a3}></input></td>
                              <td><label for="aypq">Discount of Product</label></td>
                              <td><input type="number" id="aypq" onChange={a4}></input></td>

                              </tr>
                              <br></br>
                              <tr>
                        
                              <td><label for="a">No of product</label></td>
                              <td><input type="number" id="a" onChange={a5}></input></td>
                              <td><label>Phone:No</label></td>
                              <td><input type="number" onChange={a6}></input></td>
                              
                              </tr>
                           </table>
    
                            <center><div style={{paddingTop:"100px"}}><button type="submit" className="btn btn-primary btn-outline-dark"  style={{cursor:"pointer"}} >Submit</button></div></center>
                            </form>
                      </div></div>
            </div>
                    

    </>
  )
}

export default Sell

