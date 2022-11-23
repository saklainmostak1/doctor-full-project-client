import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({booking}) => {

    const [clientSecret, setClientSecret] = useState()
    const [cardError, setCardError] = useState('')
    const [seccess, setSeccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const {price, email, patient, _id} = booking

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json" ,
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
          body: JSON.stringify({ price }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);
    

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        setSeccess('')
        setProcessing(true)
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patient,
                  email: email,
                },
              },
            },
          );
         if(confirmError) {
            setCardError(confirmError.message)
            return
         }
         if(paymentIntent.status === 'succeeded'){
           console.log('card info', card);
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id,

            }
            fetch('http://localhost:5000/payments', {
               method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    setSeccess('Congrate! your payment complete')
                    setTransactionId(paymentIntent.id)
                }
            })

        }
        setProcessing(false)
         console.log('paymentIntent',paymentIntent);

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-primary mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
                    <p className='text-red-500'>{cardError}</p>
                    {
                        seccess && <div>
                            <p className="text-green-500">{seccess}</p>
                            <p>Your TransactionId: <span className='font-bold'></span> {transactionId} </p>
                        </div>
                    }
        </>
    );
};

export default CheckOutForm;