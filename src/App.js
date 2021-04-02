import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import Home from './component/Home/Home';
import Order from './component/Order/Order';
import Admin from './component/Admin/Admin';
import Checkout from './component/Checkout/Checkout';
import PrivateRoute from './component/PrivatRoute/PrivatRoute';
import Delete from './component/Delete/Delete';




export const UserContext=createContext();


function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
       <Router>
          <Header/>
          <Switch>
            <Route path="/home">
            <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/Order">
              <Order></Order>
            </PrivateRoute>

            <Route path="/Delete">
              <Delete></Delete>
            </Route>

            <PrivateRoute path="/Checkout/:id">
             <Checkout></Checkout>
            </PrivateRoute>


            <Route path="/Admin">
              <Admin></Admin>
            </Route>
            <Route exact path="/">
             <Home></Home>
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
      
  );
}

export default App;