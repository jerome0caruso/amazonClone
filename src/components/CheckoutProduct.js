import React from 'react'
import './css/CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="checkout product" />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map(() => (<p><StarIcon /></p>))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct

