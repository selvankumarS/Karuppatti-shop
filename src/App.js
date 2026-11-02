import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import Slider from './slider/Slider';
import Footer from './footer/Footer';
import About from './about/About';
import Product from './product/Product';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './home/Home';
import { Navigate } from 'react-router-dom';
import Contact from './contact/Contact';
import Palm from './karuppattidata/Palm';
import Palasu from './karuppattidata/Palasu';
import Puttu from './karuppattidata/Puttu';
import Sukku from './karuppattidata/Sukku';
import ScrollToTop from './navbar/Scrolltotop/ScrollToTop';





function App() {  
  return (
            
 <BrowserRouter>
 <ScrollToTop/>
 <Navbar />
<Routes>
  <Route path='/' element={ <Home/>}/>
   <Route path='/about' element={<About/>}/>
  <Route path='/product' element={<Product/>}/>
  <Route path='/contact' element={<Contact/>}/>

   
    <Route path="/palm" element={<Palm/>} />
    <Route path="/palasu" element={<Palasu/>} />
    <Route path='/puttu' element={<Puttu/>}/>
    <Route path='/sukku' element={<Sukku/>}/>
    </Routes>
<Footer/>
       </BrowserRouter>



    

  );
}

export default App;
