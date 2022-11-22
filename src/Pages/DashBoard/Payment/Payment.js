import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData()
    const {treatment, price, slot , appiontmentDate} = booking
    console.log(booking);
    return (
        <div>
            <h2 className='text-3xl'>Payment for {treatment}</h2>
            <p className="text-xl">Please Pay <strong>${price}</strong> for your appointment on {appiontmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;