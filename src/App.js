import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import HomePage from "./pages/homepage/home.components";
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';

class App extends React.Component {
  unsubscribeFromAuth=null;

  componentDidMount(){
    const {setCurrentUser}=this.props
      this.unsubscribeFromAuth=auth.onAuthStateChanged(async user=>{
        if(user){
        const userRef=await createUserProfileDocument(user);
        userRef.onSnapshot(doc=>{
          console.log(doc.data())
         setCurrentUser({
            id:doc.id,
            ...doc.data()
          })
        })
      }
      else{
      setCurrentUser({currentUser:user});
      }
      })
  }
componentWillUnmount(){
  this.unsubscribeFromAuth();

}

  render(){
  return (
    <div>
    <Header/>
     <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path='/signin' render={()=>this.props.currentUser&&this.props.currentUser.email?(<Redirect to="/"/>):(<SignInAndSignUpPage/>)}/>
     </Switch>
    </div>
  );
}
}
const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})
const mapDispatchToProps=(dispatch)=>{
  return{
    setCurrentUser:user=>dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
