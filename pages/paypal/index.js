import React, { useState, useEffect } from 'react';
import PaypalCheckoutButton from './paypalCheckoutButton';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

const Paypal = () => {

    const product = {
        description: "1월 사진 앨범",
        price: 10
    };

 

    return (<>
        {/* need to be fixed : client id should be passed from env file */}
        <PayPalScriptProvider options={{ "client-id": "AbQ6VT8hcDcLWkOmMDV389hsWlRNdjSWJoxT-STM5_PaNIgMFroyW-AQUgVfki_7lmQ6HwuolTu4be08" }}>
            <div>pay with paypal!</div>
            <div className='paypal-button-container'><PaypalCheckoutButton product={product} /></div>
            <div>paypal test account ID:sb-hbpsx24730786@personal.example.com  </div>
            <div>password is in the source code</div>
            {/* PW: bF0!{#XD */}



        </PayPalScriptProvider>
        
        </>)
};

export default Paypal;