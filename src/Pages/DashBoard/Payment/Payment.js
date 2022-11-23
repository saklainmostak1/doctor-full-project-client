import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';




const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData()
    // const navigation = useNavigation()
    const { treatment, price, slot, appiontmentDate } = booking
    // if(navigation.state === 'loading'){
    //     return <Loading></Loading>
    // }

    return (
        <div>
            <h2 className='text-3xl'>Payment for {treatment}</h2>
            <p className="text-xl">Please Pay <strong>${price}</strong> for your appointment on {appiontmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm 
                    booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;