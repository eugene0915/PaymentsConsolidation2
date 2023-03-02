import React from 'react';
import Link from "next/link"
const Home = () => {
  return (
    <>
      <h1>payments</h1>
      <button><Link href="/toss">toss</Link></button>
      <button><Link href="/paypal">paypal</Link></button>
      <button><Link href="/kakaopay">kakao</Link></button>
      <button><Link href="/alipay">alipay</Link></button>
      <button>wechat pay</button>

    </>
  )
}
export default Home;