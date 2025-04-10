import React from 'react'
import MenuLinks from './MenuLinks'

function Navbar() {
  return (
    
    <div class="bg-white h-40 p-5 font-bold">
    <div class="relative inline-flex  gap-220">
  <div class="relative inline-flex  ">
    <img class="  w-[60px] h-[60px]" src='./src\assets\pizza.png'/>
    <h3 class=' w-40 p-2 text-2xl'>Pizza Hut</h3>
  </div>
  
  <div className='relative inline-flex justify-end'>
    <button class=" hover:bg-red-600 hover:text-white w-70 h-8 rounded-2xl" url="#">Let's Start Your Order Now</button>
    </div>
  </div>
   
  <hr class="border-1 border-gray-300"/>
  <div class="flex flex-row justify-center  ">
  <MenuLinks linkname="Deals" url="/deals"/>
  <MenuLinks linkname="Pizza" url="/pizza"/>
  <MenuLinks linkname="Melts" url="/melts"/>
  <MenuLinks linkname="Rice & Pasta" url="/RiceAndPasta"/>
  <MenuLinks linkname="Appetizers" url="/appetizers"/>
  <MenuLinks linkname="Desserts" url="/desserts"/>
  <MenuLinks linkname="Drinks" url="/drinks"/>
 
  </div>
  
   </div>
    
  
  )
}

export default Navbar
