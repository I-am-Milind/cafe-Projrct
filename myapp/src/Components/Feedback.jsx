import axios from 'axios';
import React, { useState } from 'react'

export default function Feedback() {

  // const [FullName, setFullName]= useState("");
  // const [feedbck, setfeedbck]= useState("");



const [userSelect ,setUserSelect] = useState ("");

const [userName ,setUserName] = useState ("");
const [userFeedback ,setUserFeedback] = useState ("");



function handlesubmit(e) {


// console.log("name:  " +  userName);
// console.log("Rating:  "  + userSelect);
// console.log("feedback: " +  userFeedback);



  e.preventDefault();
  const data = {
     userName: userName,
      userFeedback: userFeedback,
      userSelect: userSelect,
  };
console.log(data);
  
alert("Thanks for your Feedback");
  axios.post("https://668bd42f0b61b8d23b0b5b99.mockapi.io/feedback/feedback", data)
  
      .then((response) => {
          
          console.log(response.data);
          
      });
      
      setUserName("");
      setUserFeedback("");
       setUserSelect("");
      
};







  return (
    <>
    <div className="co">



    <div class="container d-flex justify-content-center align-items-center min-vh-100">
        <div class="row  p-3 bg-white shadow box-area" style={{marginBottom: "3.7cm", width: "650px" , borderRadius: "25px"}}>
           
    
            <div class="col-md-12 box" style={{padding: "10px 30px 40px 40px"}}>
                <div class="row align-items-center">
                    <div class="header-text  text-center">
                        <p >
                            <h4 style={{ fontFamily: 'Times New Roman', color: "#000000"}}><u>Coffe </u><span> & </span> <u>Caffe</u></h4>
                        
                        </p>
                    
                        <p>
                        
                        </p>
    
                    </div>
                    <span><small>*Full-Name</small></span>
                    <div class="input-group mb-2">
                     <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}  class="form-control form-control-lg bg-light fs-6" placeholder="Full-Name" required/> 
    
    
    
                    </div>
                    
    
    
    
                    </div>
                     <div class="input-group mb-3 d-flex">
                      <div class="form-radio me-3">
                       
                         <h6>Your opinion about our service</h6> 



                        <span><input type="radio" value={userSelect} onSelect={(e) => setUserSelect(e.target.value)}  class="form-radio-input me-2" name="choice"  />Bad
                           </span>
                           <span>

                            <input type="radio" value={userSelect} onSelect={(e) => setUserSelect(e.target.value)}  class="form-radio-input me-2 " name="choice" />Avarage
                            
                           </span>
                           <span>

                            <input type="radio" value={userSelect} onSelect={(e) => setUserSelect(e.target.value)}  class="form-radio-input me-2 " name="choice"  />Good
                               </span>
                           <span>

                            <input type="radio" value={userSelect} onSelect={(e) => setUserSelect(e.target.value)}  class="form-radio-input me-2"  name="choice" />Excellent
                                </span>
                         
                      </div>
    
                      </div>

                      <small style={{fontWeight: "bold"}}>*Your Feedback</small>
                      <div class="input-group  mb-4 ">
                       
                        <input type='text' value={userFeedback} onChange={(e)=> setUserFeedback (e.target.value)} style={{height: "3cm"}} class="form-control form-control-lg bg-light fs-6" placeholder="Drop your feedback here"/>
                      </div>
    
                      
                        <div class="input-group mb-3">
                            <button id="myButton" onClick={handlesubmit}  class="btn btn-lg btn-outline-dark w-100  fs-6">Submit</button>
                            
                           
                               </div>
                            </div>
                        
                         </div>
    
    
    
                </div>
    




    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
