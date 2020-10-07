import React, { useState, useEffect } from 'react';
import './css/Payment.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { getBasketTotal } from '../reducer';
import axios from '../axios';
import { database } from '../firebase';


function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();
    
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate special stripe secrect/ allow us to charge customer.  Updates with every basket change
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expects the total in currencies subunits( * 100)
                url: `/payments/create?total=${getBasketTotal(basket) * 100 }`
            });
            //updates
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log("the secret i ", clientSecret)

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event) => {
        event.preventDefault();
        //disables buy btn
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement)
            }
            //destructed response , paymentIntent = payment confirmation
        }).then(({ paymentIntent }) => {

            database.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            //clears the baskets after the purchase
            dispatch({
                type: "EMPTY_BASKET"
            })

            history.replace('/orders')
        } )
    }
    const handleChange = (event) => {
        //listen for changes and display errors if any...
        setDisabled(event.empty);
        setError(event.error ? event.error.message: "");

    }

    return(
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
                
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
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment__price_container'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <h3>Order Total: {value}</h3>

                                    </>    
                                )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Payment;