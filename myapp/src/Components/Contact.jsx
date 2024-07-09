import React from 'react'

export default function () {
  return (
    <>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="row  p-3 bg-white shadow box-area" style={{marginBottom: "3.7cm", width: "780px",  borderRadius: "25px"}}>
        <div class="col-md-6  d-flex justify-content-center align-items-center flex-column left-box" style={{background: "#595656", borderRadius: "25px"}}>
<div class="featured-image mb-2">
    <img src={require('../assest1/images/bgg2.gif')} class="image-fluid " style={{  width: "350px",  borderRadius: "25px"}} alt=""/>
</div>
        </div>

        <div class="col-md-6 right-box" style={{padding: "10px 30px 40px 40px"}}>
            <div class="row align-items-center">
                <div class="header-text  text-center">
                    <p>
                        <h4 style={{fontFamily: 'Times New Roman', color: "#000000"}}><u>Coffe </u><span> & </span><span><u>Caffe</u></span></h4>
                    
                    </p>
                
                </div>
                <span><small>*Full-Name</small></span>
                <div class="input-group mb-1">
                 <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value) } class="form-control form-control-lg bg-light fs-6" placeholder="Full-Name" required /> 



                </div>
                <span><small>*Phone_No.</small></span>
                <div class="input-group mb-2">
                 <input type="text" value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value) } class="form-control form-control-lg bg-light fs-6" maxlength="10" placeholder="Phone_No" required /> 



                </div>
             
                  

                <span><small>*Email</small></span>
                <div class="input-group mb-1">
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value) } class="form-control form-control-lg bg-light fs-6" placeholder="Email Address" required />



                </div>
                <span><small>*Password</small></span>
                <div class="input-group mb-2">
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value) } class="form-control form-control-lg bg-light fs-6" minlength="8" placeholder="password" required />





                </div>
                <div class="input-group mb-1">
                    <input type="password" value={reEnter} onChange={(e)=>setReEnter(e.target.value) }  class="form-control form-control-lg bg-light fs-6" minlength="8" placeholder="Re-Enter password" required />
                    
                    



                </div>
                 <div class="input-group mb-4 d-flex">
                  <div class="form-check ">
                     <input type="checkbox" class="form-check-input" id="FormCheck"/>
                     <label for="FormCheck" class="form-check-label text-center"> <small>Remember_Me</small> </label>
                    
                  </div>

                  </div>

                  
                    <div class="input-group mb-3">
                        <button onClick={handleSubmit} class="btn btn-lg btn-outline-dark w-100 fs-6">Sign Up</button>
                           </div>
                        </div>
                    
                     </div>



            </div>

        </div>
    
    
    </>
  )
}
