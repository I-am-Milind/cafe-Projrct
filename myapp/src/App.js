import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './Components/Header'; 
import Footer from './Components/Footer';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Login  from './Components/Login';
import Signupf from './Components/Signupf';
import History from './Components/History';
import Feedback from './Components/Feedback';
import Adminlogin from './Components/admin/Adminlogin';
import Layout from './Components/admin/Layout';
import Dashborad from './Components/admin/Dashborad';
import Products from './Components/admin/Products';
import Addproducts from './Components/admin/Addproducts';
// import Order from './Components/Order';








function App() {









  return (
    <>
 <BrowserRouter>
        <Header />
        <Routes>
          
          <Route path="/" element={<Home/>}></Route>
          <Route path="/menu" element={<Menu/>} ></Route>
          <Route path='/signupf' element={<Signupf/>}/>
          <Route path='/log_in' element={<Login/>} ></Route>
          
          <Route path='/history' element={<History/>}></Route>
          <Route path='/feedback' element={<Feedback/>}></Route>
          <Route path='/adminlog_in' element={<Adminlogin/>}></Route>
          <Route path='/admin' element={<Layout/>} >
          <Route index element={<Dashborad/>}/>
          <Route path='/admin/addproducts' element={<Addproducts/>}/>
          <Route path='/admin/products' element={<Products/>}/>

          </Route>
       
          </Routes>
      
        <Footer />
      </BrowserRouter>
      

      








    {/* <Header></Header>
    <Home></Home>
     <Footer></Footer> */}
     
    
     </>
    
  );
}

export default App;
