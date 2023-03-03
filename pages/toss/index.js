import React, { useState } from 'react';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { Button } from 'primereact/button';
import Link from 'next/link';

const toss = () => {
    const clientKey = 'test_ck_4Gv6LjeKD8aR0x5EnNx3wYxAdXy1'
  
    const [prodName, setProdName] = useState("")
    const [customerName, setCustomerName] = useState("")
    const [orderID, setOrderID] = useState("")

    const openpayment = () => {

        loadTossPayments(clientKey).then(tossPayments => {
            tossPayments.requestPayment('카드', {
                amount: 100,
                orderId: orderID,
                orderName: prodName,
                customerName: customerName,
                successUrl: `http://localhost:3000/toss/approve`,
                failUrl: 'http://localhost:3000/toss',
            })
                .catch(function (error) {
                    if (error.code === 'USER_CANCEL') {
                        // 결제 고객이 결제창을 닫았을 때 에러 처리
                    } else if (error.code === 'INVALID_CARD_COMPANY') {
                        // 유효하지 않은 카드 코드에 대한 에러 처리
                    }
                })
        })

    };

   
    return (<>
        <div className="wrapper">
            <div className="header">Toss Payment general</div>
            <div>product name :<input onChange={(e)=>{setProdName(e.target.value)}} value={prodName}></input></div>
            <div>product price : 100 won</div>
            <div>customer name :<input onChange={(e)=>{setCustomerName(e.target.value)}} value={customerName}></input></div>
            
            <div> order id : <input onChange={(e)=>{setOrderID(e.target.value)}} value={orderID}></input></div>
            <div style={{color:"red"}}>order ID must be at least 6 characters long.  </div>
            <Button onClick={openpayment} label="payment" className="mt-2" />
        </div>
        <div>if you want to test regular payment, click</div>
        <Link href={'/toss/regularpay'}><button>move to test regular payment</button></Link>

    </>)

};

export default toss;