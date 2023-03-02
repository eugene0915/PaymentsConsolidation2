import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import queryString from "query-string";


const regularpay = () => {
    const url = useRouter();

    const [prodName, setProdName] = useState("")
    const [prodName2, setProdName2] = useState("")

    //check sid key status
    const [mySidKey, setMySidKey] = useState("")
    const [sidKeyStatus, setSidKeyStatus] = useState("")

    // make status of sid key inactive
    const [SidKeyInActive, setSidKeyInActive] = useState("")
    const [statusInActive, setStatusInActive] = useState("")

    const startRegularPay = () => {

        axios({
            url: `http://localhost:3000/api/kakao/startregular/${prodName}`,
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
        }).then(function (res) {
            console.log(res.data, "regular payment ready 이후에")

            if (typeof window !== 'undefined') {
                const setTID = window.localStorage.setItem("tid", res.data.tid);
                console.log(setTID, "처음에 TID set 할때")
            }

            Router.push(res.data.next_redirect_pc_url)

        })
    };

    const [sidKey, getSidKey] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(url.asPath)
        getSidKey(params.get("/kakaopay/regularpay?sidkey"))

    }, [])

    const startRegularPayAgain = () => {

        axios({
            url: `http://localhost:3000/api/kakao/regularagain/${prodName2}/${sidKey}`,
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
        }).then(function (res) {
            console.log(res.data, "regular payment again 이후에")

            if (res.data === null) {
                // regular pay again failed
                alert("payment again failed, try again")
            } else {
                // pay approve success. user move to payment result page

                const query = queryString.stringify(res.data);
                Router.push(`/kakaopay/regularpay/paymentresult?${query}`)

            }
        })

    };

    const checkSidkeyStatus = () => {

        axios({
            url: `http://localhost:3000/api/kakao/sidkeystatus/${mySidKey}`,
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
        }).then(function (res) {
            console.log(res.data, "checkSidkeyStatus res")
            setSidKeyStatus(res.data.status)
        })

    };

    const changeStatusInActive = () => {

        axios({
            url: `http://localhost:3000/api/kakao/inactive/${SidKeyInActive}`,
            method: "get",
            headers: {
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
        }).then(function (res) {
            console.log(res.data, "change Inactive res")
            setStatusInActive(res.data.status)
        })
    };



    return (<>
        <div>this is regularpayment page!</div>
        <br />
        <h3>step1. fill in the blank</h3>
        <div>product name : <input onChange={(e) => { setProdName(e.target.value) }} value={prodName}></input></div>
        <div>product price: 1000</div>
        <div> quantity: 1</div>
        <h3>step2. click ↓</h3>
        <button onClick={startRegularPay}>Kakao regular pay start!</button>

        <br />
        <h3>step3. fill in the blank</h3>
        <div style={{ color: "red" }}>now user has sid key through step1,2. using sid key, user can start step 3,4</div>
        <div>in this step, user has already started subscription and has a sid key. payment is quick and easy. Don't need to scan QR code and to waste of time</div>
        <br />
        <div>product name : <input onChange={(e) => { setProdName2(e.target.value) }} value={prodName2}></input></div>
        <div>product price: 1000</div>
        <div>quantity: 1</div>
        {sidKey ? <div>sidkey: {sidKey}</div> : null}
        <h3>step4. click ↓</h3>
        <button onClick={startRegularPayAgain}>Kakao regular pay Again!</button>

        <div>------------------------------------------------------------------</div>
        <h4>another step 1</h4>
        <div>in this stage, can check sid key is available or not</div>
        <div>sid key : <input onChange={(e) => { setMySidKey(e.target.value) }} value={mySidKey}></input>
            {sidKeyStatus ? <span>{sidKeyStatus}</span> : null}
        </div>
        <button onClick={checkSidkeyStatus}>check sid key status</button>

        <h4>another step 2</h4>
        <div>in this stage, administrator can make sid key inactive</div>
        <div>sid key : <input onChange={(e) => { setSidKeyInActive(e.target.value) }} value={SidKeyInActive}></input>
            {statusInActive ? <span>{statusInActive}</span> : null}
        </div>
        <button onClick={changeStatusInActive}>change status inactive</button>

    </>)

};

export default regularpay;