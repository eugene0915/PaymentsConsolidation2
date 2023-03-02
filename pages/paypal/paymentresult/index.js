import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';

const paymentresult = () => {
    const router = useRouter();
    const { query: { buyingID, payer, productName, productPrice } } = router
    const props = { buyingID, payer, productName, productPrice }



    return (<div>
        paypal payment result


        <div> payment buying ID : {props.buyingID}</div>
        <div> name : {props.payer}</div>
        <div> product name : {props.productName}</div>
        <div> product price : {props.productPrice}</div>


    </div>
    )
};

export default paymentresult;