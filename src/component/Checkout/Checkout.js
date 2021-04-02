import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Checkout.css'
import { UserContext } from '../../App';

const Checkout = () => {

const [loggedInUser,setLoggedInUser]= useContext(UserContext);

   const {id}=useParams();
   const [product,setProduct]=useState({});


   useEffect (()=>{
       const url=`https://fathomless-beach-83483.herokuapp.com/products/${id}`
       fetch(url)
       .then(res=>res.json())
       .then(data=>setProduct(data))
   } ,[]) 

const OrderConfirm = () => {
  const newOrder = {...loggedInUser, ...product};
  fetch('https://fathomless-beach-83483.herokuapp.com/newOrder', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newOrder)
  })
  .then(res=>res.json())
  .then(data=> {
    console.log(data)
  })

}


    return (
       <div>
            <div className="CheckOut">
            <h1>Name: {product.name}</h1>
            
            <h1>Quntity: 1</h1>
            
            <h1>Price:{product.Price}</h1>
        </div>
        <h1 className="total">Total:{product.Price}</h1>
        <Button onClick={OrderConfirm} className="buttons" variant="primary">Order Confirm</Button>
       </div>
    );
};

export default Checkout;