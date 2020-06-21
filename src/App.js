import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/home.components";
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';

function App() {
  return (
    <div>
    <Header/>
     <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
     </Switch>
    </div>
  );
}

export default App;
