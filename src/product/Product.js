import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import './Product.css'
import image1 from './image3/karuppatti 1.jpg'
import image2 from './image3/karuppatti 2.jpg'
import image3 from './image3/karuppatti 3.jpg'
import image4 from './image3/karuppatti 4.jpg'
import image5 from './image3/karuppatti 5.jpg'
import image6 from './image3/karuppatti 6.jpg'
import image7 from './image3/karuppatti 7.jpg'
import image8 from './image3/karuppatti 8.jpg'
import image9 from './image3/palasu1.jpg'
import image10 from './image3/palasu2.jpg'
import image11 from './image3/palasu3.jpg'
import image12 from './image3/palasu4.jpg'
import image13 from './image3/puttu1.jpg'
import image14 from './image3/puttu2.jpg'
import image15 from './image3/puttu3.jpg'
import image16 from './image3/puttu4.jpg'
import image17 from './image3/sukku1.jpg'
import image18 from './image3/sukku2.jpg'
import image19 from './image3/sukku3.jpg'
import image20 from './image3/sukku4.jpg'


function Product() {
     
      const product_data = [
         {id:1,prod_img:image1,prod_name:"nayam karuppatti",price:500,old_price:700,prod_discription:"the palm candy is very super"},
         {id:2,prod_img:image2,prod_name:"nayam karuppatti",price:400,old_price:600,prod_discription:"the palm candy is very super"},
         {id:3,prod_img:image3,prod_name:"nayam karuppatti",price:450,old_price:650,prod_discription:"the palm candy is very super"},
         {id:4,prod_img:image4,prod_name:"nayam karuppatti",price:470,old_price:750,prod_discription:"the palm candy is very super"},
         {id:5,prod_img:image5,prod_name:"nayam karuppatti",price:600,old_price:700,prod_discription:"the palm candy is very super"},
         {id:6,prod_img:image6,prod_name:"nayam karuppatti",price:500,old_price:700,prod_discription:"the palm candy is very super"},
         {id:7,prod_img:image7,prod_name:"nayam karuppatti",price:700,old_price:750,prod_discription:"the palm candy is very super"},
         {id:8,prod_img:image8,prod_name:"nayam karuppatti",price:800,old_price:900,prod_discription:"the palm candy is very super"},
         {id:9,prod_img:image9,prod_name:"palaya karuppatti",price:500,old_price:700,prod_discription:"the palm candy is very super"},
         {id:10,prod_img:image10,prod_name:"palaya karuppatti",price:400,old_price:600,prod_discription:"the palm candy is very super"},
         {id:11,prod_img:image11,prod_name:"palaya karuppatti",price:450,old_price:650,prod_discription:"the palm candy is very super"},
         {id:12,prod_img:image12,prod_name:"palaya karuppatti",price:470,old_price:750,prod_discription:"the palm candy is very super"},
         {id:13,prod_img:image13,prod_name:"puttu karuppatti",price:600,old_price:700,prod_discription:"the palm candy is very super"},
         {id:14,prod_img:image14,prod_name:"puttu karuppatti",price:500,old_price:700,prod_discription:"the palm candy is very super"},
         {id:15,prod_img:image15,prod_name:"puttu karuppatti",price:700,old_price:750,prod_discription:"the palm candy is very super"},
         {id:16,prod_img:image16,prod_name:"puttu karuppatti",price:800,old_price:900,prod_discription:"the palm candy is very super"},
         {id:17,prod_img:image17,prod_name:"sukku karuppatti",price:600,old_price:700,prod_discription:"the palm candy is very super"},
         {id:18,prod_img:image18,prod_name:"sukku karuppatti",price:500,old_price:700,prod_discription:"the palm candy is very super"},
         {id:19,prod_img:image19,prod_name:"sukku karuppatti",price:700,old_price:750,prod_discription:"the palm candy is very super"},
         {id:20,prod_img:image20,prod_name:"sukku karuppatti",price:800,old_price:900,prod_discription:"the palm candy is very super"},

    ]

    return(
        <>
        <div className='cover'>
            <div className='container'>
              <div className='container_1'>
                {
                    product_data.map((v,i) =>{
                        console.log(i)
                        return(
                         <div>
                            <div className='prod_1'> 
                            <div className='prod_2'> 
                             <div> <img src={v.prod_img} className='image' /></div>   
                             <p className='p_name'> {v.prod_name}</p>
                             <p className='price'>Price 1kg : {v.price} <del className='o_price'>Old price:{v.old_price}</del></p>
                              <p className='buy_1'><button className='buy'>Buy</button>  </p>
                              </div>
                              </div>
                         </div>

                        )
                    })
                }

              </div>
            </div>
            
        </div>
        </>
    )

}

export default Product