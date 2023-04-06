import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCard = getShoppingCart();
        const savedCard = [];
        // step 1: get id of the added Product
        for (const id in storedCard) {
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                // step 3: add quantity 
                const quantity = storedCard[id];
                addedProduct.quantity = quantity;
                // step 4: add the addedProduct to the saved card
                savedCard.push(addedProduct)
            }
            // console.log(addedProduct)
        }
        // step 5: set the card
        setCard(savedCard)
    }, [products])

    const handleAddToCard = (product) => {
        // card.push(product) ==> Normal js hilay aivabay kaj hoito

        // option-1:
        // const newCard = [...card, product];

        // option-2:
        // if product doesn't exist in the card, then set quantity = 1
        // an if exist update quantity by 1
        let newCard = [];
        const exists = card.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCard = [...card, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = card.filter(pd => pd.id !== product.id);
            newCard = [...remaining, exists];
        }


        setCard(newCard)
        addToDb(product.id)
    }

    return (
        <div className='shop_container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard}
                    ></Product>)
                }
            </div>
            <div className="card-container">
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shop;