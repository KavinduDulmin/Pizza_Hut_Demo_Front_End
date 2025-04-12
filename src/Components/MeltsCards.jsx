import React from 'react'

function MeltsCards(props) {
  return (
    <div>
       <div class="justify-center">
         <div class='w-[300px] bg-white '>
        <img class="border-10 border-white" src={props.MeltsLink}/>
        <div class="p-2 m-2">
        <h1 class="font-bold m-2">{props.MeltsName}</h1>
      
      <p class="line-clamp-[4] flex justify-center ">{props.MeltsDiscription}</p>
      
      <br/>
      <hr class="border-1 border-gray-300"/>
    
      <a class="view-more-btn">view more</a>
      <h3 class="font-bold m-2">Select Sauce</h3>
      <select class="flex text-center justify-center bg-gray-200 w-[250px] h-8 rounded-sm m-2 font-bold ">
        <option >{props.chees}</option>
        <option>{props.Kotchi}  </option>
        <option>{props.Marinara}</option>
      </select>
      <div class="flex p-2 m-2 justify-center text-white font-bold">
      <button class="rounded-sm  text-center bg-green-700 h-[35px] w-[220px] ">Add {props.Price}</button>
      </div>
      </div>
    </div>
    
    </div>
    </div>
  )
}

export default MeltsCards
