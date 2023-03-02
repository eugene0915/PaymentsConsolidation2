import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import queryString from "query-string";


const approve = () => {
    const url = useRouter();

    const movetoApproveRegular = () => {
        const params = new URLSearchParams(url.asPath)
        const getKakaoPayToken = (params.get("/kakaopay/regularpay/approve?pg_token"))
        console.log(getKakaoPayToken, "getKakaoPayToken ")

        if (typeof window !== 'undefined') {
            const getTID = window.localStorage.getItem("tid");
            console.log(getTID, "앞 화면에서 getTID")

            axios({
                url: `http://localhost:3000/api/kakao/approveregular/${getKakaoPayToken}/${getTID}`,
                method: "get",
                headers: {
                    "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                },
            }).then(function (res) {
                console.log(res.data, "payment approve 이후에")
                console.log(res, "payment approve 이후에")

                if (res.data === null) {
                    // pay approve failed, so user need to go back payment page again
                    Router.push("/kakaopay/regularpay")
                } else {
                    // pay approve success. user move to payment result page

                    const query = queryString.stringify(res.data);
                    Router.push(`/kakaopay/regularpay/paymentresult?${query}`)

                }

            })

        }
    };

    return (<>
        <div>this is regular pay approve page!</div>
        <button onClick={movetoApproveRegular}>move to approve! click!</button>

    </>)

};

export default approve;