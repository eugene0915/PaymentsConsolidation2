import React, { useState } from 'react';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useFormik } from 'formik'
import Router from 'next/router'
import queryString from 'query-string'
import axios from 'axios'

const toss = () => {
    const clientKey = 'test_ck_4Gv6LjeKD8aR0x5EnNx3wYxAdXy1'
    const [formData, setFormData] = useState({});




    // const formik = useFormik({

    //     initialValues: {
    //         /*  pg: 'html5_inicis',
    //          pay_method: 'card',
    //          merchant_uid: `mid_${new Date().getTime()}`, */
    //         name: '',
    //         amount: '',
    //         buyer_name: '',
    //         buyer_tel: '',
    //         buyer_email: '',
    //         buyer_addr: '',
    //         buyer_postalcode: ''

    //     },
    //     onSubmit: (data) => {
    //         setFormData(data);
    //         console.log('formik.values', data)

    //         formik.resetForm();
    //         openpayment(data);
    //     }
    // },)


    const openpayment = () => {

        loadTossPayments(clientKey).then(tossPayments => {
            tossPayments.requestPayment('카드', {
                amount: 100,
                orderId: 'F5pLN-Fo3C0pz1QZ4U5S11',
                orderName: '무선마우스',
                customerName: '이유진',
                successUrl: `http://localhost:3000/toss/paymentresult`,
                failUrl: 'http://localhost:3000/toss/paymentresult',
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

    //ToDo 
    // 에러와 성공했을때의 분기 처리가 필요. 실제 데이터로 구입했을 때에, 어느 차이로 구분하는지 알아내야함.
    // ex) 무엇이 false가 무엇이 success가 뜬다던지..

    // input box에 타이핑해서 구매 내역 들어가게 만들기 

    return (<>
        <div className="wrapper">
            <div className="header">Toss Payment test (토스 페이먼트 테스트)</div>
            {/* <form className="formcontainer">


                <div className="field">
                     <span>
                        <label htmlFor="pg">
                            <span className="red">*</span>
                            pg corporation <br />(pg사)</label>
                        <select className="justify-content" name="pg" id="pg" value={formData.pgs} onChange={formik.handleChange}>
                            {PGS.map((li) => {
                                return (<option value={li.value} key={li.label}>{li.label}</option>)
                            })}
                        </select>
                    </span> 

                </div>
                <div className="field">
                    <span>
                        <label htmlFor="pay_method">
                            <span className="red">*</span>
                            pay method <br />(결제 방법)</label>
                         <select name="pay_method" id="pay_method" value={formData.pay_method} onChange={formik.handleChange}>
                            {METHODS_FOR_INICIS.map((li) => {
                                return (<option value={li.value} key={li.label}>{li.label}</option>)
                            })}
                        </select> 
                    </span>
                </div>
                <div className="field">
                    <span className="p-float-label">
                        <label htmlFor='name'>
                            <span className="red">*</span>
                            product name <br />(상품명)</label>

                        <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange}></InputText>
                    </span>
                </div>
                <div className="field">
                    <span className="p-float-label">
                        <label htmlFor='amount'>
                            <span className="red">*</span>
                            product price <br />(상품 가격)</label>
                        <InputText id="amount" name="amount" value={formik.values.amount} onChange={formik.handleChange}></InputText>
                    </span>
                </div>
                <div className="field">
                    <span className="p-float-label">
                        <label htmlFor='buyer_name'>name(이름)</label>
                        <InputText id="buyer_name" name="buyer_name" value={formik.values.buyer_name} onChange={formik.handleChange}></InputText>
                    </span>
                </div>
                <div className="field">
                    <span className="p-float-label">
                        <label htmlFor='buyer_tel'>phone number <br />(전화번호)</label>
                        <InputText id="buyer_tel" name="buyer_tel" value={formik.values.buyer_tel} onChange={formik.handleChange}></InputText>
                    </span>
                </div>
                <div className="field">
                    <span className="p-float-label">
                        <label htmlFor='buyer_email'>email(이메일)</label>
                        <InputText id="buyer_email" name="buyer_email" value={formik.values.buyer_email} onChange={formik.handleChange}></InputText>
                    </span>
                </div>
                <div className="field">
                    <span className="p-float-label">
                        <label htmlFor='buyer_addr'>address(주소)</label>
                        <InputText id="buyer_addr" name="buyer_addr" value={formik.values.buyer_addr} onChange={formik.handleChange}></InputText>
                    </span>
                </div>
                <div className="field">
                    <span className="p-float-label">
                        <label htmlFor='buyer_postalcode'>postal code <br />(우편번호)</label>
                        <InputText id="buyer_postalcode" name="buyer_postalcode" value={formik.values.buyer_postalcode} onChange={formik.handleChange}></InputText>
                    </span>
                </div>

                <div>The information next to the <span className="red">*</span> must be written down
                    <br />for test, product price should be at least 100 won.
                </div>

                <Button onClick={openpayment} type="submit" label="payment(결제하기)" className="mt-2" />
            </form> */}
            <Button onClick={openpayment} type="submit" label="payment(결제하기)" className="mt-2" />
        </div>


    </>)

};

export default toss;