import { Injectable } from '@nestjs/common';
import axios from 'axios';
import Router from 'next/router';
import { useState } from 'react';

@Injectable()
export class KakaoService {

    getHelloKakao() {
        return 'hi kakao pay'
    }

    // To start genaral payment
    getPayStart(prodName: string) {
        const state = {
            next_redirect_pc_url: "",
            tid: "",
            params: {
                cid: "TC0ONETIME",
                partner_order_id: "aa",
                partner_user_id: "bb",
                item_name: prodName,
                quantity: 1,
                total_amount: 2200,
                vat_amount: 200,
                tax_free_amount: 0,
                approval_url: `http://localhost:3000/kakaopay/approve`,
                fail_url: "http://localhost:3000/kakaopay/approve",
                cancel_url: "http://localhost:3000/kakaopay/approve",
            },
        }

        const { params } = state;


        const startApi = axios({
            url: "https://kapi.kakao.com/v1/payment/ready",
            method: "POST",
            headers: {
                Authorization: "KakaoAK f9f3f640d486bb29837d2c0f4d095900",
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            params,
        })

        // const [url, setUrl] = useState("");
        // const [t, setT] = useState("")

        const takeUrl = startApi.then(function (res) {
            // const {
            //     data: { next_redirect_pc_url, tid }
            // } = res;

            // console.log(next_redirect_pc_url, "redirect_pc_url");
            // console.log(tid, "tid");
            // console.log(res, "res")
            /*   setUrl(next_redirect_pc_url)
              setT(tid) */
            // if (typeof window !== 'undefined') {
            //     window.localStorage.setItem("tid", res.data.tid);
            // }
            console.log("tid save", res.data.tid)
            return res.data;
        })


        // if (takeUrl) {
        //     console.log(takeUrl, "takeUrl")
        //     return takeUrl;
        // }else{
        //     console.log("err from takeUrl")
        // }
        return takeUrl
    }

    // To approve genaral payment
    getApprove(getKakaoPayToken, getTID) {

        // const state = {
        //     params: {
        //         cid: "TC0ONETIME",
        //         // localstorage에서 tid값을 읽어온다.
        //         //tid: window.localStorage.getItem("tid"),
        //         tid: getTID,
        //         partner_order_id: "partner_order_id",
        //         partner_user_id: "partner_user_id",
        //         pg_token: getKakaoPayToken,
        //     },
        // }
        // console.log(state.params.tid, "tid 저장 한 값");
        //const { params } = state;

        // if (typeof window !== 'undefined') {
        //     const getTID = window.localStorage.getItem("tid");
        //     console.log(getTID, "getTID")
        // }
        const approveApi = axios({
            url: "https://kapi.kakao.com/v1/payment/approve",
            method: "POST",
            headers: {
                Authorization: "KakaoAK f9f3f640d486bb29837d2c0f4d095900",
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            params: {
                cid: "TC0ONETIME",
                tid: getTID,
                partner_order_id: "aa",
                partner_user_id: "bb",
                pg_token: getKakaoPayToken,
            },
        })

        const result = approveApi.then(function (res) {
            console.log(res, "approve api result")
            return res.data
        })

        return result

        // .then((response) => {
        //     // 결제 승인에 대한 응답 출력
        //     console.log(response, "approve api response");
        // });

    }

    // To start regular payment
    getRegularPayStart(prodName: string) {

        const state = {
            next_redirect_pc_url: "",
            tid: "",
            params: {
                cid: "TCSUBSCRIP",
                partner_order_id: "aa_subscription",
                partner_user_id: "bb_subscription",
                item_name: prodName,
                quantity: 1,
                total_amount: 2200,
                vat_amount: 200,
                tax_free_amount: 0,
                approval_url: `http://localhost:3000/kakaopay/regularpay/approve`,
                fail_url: "http://localhost:3000/kakaopay/regularpay/approve",
                cancel_url: "http://localhost:3000/kakaopay/regularpay/approve",
            },
        }

        const { params } = state;


        const startApi = axios({
            url: "https://kapi.kakao.com/v1/payment/ready",
            method: "POST",
            headers: {
                Authorization: "KakaoAK f9f3f640d486bb29837d2c0f4d095900",
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            params,
        })


        const takeUrl = startApi.then(function (res) {

            console.log("tid save", res.data.tid)
            return res.data;
        })



        return takeUrl
    }


    //To approve regular payment
    getApproveRegular(getKakaoPayToken, getTID) {

        const approveApi = axios({
            url: "https://kapi.kakao.com/v1/payment/approve",
            method: "POST",
            headers: {
                Authorization: "KakaoAK f9f3f640d486bb29837d2c0f4d095900",
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            params: {
                cid: "TCSUBSCRIP",
                tid: getTID,
                partner_order_id: "aa_subscription",
                partner_user_id: "bb_subscription",
                pg_token: getKakaoPayToken,
            },
        })

        const result = approveApi.then(function (res) {
            console.log(res, "approve api result")
            return res.data
        })

        return result

    }

    getRegularPayAgain(prodName: string, getSID: string) {

        const RegularPayAgainApi = axios({
            url: "https://kapi.kakao.com/v1/payment/subscription",
            method: "POST",
            headers: {
                Authorization: "KakaoAK f9f3f640d486bb29837d2c0f4d095900",
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            params: {
                cid: "TCSUBSCRIP",
                sid: getSID,
                partner_order_id: "aa_subscription",
                partner_user_id: "bb_subscription",
                item_name: prodName,
                quantity: 1,
                total_amount: 2200,
                vat_amount: 200,
                tax_free_amount: 0,
            },
        })

        const result = RegularPayAgainApi.then(function (res) {
            console.log(res, "RegularPayAgainApi result")
            return res.data
        })

        return result
    }

    getSidKeyStatus(getSID: string) {
        const SidKeyStatusApi = axios({
            url: "https://kapi.kakao.com/v1/payment/manage/subscription/status",
            method: "POST",
            headers: {
                Authorization: "KakaoAK f9f3f640d486bb29837d2c0f4d095900",
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            params: {
                cid: "TCSUBSCRIP",
                sid: getSID
            },
        })

        const result = SidKeyStatusApi.then(function (res) {
            console.log(res, "SidKeyStatus Api res")
            return res.data;
        })
        return result
    }

    changeStatusInActive(getSID: string) {
        const changeStatusApi = axios({
            url: "https://kapi.kakao.com/v1/payment/manage/subscription/inactive",
            method: "POST",
            headers: {
                Authorization: "KakaoAK f9f3f640d486bb29837d2c0f4d095900",
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            params: {
                cid: "TCSUBSCRIP",
                sid: getSID
            },
        })

        const result = changeStatusApi.then(function (res) {
            console.log(res, "change status Inactive res")
            return res.data
        })

        return result
    }
}
