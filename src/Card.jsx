import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import { compoundArray } from "./arr";
import axios from 'axios';

function Card(){
          console.log(compoundArray)
          const [a,setA]=useState([]);


          useEffect(()=>{
          axios
      .post("http://localhost:3500/Card", {compoundArray})
      .then((response) => {
        setA(response.data); })
         },[]);





          const [q,setq]=useState(0);
          const [t,sett]=useState(0);
          function ho(event,dis,cos){
            sett(t+cos-(cos*dis/100))
            setq(q+1)
          }

          function hoo(event,dis,cos){
            if(t>0){
            sett(t-(cos-(cos*dis/100)))
            }
            if(q>=1){
            setq(q-1)
          }
          }
        const navigate=useNavigate();
         
            function g1(){
              alert("Thank you for your order!")

            }        
            function s1(){
          
            navigate('/Sell');
            }

            function hi(){
                navigate('/Product')
            }
   return(<>
   <div id='aw'>
        <div id='a2'>
                            <b id='i'>BS Traders</b>
                            <div id='a4'> 
                            <input type='text' size='60'  placeholder='   Search  for Products , Brands and More'></input>
                            <i class="bi bi-search"> </i>
                            </div>
                            <div>
                                  <div id='a7' className='btn  btn-lg btn-light' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="bi bi-person-circle"></i>Profile</div>
                              <Link to='/Sell'><div id='a7' className='btn  btn-lg btn-light'> <i className="bi bi-shop" onClick={s1}></i> Sell</div></Link>
    
                            <Link to='/Product'><div id='a8' className='btn  btn-lg btn-light'><i class="bi bi-house-door-fill" onClick={hi}></i>Home</div></Link>
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
                    <div id="container">
  <div id="ratings">
    
     
  
  
    <div class="rating">
      
    {a.map(products=>(  
      <div key={products._id} >
      
        <img src={products.url} alt="logo" height="280px" width="370px"></img> 
    
        <div id="la"><b>
        {products.desc}</b>
        <br></br><br></br><br></br>
        Rating: ⭐⭐⭐⭐<b>₹{products.cos-(products.cos*products.dis/100)} <span style={{paddingLeft:"10px"}}>MRP:</span>
        <s> ₹{products.cos} </s> <span style={{paddingLeft:"10px"}}>discount:</span>  {products.dis}% off</b></div><br></br>
        <div id="chk">
        <div id='a8' className='btn  btn-dark btn-lg btn-light' onClick={(e)=>ho(e,products.dis,products.cos)}>Buy Now</div>
        <div id='a8' className='btn  btn-dark btn-lg btn-light' onClick={(e)=>hoo(e,products.dis,products.cos)}>Remove</div>
        </div>
        
      <br></br><h1></h1><h1></h1><hr></hr>
        </div>))}
      </div>




    <div>
        </div>
  </div>

  <div id="content">
    <center><h1>PAYMENT</h1></center>
    <br></br>
    <br></br>
    <h3>Total Amount:{t}</h3>
    <br></br>
    <h3>No of Items:{q}</h3>
    <br></br>
    <label htmlFor="uuu"><h3>Location </h3></label>
    <input  id="uuu" type="text"></input>
    <br></br>
    <br></br>
    <h3>Type Of Payment</h3>
    <select>
        <option>UPI</option>
        <option>CASH ON DELEVERIY</option>
        <option>NET BANKING</option>
        <option>EMI</option>
        <option>Credit/Debit Card</option>
    </select>
    <div id='a8' className='btn  btn-dark btn-lg btn-light' onClick={g1}>Buy</div>
  </div>
</div>
                </div>
                </div>





            </div>   
           
    
    </>)

}
export default Card
