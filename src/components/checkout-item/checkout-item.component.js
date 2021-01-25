import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { removeItem } from '../../redux/cart/cart.actions';
import { addItem } from '../../redux/cart/cart.actions';
import { reduceItem } from '../../redux/cart/cart.actions';

const CheckoutItem  = ({cartItem, removeItem, addItem, reduceItem}) => {
    const {imageUrl, name, price, quantity} = cartItem;
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => reduceItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    reduceItem: item => dispatch(reduceItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);