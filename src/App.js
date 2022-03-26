import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import ProductState from './components/product/ProductState';
import AddProducts from './components/pages/AddProducts';
import Products from './components/pages/Products';
import AddEdit from './components/AddEdit';
import View from './components/View';

function App() {
  return (
    <>
 
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AddProducts' component={AddProducts} />
          <Route path='/Allproducts' component={Products} />
          <Route path='/add' component={AddEdit} />
          <Route path='/update/:id' component={AddEdit} />
          <Route path='/View/:id' component={View} />
         
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
