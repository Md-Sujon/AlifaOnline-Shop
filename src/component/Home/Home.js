import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Card from '../Card/Card';
import Delete from '../Delete/Delete';
import './Home.css';

const Home = () => {
const [products,setProducts]=useState([]);
    
   useEffect(() =>{
           fetch('https://fathomless-beach-83483.herokuapp.com/products/')
           .then(res=>res.json())
           .then(data=>setProducts(data))
           
      },[])


    return (
        <div  className="row">
            {
                products.length === 0 && <Spinner  className="spinner" animation="border" variant="success" />
            }
            {
             products.map(product => <Card product={product} key={product._id}></Card>) 
                   
            }
        </div>
    );
};

export default Home;