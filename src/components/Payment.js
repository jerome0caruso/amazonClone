import React from 'react';
import './css/Payment.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';



function Payment() {

    const [{basket, user}, dispatch] = useStateValue();
    return(
        <div className="payment">

            <div className="payment__container">

                {/* Delive Address */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>666 Elm St.</p>
                        <p>Chicago, Il</p>
                    </div>
                </div>

                {/* Payment section items */}
                <div className='payment__section'>
                <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment Methods */}
                <div className='payment__section'>
                </div>

            </div>
        </div>
    )
}
export default Payment;