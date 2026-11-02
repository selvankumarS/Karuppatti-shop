import './Sukku.css'

import sukku1 from './image4/sukku1.jpg'
import sukku2 from './image4/sukku2.jpg'
import sukku3 from './image4/sukku3.jpg'
import sukku4 from './image4/sukku4.jpg'

 
const products = [
 {id:1, prod_img:sukku1, prod_name:"sukku karuppatti", price:500, old_price:700},
 {id:2, prod_img:sukku2, prod_name:"sukku karuppatti", price:400, old_price:600},
 {id:3, prod_img:sukku3, prod_name:"sukku karuppatti", price:450, old_price:650},
 {id:4, prod_img:sukku4, prod_name:"sukku karuppatti", price:470, old_price:750}
 ]

function Sukku() {
         
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

export default Sukku