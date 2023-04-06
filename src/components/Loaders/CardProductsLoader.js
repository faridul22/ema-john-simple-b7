import { getShoppingCart } from "../../utilities/fakedb";

const cardProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if card data if in database, you have to use async await
    const storedCard = getShoppingCart();
    // console.log(storedCard)

    const savedCard = [];
    for (const id in storedCard) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCard[id];
            addedProduct.quantity = quantity;
            savedCard.push(addedProduct);
        }
    }
    // if we need to send two things by one function
    //  send by array or Object
    // return [products,savedCard];
    // return {products,savedCard}
    return savedCard;
}

export default cardProductsLoader;