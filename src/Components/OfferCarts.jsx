import React from 'react'


function OfferCarts(props) {
  return (
    

<div class=' font-bold border-5 border-white  bg-white hover:shadow-2xl w-[690px]'>
      
<div>
  <img className='justify-items-center border-8 border-white' src={props.link}/>
</div>
<div className=' m-3'>
  <h1>{props.offer}</h1>
</div>
<div className='relative inline-flex p-2 gap-90 m-2 text-center'>
  <p> {props.Rs}</p>
  <button className='bg-green-800 h-8 w-40 text-white ' >Customies</button>
 </div>
</div>

  )
}

export default OfferCarts
