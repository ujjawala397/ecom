import React from 'react';
import Home from './pages/homepage/homepage';
import ProductPage from './pages/productPage/productPage.component';
import Contact from './pages/contact/contact.component';
import CheckoutPage from './pages/checkout/checkoutPage';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/oils/:oilid' component={ProductPage}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
      </Switch>
    </div>
  );
}

export default App;
