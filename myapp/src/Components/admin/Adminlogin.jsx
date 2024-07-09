
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

export default function Adminlogin() {


const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit() {

      

        if (userName === "admin123@gmail.com" && password === "admin1234") {
           
            navigate("/admin");
        } else {
            alert("Incorrect Email_Id or Password Try again" );
            setUserName("");
            setPassword("");
        };




    };



  return (
    <>
     <div className='gn'>


<div class="container d-flex justify-content-center align-items-center min-vh-100">
<div class="row mt-5  p-3 bg-white shadow box-area" style={{marginBottom: "3.7cm", width: "780px",  borderRadius: "25px"}}>
    <div class="col-md-6  d-flex justify-content-center align-items-center flex-column left-box" style={{background: "#fff", borderRadius: "25px"}}>
<div class="featured-image mb-2">
<img src={require('../../assest1/images/ol.jpg')} class="image-fluid" style={{  width: "350px",  borderRadius: "25px"}} alt=""/>
</div>
    </div>

    <div class="col-md-6 right-box" style={{padding: "10px 30px 40px 40px"}}>
        <div class="row align-items-center">
            <div class="header-text  text-center">
                <p>
                    <h4 style={{fontFamily: 'Times New Roman', color: "#000000"}}><u>Coffe </u><span> & </span><span><u>Caffe</u></span></h4>
                
                </p>
            
            </div>
    
    
         
              

            <span><small>*Email</small></span>
            <div class="input-group mb-1">
                <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} class="form-control form-control-lg bg-light fs-6" placeholder="Email Address" required />



            </div>
            <span><small>*Password</small></span>
            <div class="input-group mb-1">
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} class="form-control form-control-lg bg-light fs-6" minlength="8" placeholder="password" required />





            </div>
        




             <div class="input-group mb-4 d-flex">
              <div class="form-check ">
                 <input type="checkbox" class="form-check-input" id="FormCheck"/>
                 <label for="FormCheck" class="form-check-label text-center"> <small>Remember_Me</small> </label>
                
              </div>

              </div>


              <div class="input-group mb-3">
                    <button onClick={handleSubmit} class="btn btn-lg btn-outline-dark w-100 fs-6">Log_in</button>
                       </div>
                    
<div className="col text-center">
    <h6>Don't have account</h6>
    <h6>regiester now:</h6>
<div class="input-group mb-3">
                    <a class="text w-100 fs-6">Sign Up</a>
                       </div>

</div>
              
                

                       <small class="text-center">Login With:</small>
                            <div class="col-lg-12 col-md-6 col-sm-12 mt-lg-0 text-center " style={{fontSize: "x-large"}}>
                                    <a href="" class="me-4 text-reset ">
                                    <i class="fa-brands fa-facebook  " ></i>
                                </a>
                                    <a href="" class="me-4 text-reset ">
                                    <i class="fa-brands fa-twitter "></i>
                                </a>
                              
                                
                                    <a href="" class="me-4 text-reset ">
                                        <i class="fa-brands fa-google "></i>
                                    </a>
                               
                                
                                <a href="" class="me-4 text-reset ">
                                    <i class="fa-brands fa-linkedin "></i>
                                </a>
                              
                            </div>


                       
                    </div>
                
                 </div>



        </div>

    </div>

</div>

    
    
    
    
    
    
    
    
    
    
    </>
  )

    }