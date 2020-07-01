import React from 'react'
import CustomButton from '../custom-button/custom-button.components';
import './cart-dropdown.styles.scss';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {withRouter} from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action'

const CartDropdown=({cartItems,history,dispatch})=>(
    <div className="cart-dropdown">
       <div className="cart-items">
            { cartItems.length?
                cartItems.map(cartItem=>{
                    return(
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                )}):(<span className="empty-message">Your Cart is empty</span>)
            }
       </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden())
            
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateTopProps=createStructuredSelector({
    cartItems:selectCartItems
})
export default withRouter(connect(mapStateTopProps)(CartDropdown));