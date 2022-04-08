import React from 'react';
import './App.css';
import { ToastContainer} from "react-toastify";

import StripeCheckoutButton from './StripeCheckoutButton';

function App() {

  const totalPrice = 2058;

  return (
    <div className="App">
      <header className="App-header">        
      <ToastContainer
                    pauseOnFocusLoss={true}
                    position={"top-right"}
                  />
        <h1>Tesla</h1>
        <div className="box">
        <img src="https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
        alt="" className="car">
          </img>
          </div>
        <p>
          Pay Total of $ {totalPrice}
        </p>
        <p>
          <StripeCheckoutButton price={totalPrice} />
        </p>
      </header>
    </div>
  );
}

export default App;