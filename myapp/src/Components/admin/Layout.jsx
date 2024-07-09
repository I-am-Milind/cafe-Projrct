import { Link, Outlet } from 'react-router-dom';
import React from 'react';
export default function Layout() {
  return (
    <>
    <div class="container-fluid">
    <div class="row flex-nowrap text-center">
        <div class="col-auto col-lg-2 col-md-3 col-xl-2 px-sm-2 px-0 " style={{backgroundColor: "#FFC38E"}}>
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link  to={"/"} class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none" style={{fontWeight: "bold", textDecoration: "none"}}>
                    <span class="fs-5 d-none mt-3 d-sm-inline">Menu</span>
                </Link>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <Link style={{textDecoration: "none"}} to={"/"} class="nav-item">
                        <a  class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 fs-5 " style={{fontWeight: "bolder"}}>Home</span>
                        </a>
                    </Link>
         
                        <a  class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 fs-5 " style={{fontWeight: "bolder"}}>Dashboard</span> </a>
                
                    
                    <Link style={{textDecoration: "none"}} to={"/menu"}>
                        <a  class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 fs-5 " style={{fontWeight: "bolder"}}>Menu</span></a>
                    </Link>
                    <Link style={{textDecoration: "none"}} to={"/admin/addproducts"}>
                        <a   class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 fs-5 " style={{fontWeight: "bolder"}}>Add Product</span></a>
                      
                    </Link>
                    <Link style={{textDecoration: "none"}} to={"/admin/products"}>
                        <a   class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 fs-5 " style={{fontWeight: "bolder"}}>Products</span> </a>
                          
                    </Link>
                    <li>
                        <a  class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 fs-5 " style={{fontWeight: "bolder"}}>Order history</span> </a>
                    </li>
                </ul>
                <hr/>
               
            </div>
        </div>
        <div className="col-lg-10">
            <Outlet/>
        </div>
    </div>
</div>
    
    
    










    
    
    </>
  )
}
