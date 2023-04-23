import React, { useState } from 'react';
import Card from '../Card/Card';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCard = useLoaderData();

    const [card, setCard] = useState(savedCard)
    const handleRemoveFromCard = (id) => {
        const remaining = card.filter(product => product.id !== id);
        setCard(remaining);
        removeFromDb(id)
    }

    const handleClearCard = () => {
        setCard([])
        deleteShoppingCart()
    }
    return (
        <div className='shop_container'>
            <div className="review-container">
                {
                    card.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCard={handleRemoveFromCard}
                    ></ReviewItem>)
                }
            </div>
            <div className="card-container">
                <Card
                    card={card}
                    handleClearCard={handleClearCard}
                >
                    <Link className='proceed-link' to='/checkOut'>
                        <button className='btn-proceed'>Proceed Checkout</button>
                    </Link>
                </Card>
            </div>
        </div>
    );
};

export default Orders;