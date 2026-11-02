import './Puttu.css'

import puttu1 from './image4/puttu1.jpg'
import puttu2 from './image4/puttu2.jpg'
import puttu3 from './image4/puttu3.jpg'
import puttu4 from './image4/puttu4.jpg'

 
const products = [
 {id:1, prod_img:puttu1, prod_name:"puttu karuppatti", price:500, old_price:700},
 {id:2, prod_img:puttu2, prod_name:"puttu karuppatti", price:400, old_price:600},
 {id:3, prod_img:puttu3, prod_name:"puttu karuppatti", price:450, old_price:650},
 {id:4, prod_img:puttu4, prod_name:"puttu karuppatti", price:470, old_price:750}
 ]

function Puttu() {
         
 return(
  <>
 
  <div className='box'>
  <div className='container'>
    <div className='sub_container'>
        {
            products.map(item => (
                <div key={item.id}> 
                    <img className='p_1' src={item.prod_img}/>
                    <p className='p_2'>{item.prod_name}</p>
                    <label className='p_3'>price 1kg : {item.price} </label> <span className='p_5'>old price : {item.old_price}</span> 
                    <button className='p_4'>Buy</button>
                    
                </div>
            ))
        }
    </div>
  </div>
  </div>
  </>
 )
}

export default Puttu