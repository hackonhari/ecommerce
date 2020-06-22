import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/home.components";
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null;
  componentDidMount(){
      this.unsubscribeFromAuth=auth.onAuthStateChanged(async user=>{
        if(user){
        const userRef=await createUserProfileDocument(user);
        userRef.onSnapshot(doc=>{
          this.setState({
            currentUser:{
             id: doc.id,
              ...doc.data()
            }
          })
          console.log(this.state);
        })
      }
      else{
        this.setState({currentUser:user});
      }
      })
  }
componentWillUnmount(){
  this.unsubscribeFromAuth();

}

  render(){
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
     <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
     </Switch>
    </div>
  );
}
}

export default App;
