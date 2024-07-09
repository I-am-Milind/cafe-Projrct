import axios from 'axios';
import React, { useEffect, useState } from 'react'



export default function Products() {

  const [newData, setNewData] = useState([]);

  function fetchData() {
    axios.get("https://6686a83183c983911b03242d.mockapi.io/marj/menus")
        .then((res) => {
            console.log(res.data);
            setNewData(res.data);
        })
};

useEffect(() => {
  fetchData();
}, [])


function handleDelete(id) {
   
  axios.delete("https://6686a83183c983911b03242d.mockapi.io/marj/menus/" + id )
      .then((res) => {
          console.log(res.data);
          fetchData();
      })
};

function handleUpdate(id){
alert(id);
axios.put("https://6686a83183c983911b03242d.mockapi.io/marj/menus/" + id )
      .then((res) => {
          console.log(res.data);
          fetchData();
      })

}





  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-9 d-flex">
            <table class="table mt-5 justify-content-center-center">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Image</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Time of Avability</th>
                  <th scope="col">price</th>
                  <th scope="col"> delete_item</th>
                  <th scope="col"> Update</th>
                </tr>
              </thead>
              <tbody>
                {       
               newData.map((item, index) => {
                return(
                <tr>
                  <th scope="row">{index + 1}</th>

                    <td>
                      <img style={{ width: "80px" }} src={item.image} alt="" />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.textav}</td>
                    <td>{item.price}</td>
                    <td>
                      <button onClick={() => handleDelete(item.id)}className="btn btn-danger"><i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleUpdate(item.id)}className="btn btn-dark">Edit
                      </button>
                    </td>
                  
                </tr>
                )
                  
                })}
              </tbody>
            </table>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
