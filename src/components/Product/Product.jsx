import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, ratings, price, } = props.product;
    const handleAddToCard = props.handleAddToCard;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product_info">
                <h6 className='product_name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCard(props.product)} className='btn_card'>Add to Card</button>
        </div>
    );
};

export default Product;