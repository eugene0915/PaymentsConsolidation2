import React from 'react';
import Link from "next/link"
const Home = () => {
  return (
    <>
      <h1 className="text-pink-400">payments</h1>
      <div className="flex justify-center	gap-10 align-middle h-screen">
        <button className="bg-blue-400 "><Link href="/toss">toss</Link></button>
        <button><Link href="/paypal">paypal</Link></button>
        <button><Link href="/kakaopay">kakao</Link></button>
        <button><Link href="/alipay">alipay</Link></button>
        <button>wechat pay</button>
      </div>
      <button clssName="dbtn">test</button>
    </>
  )
}
export default Home;