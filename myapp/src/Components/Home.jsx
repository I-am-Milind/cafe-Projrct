import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
const navigate = useNavigate();



  return (
    <>
   <div className='main' >
   <div class="container">
            <div class="row ">
                <div class="check  col-lg-6 col-md-6 col-sm-6 mt-lg-5 mt-5" style={{display: "flex", flexDirection: "column", flexFlow: "column wrap"}}   >
                    <a  style={{color:"#fff",fontSize: "1.5cm",fontWeight: "bolder"}}>Welcome To <br/> <span style={{fontFamily: 'Times New Roman', color:"#fff" }}><u>Coffe</u> & <u>Caffe</u></span></a>
                    <p class="par" style={{color:"black",fontSize: "0.5cm",fontFamily: "cursive"}}> The aroma of freshly roasted coffee mingles with the murmur of conversation, creating a symphony that beckons you in. <br></br> Sunlight dances through the windows, illuminating pastries glistening with sugar and lattes adorned with intricate latte art. <br></br> Worn armchairs whisper promises of countless stories shared over steaming mugs, inviting you to linger and become part of the cafe's magic.</p>
{/*                    
                    <button class="btn " onClick={() => navigate ("/log_in")} style={{fontWeight: "bold", color: "#f5f5f5" , backgroundColor: "#b15a2e" }}id="hlo1">Login Now
                    </button> */}
                
                
                </div>
                </div>
                
        </div>

    </div> 

    
<div class="container-fluid mt-0" style={{backgroundColor: "#b15a2e"}} id="hlo1">
        <div class="container">
            <div class="row">
                <h1 class="text-center mt-4 mb-3" style={{borderStyle:  "dotted" , borderRadius: "10px" , fontFamily: 'Times New Roman'}}><u>Coffe</u>&<u>Caffe</u>    </h1>
                <div class="col-lg-3 col-md-6  mt-2 mb-4 mt-lg-0">
                    <div class="card">
                        <img src={require('../assest1/images/coffe1.jpg')} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Coffee Latte</h5>
                            <p class="card-text"><h3>₹ 95</h3>
                            Time of Avability: <br/>
                            9:00 am-10:00 pm</p>
                            <a href="#" class="btn me-3 btn-outline-dark">Add To Meal</a>
                            <a href="#" class="btn btn-outline-dark">Order Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-2 mb-4 mt-lg-0">
                    <div class="card">
                        <img src={require('../assest1/images/coffe2.jpg')} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Hot chochlate</h5>
                            <p class="card-text"><h3>₹ 140</h3>
                            Time of Avability: <br/>
                            9:00 am-10:00 pm</p>
                            <a href="#" class="btn me-3 btn-outline-dark">Add To Meal</a>
                            <a href="#" class="btn btn-outline-dark">Order Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-2 mb-4 mt-lg-0">
                    <div class="card">
                        <img src={require('../assest1/images/coffe3.jpg')} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Coffee Chino</h5>
                            <p class="card-text"><h3>₹ 70</h3>
                            Time of Avability: <br/>
                            9:00 am-10:00 pm</p>
                            <a href="#" class="btn me-3 btn-outline-dark">Add To Meal</a>
                            <a href="#" class="btn btn-outline-dark">Order Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-2 mb-4 mt-lg-0">
                    <div class="card">
                        <img src={require('../assest1/images/coffe4.jpg')} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Coffee Mocha</h5>
                            <p class="card-text"><h3>₹ 110</h3>
                            Time of Avability: <br/>
                            9:00 am-10:00 pm</p>
                            <a href="#" class="btn me-3 btn-outline-dark">Add To Meal</a>
                            <a href="#" class="btn btn-outline-dark">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid mt-0" id="hlo1" style={{backgroundColor: "#b15a2e"}}>
        <div class="container ">
            <div class="row">
                <h1 class="text-center " style={{borderStyle:  "dotted" , borderRadius: "10px" , fontFamily: "sans-serif"}}> Mid-day Craving</h1>
                <div class="col-lg-3 col-md-6 mt-2 mt-lg-0">
                    <div class="card">
                        <img src={require('../assest1/images/pro1.jpg')} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Veg-Burger</h5>
                            <p class="card-text"><h3>₹ 85</h3>
                            Time of Avability: <br/>
                            9:00 am-10:00 pm</p>
                            <a href="#" class="btn me-3 btn-outline-dark">Add To Meal</a>
                            <a href="#" class="btn btn-outline-dark">Order Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-2 mt-lg-0">
                    <div class="card">
                        <img src={require('../assest1/images/pro2.jpg')} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Frech-Fries</h5>
                            <p class="card-text"><h3>₹ 60</h3>
                            Time of Avability: <br/>
                            9:00 am-10:00 pm</p>
                            <a href="#" class="btn me-3 btn-outline-dark">Add To Meal</a>
                            <a href="#" class="btn btn-outline-dark">Order Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-2 mt-lg-0">
                    <div class="card">
                        <img src={require('../assest1/images/pro3.jpg')} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Chessy-Pizza</h5>
                            <p class="card-text"><h3>₹ 169</h3>
                            Time of Avability: <br/>
                            9:00 am-10:00 pm</p>
                            <a href="#" class="btn me-3 btn-outline-dark">Add To Meal</a>
                            <a href="#" class="btn btn-outline-dark">Order Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-2 mt-lg-0">
                    <div class="card">
                        <img src={require('../assest1/images/pro4.jpg')} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Margrita Pizza</h5>
                            <p class="card-text"><h3>₹ 145</h3>
                            Time of Avability: <br/>
                            9:00 am-10:00 pm</p>
                            <a href="#" class="btn me-3 btn-outline-dark">Add To Meal</a>
                            <a href="#" class="btn btn-outline-dark">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-3 col-md-6 mt-2 mb-4 mt-lg-0">
                    <div class="card">
                        <img src={require('../assest1/images/pro5.jpg')} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Cold Coffee</h5>
                            <p class="card-text"><h3>₹ 129</h3>
                            Time of Avability: <br/>
                            9:00 am-10:00 pm</p>
                            <a href="#" class="btn me-3 btn-outline-dark">Add To Meal</a>
                            <a href="#" class="btn btn-outline-dark">Order Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-2 mb-4 mt-lg-0">
                    <div class="card">
                        <img src={require('../assest1/images/pro6.jpg')} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Croissant</h5>
                            <p class="card-text"><h3>₹ 135</h3>
                            Time of Avability: <br/>
                            9:00 am-10:00 pm</p>
                            <a href="#" class="btn me-3 btn-outline-dark">Add To Meal</a>
                            <a href="#" class="btn btn-outline-dark">Order Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-2 mb-4 mt-lg-0">
                    <div class="card">
                        <img src={require('../assest1/images/pro7.jpg')} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">chochlate-Cake</h5>
                            <p class="card-text"><h3>₹ 99</h3>
                            Time of Avability: <br/>
                            9:00 am-10:00 pm</p>
                            <a href="#" class="btn me-3 btn-outline-dark">Add To Meal</a>
                            <a href="#" class="btn btn-outline-dark">Order Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-2 mb-4 mt-lg-0">
                    <div class="card">
                        <img src={require('../assest1/images/pro8.jpg')} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Cold Coke</h5>
                            <p class="card-text"><h3>₹ 40</h3>
                            Time of Avability: <br/>
                            9:00 am-10:00 pm</p>
                            <a href="#" class="btn me-3 btn-outline-dark">Add To Meal</a>
                            <a href="#" class="btn btn-outline-dark">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    
    
    
    
    </>
  )
}
