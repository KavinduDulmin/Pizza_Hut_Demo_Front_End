import React from 'react'
import OfferCarts from './OfferCarts'

function AddOns() {
  return (
    <>
     <div class="text-2xl pt-5 m-3 text-center font-bold">
            <h1>Add-Ons</h1>
      </div>
      <div class="relative p-7  grid grid-cols-2 gap-5" >
      <OfferCarts offer="Melts Single Offer" Rs={"RS:450"} link="./src\assets\6.jpg"/>
      <OfferCarts offer="Personal Pizza Add on 01" Rs={"RS:500"} link="./src\assets\7.jpg"/>
      <OfferCarts offer="Personal Pizza Add on 02" Rs={"RS:800"} link="./src\assets\8.jpg"/>
      <OfferCarts offer="Medium Pizza Add On" Rs={"RS:1050"} link="./src\assets\9.jpg"/>
      <OfferCarts offer="Large Pizza Add On 1" Rs={"RS:1800"} link="./src\assets\10.jpg"/>
      
    </div>
    </>
   
  )
}

export default AddOns
