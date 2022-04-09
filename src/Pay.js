
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_");

export default function Pay() {
  const [message, setMessage] = useState("");  

  const clickHandler = async(e) =>{
    const stripe = await stripePromise;
    const res = await axios({
      method: 'post',
      url: 'http://localhost:4242/create-checkout-session' 
      
    })
    console.log(res.data.id)
    const result = await stripe.redirectToCheckout({
      sessionId: res.data.id,
    });
    console.log(result)
    if (result.error) {
      alert(result.error.message);
    }
  }
  

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
       setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);


 
  return (
    <>

<button onClick={clickHandler}>
    Pay
  </button>
    {message ?
      <> 
      <h1>{message}</h1> 
      </>
       :false
      }
   
 
  </>
   )
}