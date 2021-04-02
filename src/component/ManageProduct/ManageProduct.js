import { Button } from 'react-bootstrap';
import React, { useState } from 'react';

const ManageProduct = (props) => {
    const{name,price,email,_id}=props.deletes;
    const [deleteProducts,setDeleteProduct]=useState([])

    const deleteProduct = (id) => {
        console.log(id);
        fetch(`https://fathomless-beach-83483.herokuapp.com/delete/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => setDeleteProduct(result))

        }

    return (
        <div>
            
            <h1>Name:{name}<Button onClick={() => deleteProduct(_id)} className="button" variant="primary">Delete</Button>{' '}</h1>
         
        </div>
    );

    

};

export default ManageProduct;