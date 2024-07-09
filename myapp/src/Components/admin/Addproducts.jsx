import axios from 'axios'
import React, { useState } from 'react'

export default function Addproducts() {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [textav, setTextav] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            name: name,
            image: image,
            price: price,
            textav: textav,
        };
console.log(data);
        
        alert("oroorooroorororooro")
        axios.post("https://6686a83183c983911b03242d.mockapi.io/marj/menus", data)
        
            .then((response) => {
                
                console.log(response.data);
                
            });
            
            setName("");
            setImage("");
             setPrice("");
             setTextav("");

    };















  return (
    <>
    
    
    
<div className="coco">

<div className="container-fluid">
            <div className="row text-center">
<div className="col-lg-3"></div>
            
        <form className="col-lg-6  p-6 rounded" style={{backgroundColor: "rgba(177,90,46,0.8),rgba(177,90,46,0.8)", marginTop:"4cm" }}>
        <div class="header-text ">
                <p >
                    <h4 style={{textAlign: "center",marginTop: "0.4cm" , fontSize: "0.8cm" , fontFamily: 'Times New Roman', color: "#000000",borderRadius: "10px"}}><u>Coffe </u><span> & </span><u>Caffe</u></h4>
                
                </p>
            
            </div>
        <div className="div">
        <h1 style={{fontFamily: "cursive" , fontWeight: "bold ", marginBottom: "0.7cm" }}>Add Items in Menu</h1>
<div class="row mb-4">
    
    <div class="col">
        <div data-mdb-input-init class="form-outline">
            <label class="form-label"  for="form3Example1" style={{fontFamily: "monospace" , fontWeight: "bold " }}>Menu Name:</label>
            <input value={name}  type="text" onChange={(e)=> setName(e.target.value)} id="form3Example1" class="form-control" />
        </div>
    </div>
    <div class="col">
        <div data-mdb-input-init class="form-outline">
            <label class="form-label" for="form3Example2" style={{fontFamily: "monospace" , fontWeight: "bold " }}>Menu Image:</label>
            <input value={image}  type="text" onChange={(e)=> setImage(e.target.value)} id="form3Example2" class="form-control" />
        </div>
    </div>
</div>

</div>

<div className="div">
<div class="row mb-4">
    <div class="col">
        <div data-mdb-input-init class="form-outline">
            <label class="form-label" for="form3Example1" style={{fontFamily: "monospace" , fontWeight: "bold " }}>Price:</label>
            <input value={price}  type="text" onChange={(e)=> setPrice(e.target.value)} id="form3Example1" class="form-control" />
        </div>
    </div>
    <div class="col">
        <div data-mdb-input-init class="form-outline">
            <label class="form-label" for="form3Example2" style={{fontFamily: "monospace" , fontWeight: "bold " }}>Time of Avability:</label>
            <input value={textav}  type="text" onChange={(e)=> setTextav(e.target.value)} id="form3Example2" class="form-control" />
        </div>
    </div>
</div>

</div>

<button className='btn btn-outline-dark mb-5' onClick={handleSubmit} style={{width: "5cm", height: "1.5cm" , fontWeight: "bolder" }}>Add Items</button>
            




</form>

            </div>

       

</div>



        
           
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    







</div>

       
    
    
    
    
    
    
    </>
  )
}
