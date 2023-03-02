import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import Link from 'next/link';

const kakaopay = () => {
    const [prodName, setProdName] = useState("")

    const start = () => {
        // const state = {
        //     next_redirect_pc_url: "",
        //     tid: "",
        //     params: {
        //         cid: "TC0ONETIME",
        //         partner_order_id: "partner_order_id",
        //         partner_user_id: "partner_user_id",
        //         item_name: "엄마손파이",
        //         quantity: 1,
        //         total_amount: 2200,
        //         vat_amount: 200,
        //         tax_free_amount: 0,
        //         approval_url: "http://localhost:3000/kakaopay/paymentresult",
        //         fail_url: "http://localhost:3000/kakaopay/paymentresult",
        //         cancel_url: "http://localhost:3000/kakaopay/paymentresult",
        //     },
        // }

        // const { params } = state;

        // axios({
        //     url: "https://kapi.kakao.com/v1/payment/ready",
        //     method: "POST",
        //     headers: {
        //         Authorization: "KakaoAK f9f3f640d486bb29837d2c0f4d095900",
        //         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        //     },
        //     params,
        // }).then((res) => {
        //     const {
        //         data: { next_redirect_pc_url, tid }
        //     } = res;

        //     console.log(next_redirect_pc_url);
        //     console.log(tid);
        //     //Router.push(next_redirect_pc_url)
        // })

        axios({
            url: `http://localhost:3000/api/kakao/start/${prodName}`,
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
        }).then(function (res) {
            console.log(res.data, "payment ready 이후에")
            console.log(res, "payment ready 이후에")

            if (typeof window !== 'undefined') {
                const setTID = window.localStorage.setItem("tid", res.data.tid);
                console.log(setTID, "처음에 TID set 할때")
            }

            Router.push(res.data.next_redirect_pc_url)

        })


    }


    return (<>
        <div>this is <span style={{ color: "red" }}>general payment</span> page! pay with kakaopay!</div>
        <br />
        <div>product name : <input onChange={(e) => { setProdName(e.target.value) }} value={prodName}></input></div>
        <div>product price: 1000</div>
        <div> quantity: 1</div>

        <button onClick={start}>pay with KakaoPay</button>
        <br />
        <div style={{ marginTop: "60px" }}>if you want to try regular payment</div>
        <Link href={'/kakaopay/regularpay'}><button>move to regular payment page!</button></Link>
    </>)
};

export default kakaopay;