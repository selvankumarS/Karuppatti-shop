import { useNavigate } from 'react-router-dom'
import './Slider.css'
import k1 from './image1/karuppatti 1.jpg'
import k2 from './image1/karuppatti 2.jpg'
import k3 from './image1/karuppatti 3.jpg'
import k4 from './image1/karuppatti 4.jpg'
import k5 from './image1/karuppatti 5.jpg'
import k6 from './image1/karuppatti 7.jpg'


function Slider(){
  const navigate = useNavigate();
    return(

   
    <div className='container_s'>
      
        <div className="header">
  <img src={k1}/>
  <img src={k2}/>
  <img src={k3}/>
  <img src={k4}/>
  <img src={k5}/>
  <img src={k6}/>
</div>

<div className="row">

<div className="col-3 menu">
  <ul>
  <li onClick={() => navigate("/palm")}>
    nayam karuppatti
  </li>

  <li onClick={() => navigate("/sukku")}>
    sukku karuppatti
  </li>

  <li onClick={() => navigate("/puttu")}>
    puttu karuppatti
  </li>

  <li onClick={() => navigate("/Palasu")}>
    palaya karuppatti
  </li>
</ul>
</div>

<div className="col-6">
  <h1>PALM TREE</h1>
  <p>Karupatti is a natural sweetener made using traditional methods from the sweet sap of the palm tree. It serves as a healthy alternative to sugar and is a nutrient-rich food that offers numerous health benefits.</p>
</div>

<div className="col-3 right">
  <div className="aside">
    <h2>What?</h2>
    <p>Nayam karuppatti , palm jaggery</p>
    <h2>Where?</h2>
    <p> High-quality palm jaggery is obtained from the palm tree </p>
    <h2>How?</h2>
    <p>Karupatti is made from palm sap.</p>
  </div>
</div>

</div>



    </div>
     )
}
 
export default Slider