import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import queryString from "query-string";
import axios from 'axios';
import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';

const paymentresult = () => {
    const url = useRouter();
    const [paidProductData, setPaidProductData] = useState([])

    useEffect(() => {
        getPaidInfo();

    }, [])


    function getPaidInfo() {
        const secret_key = 'test_sk_dP9BRQmyarYz0GBMlj98J07KzLNk'

        const params = new URLSearchParams(url.asPath)
        const getPaymentKey = params.get('paymentKey');
        const getAmount = params.get('amount');
        const getorderID = params.get('/toss/paymentresult?orderId');
        const q = queryString.parse(url.asPath)

        console.log(getAmount, "getAmount")
        console.log(typeof getAmount, "typeOf")
        console.log(getorderID, "getorderID")

        console.log(q, "q")

        // TODO: 승인 api가 두번 호출 되므로, 어디에서 중복되는 것인지 찾아야 함.
        const productInfoCheckApi = axios({
            //  url은 꼭 이걸로 사용!
            url: `http://localhost:3000/api/tosspayment/success?paymentKey=${getPaymentKey}&amount=${getAmount}&orderId=${getorderID}`,
            // url:'http://localhost:3000/api/tosspayment/success',
            method: "post",
            headers: { "Content-Type": "application/json" }
            // headers: {  Authorization:
            //     "Basic " + Buffer.from(secret_key + ":").toString("base64"),
            //     "Content-Type": "application/json" },
            // data:{
            //     orderId:getorderID, 
            //     paymentKey:getPaymentKey,
            //     amount:getAmount,
            // }
        })

        // return productInfoCheckApi.data;

        productInfoCheckApi.then(function (response) {
            console.log(response.data, "response.data");
            console.log(response.body, "response.body");
            setPaidProductData(response.data)
        })
    }

    return (<>
        <div> 토스 결제결과창</div>
        <div>구입 상품명: {paidProductData.orderName}</div>
        <div>구입 주문번호: {paidProductData.orderId}</div>
        <div>총 주문 가격: {paidProductData.balanceAmount}원</div>

    </>)

};

export default paymentresult;