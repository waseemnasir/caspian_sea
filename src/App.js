import React from 'react'
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import THEGEMS from "./Components/THEGEMS"
import Part10 from './Components/Part10'


import Home from './Home';
import Aboutus from './Components/AboutUs/Aboutus';
import Reservation from './Components/Reservation/Reservation';
import Menu from './Components/Menu/Menu';

import {BrowserRouter ,Route ,Routes} from "react-router-dom"
import Cart from './Components/Cart/Cart';
import Errorpage from './Components/NotfoundPage/Errorpage';
import SignupPage from './SignupPage/SignupPage';





function App() {
   return (
      <> 
        
  
               <THEGEMS/>
  
 {/* ===================   HOMEPAGE   ==========================  */}
   


     
 <BrowserRouter>
 <ToastContainer />
<Routes>

<Route path="/" element={ <Home/>} />
<Route path="Aboutus" element={ <Aboutus/>} />
<Route path="Reservation" element={ <Reservation />} />
<Route path="Menu" element={ <Menu/>} />
<Route path="Cart" element={ <Cart/>} />
<Route path="SignupPage" element={ <SignupPage/>} />

<Route path="*" element={ <Errorpage/>} />


</Routes>
</BrowserRouter>












 {/* ==========   FOOTER    ======== */}
     <Part10/>





     
</>

   );
}

export default App;