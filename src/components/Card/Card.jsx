import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Card.css'
const Card = ({ card, handleClearCard, children }) => {
    // const card = props.card // Option 1
    // const { card } = props  // Option 2

    // console.log(card)

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of card) {
        // part-1:
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }

        // part-2:
        // shortcut
        // product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;


    return (
        <div className='card'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping: ${totalShipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <button className='btn-clear-card' onClick={handleClearCard}>
                Clear Card
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Card;