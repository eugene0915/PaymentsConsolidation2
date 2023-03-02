import { PayPalButtons } from '@paypal/react-paypal-js'
import Router from 'next/router';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Link from 'next/link';
import paymentresult from './paymentresult';

const PaypalCheckoutButton = (props) => {
    const { product } = props;
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const [info, setInfo] = useState([]);
    // const navigate = useNavigate();

    const handleApprove = (orderID) => {
        console.log(orderID, "approved orderID")

        // callback function to fulfill order

        // if response is success
        setPaidFor(true);
        // refresh user's account or subscription status

        //if response is error

    };

    if (paidFor) {
        // redirect to success page
        alert("thank you for your purchase");
        Router.push({
            pathname: 'paypal/paymentresult',
            query: { buyingID: info.id, payer: info.payer.name.given_name, productName: info.purchase_units[0].description, productPrice: info.purchase_units[0].amount.value }
        }, '/paypal/paymentresult')

    }

    if (error) {
        // redirect to fail page
        alert(error);
    }



    return (<>
        <PayPalButtons
            onClick={(data, actions) => {
                //validate on button click,  client or server side
                const hasAlreadyBoughtCourse = false

                if (hasAlreadyBoughtCourse) {
                    setError("you already bought this product.")
                    return actions.reject();
                } else {
                    return actions.resolve();
                }

            }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                })
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order, "order");
                setInfo(order)
                handleApprove(data.orderID);
            }}
            onCancel={() => {
                // redirect user to cancel page or back to cart

            }}
            onError={(err) => {
                setError(err);
                console.log(err, "paypal purchase error");
            }}
        />
    </>)
};

export default PaypalCheckoutButton;