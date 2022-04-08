import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { loadStripe } from '@stripe/stripe-js';
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const myKey="pk_test_51Iit5TSA1fSdY1w9QYkfNNHwDLAspR8Qxa3idjfH1UjESpNPKtEyCclwogBZeQW00dZuWRxJ5mebPLiXtDbJeY5w00JZguEpXu"
const stripePromise = loadStripe(myKey);
const StripeCheckoutButton = async ({ price }) => {
    // const stripe = useStripe();
    // const  cardElement = useElements()
    const stripe = await stripePromise;
    const priceForStripe = price * 100;

    


    
    async function handleToken(token) {
      
        // const {paymentMethod, error} = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card: cardElement,
        //     billing_details: {
        //       name: 'Jenny Rosen',
        //     },
        //   });
         let payload = { "token": token ,"amt" :priceForStripe };  
      
        
        
         const res = await axios({
            method: 'post',
            url: 'http://localhost:4242/create-checkout-session',
         data: payload,
            
        }) 

        let data = res.data;

     
         const result = await stripe.redirectToCheckout({
            sessionId: data.data.id,
           });
        console.log(result);    

        const { status } = res.data;
        console.log("Response:", res.data);
        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }


    return (
        <StripeCheckout
            label='Pay Now'
            name='Tesla'
            billingAddress
            shippingAddress
            image='https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now '
             token={handleToken}            
            stripeKey={myKey}
            currency="USD"
            locale="us"
        />
    )
}

export default StripeCheckoutButton;