import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = (e) => {
        // dispatch into data layer

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {/* create a new Array and take in a #(n) and fill it with whatevers in the map fn n times. so converting a number passed by props and using it to render the star image n times*/}
                    {Array(rating).fill().map((_, i) =>
                        <p><StarIcon /></p>
                    )}


                </div>
            </div>
            <img src={image} alt="book" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
