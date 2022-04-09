import React from 'react';
import './App.css';
import { ToastContainer} from "react-toastify";

import StripeCheckoutButton from './StripeCheckoutButton';
import Pay from './Pay';

function App() {

  const totalPrice = 2058;

  return (
    <div className="App">
    <h1> Welcome!</h1>
    <Pay />
    </div>

  
  );
}

export default App;