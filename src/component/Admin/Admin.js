import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Admin.css'
import { Link } from 'react-router-dom';

const Admin = () => {
    const { register, handleSubmit} = useForm();
     const [imageURL,setImageURL]=useState(null);

        const onSubmit = data => {
            const eventData={
                name: data.name,
                Price: data.Price,
                imageURL: imageURL
            }
            const url =`https://fathomless-beach-83483.herokuapp.com/product`;
            
            fetch(url, {
             method:'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(eventData)
            })
            .then(res=> console.log('server side response', res));

        };

       const handleImageUpload = event => {
      console.log(event.target.files[0]);
      const imageData = new FormData();
      imageData.set('key', '32a97345521821b6bd065fe88e703ca3');
      imageData.append('image', event.target.files[0])
      
      axios.post('https://api.imgbb.com/1/upload', 
      imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

}
    return (

        
        <div className="adminmanage">
            <Link className="font" to="/Delete">Manage Product</Link>
            <Link className="font" to="/Admin">Add Product</Link>

            <div  className="admin">
         <div className="admins">

            <h1>New Product Add</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Name</h3>
       <input name="name" defaultValue="New Product Name" ref={register} />
       <br/>
       <h3>Price</h3>
       <input name="Price" ref={register}/>
      <br/>
      <br/>
      <input className="file" name="example" type="file" onChange={handleImageUpload}/>
      <br/>
      <br/>
      <input type="submit" />
    </form> 

            </div>
        </div>
        </div>
    );
};

export default Admin;