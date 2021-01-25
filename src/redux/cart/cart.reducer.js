import { CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';
import { removeItemFromCart } from './cart.utils';
import { reduceItemInCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART:
            return{
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REDUCE_ITEM:
            return{
                ...state,
                cartItems: reduceItemInCart(state.cartItems, action.payload)
            }
        default: 
            return state
    }
}

export default cartReducer;