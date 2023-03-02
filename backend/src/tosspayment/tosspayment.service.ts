import { Injectable, Query } from '@nestjs/common';
import axios from 'axios';
import { PaymentDto } from './dto/payment.dto';

@Injectable()
export class TosspaymentService {

    getHello(@Query('name') name: string, @Query('age') age: string): string {
        return `이름: ${name}, 나이:${age}`;

    }


    async requestTossPayment(@Query('orderId') orderId: string, @Query('paymentKey') paymentKey: string, @Query('amount') amount: string) {

        const secret_key = 'test_sk_dP9BRQmyarYz0GBMlj98J07KzLNk'
        console.log(orderId, "orderId from service.ts")
        console.log(paymentKey, "paymentKey")
        console.log(amount, "amount")

        // const openPayModal = await axios({
        //     url: `https://api.tosspayments.com/v1/payments/${paymentKey}`,
        //     method: "get",
        //     headers: {
        //         Authorization:
        //             "Basic " + Buffer.from(secret_key + ":").toString("base64"),
        //         "Content-Type": "application/json",
        //     },
        //     responseType: "json",



        // })
        // return openPayModal.data;

        // 승인 api 이게 꼭 필요한가.. 체크, 중복된 게 아닌가?
        const openPayModal = await axios({
            url: "https://api.tosspayments.com/v1/payments/confirm",
            method: "post",
            headers: {
                // Authorization: 'Basic dGVzdF9za19kUDlCUlFteWFyWXowR0JNbGo5OEowN0t6TE5rOg==',
                Authorization:
                    "Basic " + Buffer.from(secret_key + ":").toString("base64"),
                'Content-Type': 'application/json'
            },
            data: {
                orderId: orderId,
                paymentKey: paymentKey,
                amount: amount

            },
            responseType: "json"
        })
        // .then(function (response) {
        //     console.log(response.data, "after confirm API")
        // })
        return openPayModal.data;

    }

    paymentfail(): string {
        return '구매에 실패했습니다. 다시 시도해주세요'
    }
}
