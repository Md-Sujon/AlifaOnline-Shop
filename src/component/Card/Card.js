import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router';
import './Card.css'

const Card = (props) => {
 const {Price,imageURL,name,_id}=props.product;


    return (
        <div className="cards">
            <div className="Card">
            <img style={{height:"250px"}} src={imageURL}  alt=""/>
            <h3 className="name">{name}</h3>
            <Link to={`/Checkout/${_id}`}><Button className="button" variant="primary">Buy Now</Button>{' '}</Link>
            <h3>Price: {Price}</h3>
            
        </div>
        </div>
    );
};

export default Card;