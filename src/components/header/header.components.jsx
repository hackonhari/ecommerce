import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/original.svg';
import {auth} from '../../firebase/firebase.utils';

const Header=({currentUser})=>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="options" to='/shop'>
            SHOP
          </Link>
          <Link className="options" to='/contact'>
            CONTACT
          </Link>
          {
            currentUser&&currentUser.email?(<div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>)
            :(<Link className='option'to='/signin'>SIGN IN</Link>)
          }
        </div>
    
    </div>
)

const mapStateToProps=(state)=>{
  console.log(state.user.currentUser)
  return{
    currentUser:state.user.currentUser
  }
}
export default connect(mapStateToProps)(Header);