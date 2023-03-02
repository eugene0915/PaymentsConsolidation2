import React, { useState, useEffect } from 'react';
import NextDocument, { NextScript, DocumentContext, Html, Head, Main, } from 'next/document';
import Link from 'next/link';

const subscription = () => {

    // i was trying to connect paypal subscription script file to react, but it was failed.
    // so i found other the way to connect <a> tag and can subscribe start.

    // at the bottomm, "useEffect" part is script that i was struggle but couldnt solve.
    // just in case, i did not delete.
    // useEffect(() => {
    //     const jquery = document.createElement("script");
    //     jquery.src = "https://www.paypal.com/sdk/js?client-id=AWo8dOgjxLoZSNV6tyMpF_bOcnBZEYLtAoevEvsEHzeBdlz2Ni6eRLuPDgOhpaWBDvuRMm1HpHpOSv6m&vault=true&intent=subscription";
    //     jquery.async = true
    //     const j = document.head.appendChild(jquery);
    //     console.log(j, "jj")

    //     return () => {
    //         document.head.removeChild(jquery);

    //     }
    // }, []);

    const planid1 = "P-6G827600AU263621BMPH3XQQ"
    const planid2 = "P-6G827600AU263621BMPH3XQQ"

    return (<>
        <div>subscription with paypal!</div>
        <p>test product1</p>
        <p>plan id: {planid1}</p>
        <Link href={`https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=${planid1}`}>pay and subscribe start</Link>

        <br />
        <p>test product2</p>
        <p>plan id: {planid2} </p>
        <Link href={`https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=${planid2}`}>pay and subscribe start</Link>

    </>)

};

export default subscription;


