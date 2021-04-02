import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { UserContext } from '../../App';

const Order = () => {
    const [order,setOrder]=useState([]);
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    useEffect(() => {
        fetch('https://fathomless-beach-83483.herokuapp.com/Order?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])

    return (
        <div>
            
            <h1> You Have Total Order: {order.length}</h1>
            {
                order.length === 0 && <Spinner  className="spinner" animation="border" variant="success" />
            }
            {
                order.map(odres=> <h1>Name: {odres.name} Price: {odres.Price} Email: {odres.email}</h1>)
            }
        </div>
    );
};

export default Order;