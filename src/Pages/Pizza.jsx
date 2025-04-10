import React from 'react'
import Delight from '../Components/Delight'


function Pizza() {
  return (
    <div>
      <div class="flex  m-3 gap-6 font-bold">
      <button class="bg-red-600 rounded-2xl text-white w-[200px] h-8 border-2 black ">Pan & Other Crusts</button>
      <button class="bg-white  rounded-2xl w-[150px] h-8 border-2 black hover:bg-red-600 hover:text-white "> Thin Crusts</button>
      </div>
      
      <Delight/>
    </div>
  )
}

export default Pizza
