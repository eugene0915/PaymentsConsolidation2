import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';
import Link from 'next/link';

const paymentresult = () => {

    const url = useRouter();

    const [productName, setProductName] = useState("")
    const [userId, setUserID] = useState("")
    const [quantity, setQuantity] = useState("")
    const [sid, setSid] = useState("")

    useEffect(() => {

        const params = new URLSearchParams(url.asPath)
        setProductName(params.get("item_name"))
        setUserID(params.get("partner_user_id"))
        setQuantity(params.get("quantity"))
        setSid(params.get("sid"))



        // if (typeof window !== 'undefined') {
        //     const setSID = window.localStorage.setItem("sid", sid);
        //     console.log(setSID, "처음에 SID set 할때")
        // }

    }, [])

    const moveToPayAgain = () => {
        Router.push({
            pathname: '/kakaopay/regularpay',
            query: { sidkey: sid }
        })
    }


    return (<>
        <div>this is kakao <span style={{ color: "red" }}>regular payment</span> result page</div>
        <div> product ID : {userId}</div>
        <div> product name : {productName}</div>
        <div> quantity : {quantity}</div>
        <br />
        <div> this sid key is gonna be used our next regular payment</div>
        <div> sid key : {sid}</div>

        <br />
        <button onClick={moveToPayAgain}>go back to payment page! </button>

    </>)

};

export default paymentresult;