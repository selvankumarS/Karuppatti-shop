import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from "./images/logo.jpg"
import menu from './images/menu_1.png'
import search from './images/menu_2.png'

function Navbar(){
  const Navigate = useNavigate()
return(
  <header className="navbar">
       <div className="nav-card">
         <img src={menu}/>
         <ul className='nav_drop'>
            <li onClick={() => Navigate('/')}>HOME</li>
             <li onClick={() => Navigate('/product')}>PRODUCT</li>
              <li onClick={() => Navigate('/palm')}>nayan karuppatti</li>
               <li onClick={() => Navigate('/sukku')}>sukku karuppatti</li>
                <li onClick={() => Navigate('/puttu')}>puttu karuppatti</li>
                 <li onClick={() => Navigate('/palasu')}>palaya karuppatti</li>
          </ul>
         </div>
    
    <div className="nav-logo">
        <img src={logo} alt='logo' />
        </div>
        <div className='search_icon'>
          <img src={search}/>
          <input className='input-1' type='search' placeholder='search your product....'/>
        </div>
     <span> <span className='sk'>SK </span>  KARUPPATTI</span>
    
    <div>
       <nav className="nav-menu">
           <lable onClick={ () => Navigate('/')}>HOME</lable>
           <lable onClick={ () => Navigate('/about')} >ABOUT</lable>
           <lable onClick={ () => Navigate('/product')}>PRODUCT</lable>
           <lable onClick={() => Navigate('/contact')}>CONTACT</lable>
       </nav>
    </div>


  </header>

)
}

export default Navbar