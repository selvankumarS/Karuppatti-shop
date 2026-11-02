import './Palasu.css'

import palasu1 from './image4/palasu1.jpg'
import palasu2 from './image4/palasu2.jpg'
import palasu3 from './image4/palasu3.jpg'
import palasu4 from './image4/palasu4.jpg'

 
const products = [
 {id:1, prod_img:palasu1, prod_name:"palaya karuppatti", price:500, old_price:700},
 {id:2, prod_img:palasu2, prod_name:"palaya karuppatti", price:400, old_price:600},
 {id:3, prod_img:palasu3, prod_name:"palaya karuppatti", price:450, old_price:650},
 {id:4, prod_img:palasu4, prod_name:"palaya karuppatti", price:470, old_price:750}
 ]

function Palasu() {
         
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

export default Palasu