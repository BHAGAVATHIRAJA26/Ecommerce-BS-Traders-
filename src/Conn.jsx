import myImage from './myimage.jpg';
import './App.css'
import bi from './bicycle.jpg';
import wa from './watch.jpg';
import sp from './sp.jpg';
import ta from './ta.jpg';
import er from './er.jpg';
import wt from './wt.jpg';
import axios from "axios";

import { useNavigate } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';









import React from 'react'
import Ecom from './Ecom.jsx'
import { useEffect,useState} from 'react'

function Conn(){












    const [a,setA]=useState([]);
    const navigate=useNavigate();

    const [se,setse]=useState(0);
    function fds(event){
        setse(event.target.value);
    }
    function sea(){
      
      axios.post("http://localhost:3500/product",se,{
           
  headers: { "Content-Type": "text/plain" }})
        .then((response)=>{
        setA(response.data);
        })
        .catch(error=>console.error(error));
      
    }


    function s1(){
  
    navigate('/Sell');
    }
    function c1(){
      navigate('/Card');
    }
    useEffect(()=>{
      axios.get("http://localhost:3500/product")
        .then((response)=>{
        setA(response.data);
        })
        .catch(error=>console.error(error));
    },[]);
    //<h1>{a.map(product=>( <Ecom key={product.id} details={product.details}/>))}</h1>
    return(<>

    <div id='a3'>
                <div id='a2'>
                        <b id='i'>BS Traders</b>
                        <div id='a4'> 
                          
                        <input type='text' size='60'  placeholder='   Search  for Products , Brands and More' onChange={fds}></input>
                        <i className='btn  btn-sm btn-light bi bi-search' onClick={sea}></i>
                        
                        </div>
                        <div>
                              <div id='a7' className='btn  btn-lg btn-light' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="bi bi-person-circle"></i>Profile</div>
                          <Link to="/Sell"><div id='a7' className='btn  btn-lg btn-light'> <i className="bi bi-shop" onClick={s1}></i> Sell</div></Link>

                          <Link to="/Card"><div id='a8' className='btn  btn-lg btn-light'><i class="bi bi-cart" onClick={c1}></i>Add To Cart</div></Link>
                        </div>


<div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"><i className="bi bi-person-circle"></i>Profile</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    
  </div>
  <div class="offcanvas-body">
    <h6 style={{ marginTop: "20px" }}><i class="bi bi-envelope"> EMAIL:</i> bhagavathi</h6>
  
    <h6  style={{ marginTop: "20px" }}><i class="bi bi-telephone-fill">PHONE:</i> 9443278330</h6>
  
    <h6 style={{ marginTop: "20px" }}><i class="bi bi-telephone-fill">ANOTHER-PHONE :</i> 9443278330</h6>
    
    <h6 style={{ marginTop: "20px" }}><i class="bi bi-house-door-fill">ADDRESS:</i> Kaveri Nagar East Garden</h6>
    
    <h6 style={{ marginTop: "20px" }}>CITY :Oddanchatram</h6>
    
    <h6 style={{ marginTop: "20px" }}>DISTRICT: Dindigul</h6>
  
    <h6 style={{ marginTop: "20px" }}>STATE: Tamil Nadu</h6>
    
    <h6 style={{ marginTop: "20px" }}>COUNTRY: Indian</h6>
  </div>
</div>
        

                    </div>
                    <div id="u1">
                    </div>
                    <div id="hie">
                       <center><h1><b>Best Deals, Best Prices!</b></h1></center>
                       <br></br>
                       <br></br>
                      <div id="sr">
                          <img id="yty" src={bi} alt="logo" height="280px" width="370px"></img>
                          <img id="yty" src={wa} alt="logo" height="280px" width="370px"></img>
                          <img id="yty" src={sp} alt="logo" height="280px" width="370px"></img>
                          <img id="yty" src={ta} alt="logo" height="280px" width="370px"></img>
                          <img id="yty" src={er} alt="logo" height="280px" width="370px"></img>
                          <img id="yty" src={wt} alt="logo" height="280px" width="370px"></img>
                      </div>



                    </div>
                    
                  <div style={{marginTop:"100px"}}></div>
                    
                    <form id='b1' >
                    
                         
                          {a.map(products=>( <Ecom key={products._id} id={products._id} detail={products.desc} urimg={products.url} cos={products.cos} dis={products.dis}/>))}
                
                    </form>
            </div>


    </>)
}
export default Conn