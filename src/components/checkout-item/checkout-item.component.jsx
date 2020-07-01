import React from "react";
import "./checkout-item.styles.scss";
import {connect} from 'react-redux';
import {clearItemFromCart} from '../../redux/cart/cart.action'
import {removeItem} from '../../redux/cart/cart.action'
import {addItem} from '../../redux/cart/cart.action'

const CheckoutItem = ({checkoutItem,clearItem,addItem,removeItem}) => {
    const {name,imageUrl,price,quantity}=checkoutItem;
    return(
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity"> 
    <div className="arrow" onClick={()=>{removeItem(checkoutItem)}}>&#10094;</div>
        <span className="value">{quantity}</span>
    <div className="arrow" onClick={()=>{addItem(checkoutItem)}}>&#10095;</div>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={()=>{clearItem(checkoutItem)}} >&#10005;</div>
  </div>
)}
const mapDispatchToProps=(dispatch)=>({
    clearItem:(item)=>{dispatch(clearItemFromCart(item))},
    removeItem:(item)=>{dispatch(removeItem(item))},
    addItem:(item)=>{dispatch(addItem(item))}
})

export default connect(null,mapDispatchToProps)(CheckoutItem);