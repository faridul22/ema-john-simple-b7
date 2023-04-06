import React from 'react';
import Card from '../Card/Card';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const card = useLoaderData();
    console.log(card)
    return (
        <div className='shop_container'>
            <div className="review-container">
                {
                    card.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className="card-container">
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Orders;