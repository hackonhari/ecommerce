import React from 'react'
import CustomButton from '../custom-button/custom-button.components';
import './cart-dropdown.styles.scss';
import {selectCartItems} from '../../redux/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';

const CartDropdown=({cartItems})=>(
    <div className="cart-dropdown">
       <div className="cart-items">
            {
                cartItems.map(cartItem=>{
                    console.log(cartItem)
                    return(
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                )})
            }
       </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateTopProps=(state)=>({
    cartItems:selectCartItems(state)
})
export default connect(mapStateTopProps,null)(CartDropdown);