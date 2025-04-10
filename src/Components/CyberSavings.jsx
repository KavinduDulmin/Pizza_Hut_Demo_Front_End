import React from 'react'
import OfferCarts from './OfferCarts'

function CyberSavings() {
  return (
    <>
     <div class="text-2xl pt-5 m-3 text-center font-bold">
            <h1>Cyber Savings</h1>
      </div>
      <div class="relative p-7  grid grid-cols-2 gap-5" >
      <OfferCarts offer="Cyber Saving Offer 1" Rs={"RS:4400"} link="./src\assets\2.jpg"/>
      <OfferCarts offer="Cyber Saving Offer 2" Rs={"RS:2950"} link="./src\assets\3.jpg"/>
      
    </div>
    </>
   
  )
}

export default CyberSavings
