import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default function Header() {
 return (



    
    < >
            <div class="container-fluid ol" style={{backgroundColor: "#b15a2e"}}>
            <nav class="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: "#b15a2e"}} >
                <div class="container-fluid" >
                <Link style={{textDecoration: "none"}} to={"/"}> 
                    <a  class="navbar-brand" style={{fontFamily: 'Times New Roman', 
                    color: "#000000"}}>
                        <u>Coffe </u><span> & <u>Caffe</u> </span>
                    </a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
                        <Link style={{textDecoration: "none"}} to={"/"} class="nav-item">
                                <a  class="nav-link active" aria-current="page" >Home</a>
                            </Link>
    
                            <Link style={{textDecoration: "none"}} to={"/menu"} class="nav-item">
                                <a class="nav-link" style={{color: "#f5f5f5"}}  >Order</a>
                            </Link>
                            <Link style={{textDecoration: "none"}} to={"/"} class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" style={{color: "#f5f5f5", textDecoration: "none" }}  role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    More
                                </a>
                                <ul class="dropdown-menu">
                                    
                                    <Link style={{textDecoration: "none"}} to={"/menu"} ><a class="dropdown-item" >Check food items</a></Link>
                                    <Link style={{textDecoration: "none"}} to={"/history"}><a class="dropdown-item" >History</a></Link>
                                    <Link>
                                        <hr class="dropdown-divider"/>
                                    </Link>
                                    <Link style={{textDecoration: "none"}} to={"/feedback"}><a class="dropdown-item" >Feedback</a></Link>
                                </ul>
                            </Link>
                            <Link style={{textDecoration: "none"}} to={"/"} class="nav-item">
                                <a class="nav-link" onclick="scrollToDown()" style={{color: "#f5f5f5"}} href="#">Contact Us</a>
                            </Link>
    
                            <Link style={{textDecoration: "none"}} to={"/log_in"} class="nav-item">
                                <a class="nav-link active" aria-current="page" >Login</a>
                            </Link>

                            <Link style={{textDecoration: "none"}} to={"/adminlog_in"} class="nav-item">
                                <a class="nav-link active" aria-current="page" >Admin log_in</a>
                            </Link>
    
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" id="for" type="search" placeholder="search products"
                                aria-label="Search"/>
                            <button class="btn btn-outline-dark" style={{color: "#f5f5f5;"}}  type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
           
</>
    
        

      )
    }
    

