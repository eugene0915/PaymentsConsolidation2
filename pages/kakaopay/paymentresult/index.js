import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';
import Link from 'next/link';

const paymentresult =()=>{
 const url = useRouter();

 const [productName, setProductName] =useState("")
 const [userId, setUserID] = useState("")
 const [quantity, setQuantity] = useState("")

    useEffect(()=>{
        const params = new URLSearchParams(url.asPath)
        setProductName(params.get("item_name"))
        setUserID(params.get("partner_user_id"))
        setQuantity(params.get("quantity"))

          
    },[])

 return(<>
 <h2>this is kakaopay payment result page</h2>
<div> product ID : {userId}</div>
<div> product name : {productName}</div>
<div> quantity : {quantity}</div>
<br/>

<div>thank you for buying</div>
<Link href={'/kakaopay'}><button>go back to payment page! </button></Link>
 </>)

};

export default paymentresult;