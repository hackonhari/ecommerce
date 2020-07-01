import {createSelector} from 'reselect';

//input selector and output selector

//input selector-it doesn't use cartSelector

const selectCart=state=>state.cart; //input selector

// output selector which uses both input selector and create selector
export const selectCartHidden=createSelector(
    selectCart,
    cart=>cart.hidden
)
export const selectCartItems=createSelector(
    selectCart,
    cart=>cart.cartItems
)
export const selectCartItemsCount=createSelector(
    selectCartItems,
    cartItems=>cartItems.reduce((totalQuantity,cartItem)=>totalQuantity+cartItem.quantity,0)
)
export const selectCartTotal=createSelector(
    selectCartItems,
    cartItems=>cartItems.reduce((totalQuantity,cartItem)=>totalQuantity+cartItem.quantity*cartItem.price,0)

)