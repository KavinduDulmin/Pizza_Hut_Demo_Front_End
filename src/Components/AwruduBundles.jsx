import React from 'react'
import OfferCarts from './OfferCarts'

function AwruduBundles() {
  return (
    <>
     <div class="text-2xl pt-5 m-3 text-center font-bold">
            <h1>Avrudu Bundles</h1>
      </div>
      <div class="relative p-7  grid grid-cols-2 gap-5" >
      <OfferCarts offer="Offer 01 - Avrudu Bundles " Rs={"RS:4300"} link="./src\assets\1.jpg"/>
      <OfferCarts offer="Offer 02 - Avrudu Bundles " Rs={"RS:2300"} link="./src\assets\4.jpg"/>
      <OfferCarts offer="Offer 03 - Avrudu Bundles " Rs={"RS:3200"} link="./src\assets\5.jpg"/>
    </div>
    </>
   
  )
}

export default AwruduBundles
