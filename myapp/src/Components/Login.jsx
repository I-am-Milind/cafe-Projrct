import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login() {

const navigate = useNavigate();

const [email, setEmail]= useState("");
const [password, setPassword] = useState("");

function fetchData(){


    axios.get("https://6686a83183c983911b03242d.mockapi.io/marj/clientData")
    .then((res) => {
        console.log(res.data)
        
    });

};




useEffect(() => {
    fetchData();
  }, [])


  function handledsubmit(item) {

    if(email === item.email  && password === item.password ){

navigate("/")




    }

    else{
alert("Account not found please sign_up" )


    }
    
  }
   







  return (
    <>

    <div className="og">


    <div class="container d-flex justify-content-center  align-items-center min-vh-100" >
    

    <div class="col-md-6 col-lg-5  " style={{ borderRadius: "25px", background: "linear-gradient(to top, rgba(0,0,0,0.5)50%,rgba(0,0,0,0.5)50%)",color: "#f5f5f5" , padding: "10px 30px 40px 40px"}}>
        <div class="row align-items-center">
            <div class="header-text ">
                <p >
                    <h4 style={{textAlign: "center",marginTop: "0.4cm" , fontSize: "0.8cm" ,border: "#f5f5f5", backgroundColor: "#f5f5f5", fontFamily: 'Times New Roman', color: "#000000",borderRadius: "10px"}}><u>Coffe </u><span> & </span><u>Caffe</u></h4>
                
                </p>
            
            </div>
            
              

            <span><small>*Email</small></span>
            <div class="input-group mb-1"  >
                <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} class="form-control form-control-lg  fs-6" style={{backgroundColor: "transparent",
                color: "#f5f5f5", borderBottom:  "solid #b15a2e" , borderTop: "none", borderLeft:  "none",
                borderRight:  "none"}} placeholder="Email Address" required />



            </div>
            <span><small>*Password</small></span>
            <div class="input-group mb-1">
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}  style={{backgroundColor: "transparent",
                color: "#f5f5f5", borderBottom:  "solid #b15a2e" , borderTop: "none", borderLeft:  "none",
                borderRight: "none"}} class="form-control form-control-lg  fs-6" minlength="8" placeholder="password" required />



            </div>
            
                



        
             <div class="input-group mb-4 d-flex">
              <div class="form-check ">
                 <input type="checkbox" class="form-check-input" id="FormCheck" />
                 <label for="FormCheck" class="form-check-label text-center"> <small>Remember_Me</small> </label>
                
              </div>

              </div>

              
                <div class="input-group mb-3">
                    <button class="btn btn-lg btn-outline-light w-100 fs-6"> Login </button>
                       </div>



                       <small class="text-center">Create new Account</small> <br/>
                       <div class="input-group mb-3">
                           <button onClick={() => navigate  ("/signupf")} class="btn btn-lg btn-outline-light w-100 fs-6">Sign in</button>






                        
                              </div>

                              
                                <small class="text-center">Login With:</small>
                            <div class="col-lg-12 col-md-6 col-sm-12 mt-lg-0 " style={{fontSize: "x-large"}}>
                                    <a href="" class="me-4 text-reset ">
                                    <i class="fa-brands fa-facebook " style={{marginLeft: "4cm"}}></i>
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
    
    
   
    
    </>
  )
}
