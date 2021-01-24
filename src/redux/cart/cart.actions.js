import { CartActionTypes } from './cart.types';

export const toggleCartHidden = user => ({
    type: CartActionTypes.TOGGLE_CART
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})