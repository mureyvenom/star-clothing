import { CartActionTypes } from './cart.types';

export const toggleCartHidden = user => ({
    type: CartActionTypes.TOGGLE_CART
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const reduceItem = item => ({
    type: CartActionTypes.REDUCE_ITEM,
    payload: item
})