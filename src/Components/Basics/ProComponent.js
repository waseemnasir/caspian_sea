import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProComponent = (props) => {
 const { id, name, category, image, description,price } = props.item;
const [qty,setQty]=useState(1)

const dispatch = useDispatch();

const handleAddToCart = (props) => {

dispatch(addToCart(props.item))

};

  return (
    <>
     <section className="main-card--cointainer">
    <div className="card-container" key={id}>  
<div className="card ">
<div className="card-body">
<img src={image} alt="images" className="card-media" />
 <h6 className="card-title"> {name} {id} </h6>  
{/* <span className="card-number card-circle subtle">{id}</span> */}
<span className="card-number  subtle">{price}</span>

<span className="card-author subtle"> {category}</span> 
{/* <span className="card-description subtle">
{description}
</span> */}
{/* <div className="card-read">Read</div> */}
<div className='d-flex flex-row justify-content-around '> 
  <div className='' >
<button type="button" className="btn btn-light btn-sm" onClick={()=>{ setQty(qty+1)}}  >+</button>
{qty}
<button type="button" className="btn btn-light btn-sm" onClick={()=>{ setQty(qty-1)}}>-</button>
</div>
<div className='d-flex ' >
{/* <input   className="btn btn-warning " type="submit" value="ORDER NOW"/> */}
<button className="btn btn-warning" onClick={()=> handleAddToCart (props)}>ORDER NOW</button>
</div>
</div>
</div>

{/* <span className="card-tag  subtle">Order Now</span> */}


   </div>
 </div>  
 </section>
</>

  )
}

export default ProComponent;
// export {handleAddToCart};