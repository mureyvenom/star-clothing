export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ?
            {...cartItem, quantity: cartItem.quantity + 1}
            :
            cartItem
        )
    }else{
        return[...cartItems, {...cartItemToAdd, quantity: 1}]
    }    
    
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter( cartItem => 
        cartItem.id !== cartItemToRemove.id
        )
}

export const reduceItemInCart = (cartItems, cartItemToReduce) => {
    const existingItem = cartItems.find(
        cartItem => cartItem.id === cartItemToReduce.id
    );

    if(existingItem.quantity === 1){
        return cartItems.filter( cartItem => 
            cartItem.id !== cartItemToReduce.id
            )
    }else{
        return cartItems.map(
            cartItem =>
            cartItem.id === cartItemToReduce.id
            ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            :
            cartItem
            )
    }

}