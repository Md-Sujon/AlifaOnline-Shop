import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';

import './Delete.css'

const Delete = () => {
    const [del,setDel]=useState([]);
         

   useEffect (()=>{
       const url= 'https://fathomless-beach-83483.herokuapp.com/products'
       fetch(url)
       .then(res=>res.json())
       .then(data=>setDel(data))
   } ,[del]) 
    

    return (
        <div> 
            <div className="adminmanage">
                <Link className="font" to="/Delete">Manage Product</Link>
                <Link className="font" to="/Admin">Add Product</Link>
                </div> 
                {del.map(deletes=> <ManageProduct deletes={deletes} key={deletes._id}></ManageProduct>)
                } 
                </div>
    );
};

export default Delete;