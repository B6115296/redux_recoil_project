import "./App.css";
import React from 'react'
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens

import HomeScreen from "./screens/็HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import EndScreen from "./screens/EndScreen";
// Components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import { Signin } from './components/Signin';
import { Register} from './components/Register';

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
        <Route exact path="/login" component={Signin}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
          <Route exact path="/end" component={EndScreen}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
