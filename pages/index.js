import React from 'react';
import Link from "next/link"
const Home = () => {
  return (
    <>
    <div className="wholepage bg-gray-200">
      <h1 className="text-gray-500 font-bold text-xl justify-end flex mr-10 pt-8">payments</h1>
      <div className=''>
      <div className="flex justify-center	gap-10 ">
        <button className="bg-blue-400 "><Link href="/toss">toss</Link></button>
        <button><Link href="/paypal">paypal</Link></button>
        <button><Link href="/kakaopay">kakao</Link></button>
        <button><Link href="/alipay">alipay</Link></button>
        <button>wechat pay</button>
      </div>
      </div>
      </div>
      
    </>
  )
}
export default Home;