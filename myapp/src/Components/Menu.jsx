import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Menu() {


    const [newData, setNewData] = useState([]);

    function fetchData() {
        axios.get("https://6686a83183c983911b03242d.mockapi.io/marj/menus")
            .then((res) => {
                console.log(res.data);
                setNewData(res.data)
            })
    };

    useEffect(() => {
        fetchData();
    }, [])






  return (
   <>
    <div class="container-fluid mt-0" style={{backgroundColor: "#b15a2e"}} id="hlo1">
        <div class="container">
            <div class="row">
                <h1 class="text-center mt-4 mb-3" style={{borderStyle:  "dotted", borderRadius: "10px", fontFamily: 'Times New Roman'}}>
                    <u >Coffe</u>&<u>Caffe</u>    </h1>
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
                <h1 class="text-center " style={{borderStyle:  "dotted", borderRadius: "10px", fontFamily: "sans-serif"}}> Mid-day Craving</h1>
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
                        </div></div>
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
                                <a  class="btn me-3 btn-outline-dark">Add To Meal</a>
                                <a class="btn btn-outline-dark">Order Now</a>
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
                                <a  class="btn me-3 btn-outline-dark">Add To Meal</a>
                                <a  class="btn btn-outline-dark">Order Now</a>
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
                                <a  class="btn me-3 btn-outline-dark">Add To Meal</a>
                                <a  class="btn mt-1 btn-outline-dark">Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                {
                        newData.map((item) => {
                            return (
                                <div className="col-lg-3 col-md-6 mt-2 mb-4 mt-lg-0">
                                    <div class="card" style={{ width: "18rem" }}>
                                        <img src={item.image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{item.name}</h5>
                                            <p class="card-text"><h3>₹ {item.price} /-</h3></p>
                                            <p class="card-text">Time of Avability:<br/> {item.textav} </p>
                                            <a  class="btn me-3 btn-outline-dark">Add To Meal</a>
                                            <a  class="btn btn-outline-dark">Order Now</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

</div>



            </div>
        </div>
   
   
    
           

                    
                
            
    </>
   
  )
}
