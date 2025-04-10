import React from 'react'

function PIzzaCarts(props) {
  return (
    <div class="p-2 m-2 justify-center">
         <div class='w-[300px] bg-white '>
        <img class="border-10 border-white" src='./src\assets\p1.jpg'/>
        <div class="p-2 m-2">
        <h1 class="font-bold">{props.PizzaName}</h1>
      
      <p class="flex justify-center">{props.PizzaDiscription}</p>
      
      <br/>
      <hr class="border-1 border-gray-300"/>
      
      <h3 class="font-bold">Select your crust</h3>

      <select class="flex justify-center bg-gray-200 w-[250px] h-8 rounded-sm m-2">
        <option>Pan</option>
        <option>Sausage</option>
      </select>
      
      <h3 class="font-bold">Select Size</h3>
      <select class="flex justify-center bg-gray-200 w-[250px] h-8 rounded-sm m-2">
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
      <div class="flex p-2 m-2 justify-center text-white font-bold">
      <button class="rounded-sm  text-center bg-green-700 h-[35px] w-[220px] ">Add {props.Price}</button>
      </div>


        </div>
      
     
     
    </div>
    </div>
   
  )
}

export default PIzzaCarts
