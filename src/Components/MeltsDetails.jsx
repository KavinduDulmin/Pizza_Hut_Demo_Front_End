import React from 'react'
import MeltsCards from './MeltsCards'

function MeltsDetails() {
  return (
    <>
     <div class="text-2xl pt-5 m-3 text-center font-bold">
            <h1>Melts Single</h1>
      </div>
    <div class="relative p-7  grid grid-cols-4 gap-5">
      <MeltsCards MeltsName="Cheeseburger Melts Single" chees="Cream Cheese" Kotchi=" Cheesy Kotchi" Marinara="Spicy Marinara" MeltsDiscription="A Crunchy folded dough Loaded with Chicken Bacon, Roast Chicken, Onion," MeltsLink="./src\assets\m2.jpg"Price="-RS:300.00"/>
      <MeltsCards MeltsName="Cheeseburger Melts Single" chees="Cream Cheese" Kotchi=" Cheesy Kotchi" Marinara="Spicy Marinara" MeltsDiscription="A Crunchy folded dough Loaded with Chicken Bacon, Roast Chicken, Onion," MeltsLink="./src\assets\M1.jpg"Price="-RS:300.00"/>
      <MeltsCards MeltsName="Cheeseburger Melts Single" chees="Cream Cheese" Kotchi=" Cheesy Kotchi" Marinara="Spicy Marinara" MeltsDiscription="A Crunchy folded dough Loaded with Chicken Bacon, Roast Chicken, Onion," MeltsLink="./src\assets\m3.jpg"Price="-RS:300.00"/>
      <MeltsCards MeltsName="Cheeseburger Melts Single" chees="Cream Cheese" Kotchi=" Cheesy Kotchi" Marinara="Spicy Marinara" MeltsDiscription="A Crunchy folded dough Loaded with Chicken Bacon, Roast Chicken, Onion," MeltsLink="./src\assets\M1.jpg"Price="-RS:300.00"/>
    </div>

    <div class="text-2xl pt-5 m-3 text-center font-bold">
            <h1>Melts</h1>
      </div>
    <div class="relative p-7  grid grid-cols-4 gap-5">
      <MeltsCards MeltsName="Cheeseburger Melts Single"chees="Cream Cheese" Kotchi=" Cheesy Kotchi" Marinara="Spicy Marinara" MeltsDiscription="A Crunchy folded dough Loaded with Chicken Bacon, Roast Chicken, Onion," MeltsLink="./src\assets\Ms1.jpg"Price="-RS:1300.00"/>
      <MeltsCards MeltsName="Cheeseburger Melts Single" chees="Cream Cheese" Kotchi=" Cheesy Kotchi" Marinara="Spicy Marinara" MeltsDiscription="A Crunchy folded dough Loaded with Chicken Bacon, Roast Chicken, Onion," MeltsLink="./src\assets\Ms2.jpg"Price="-RS:2300.00"/>
      <MeltsCards MeltsName="Cheeseburger Melts Single" chees="Cream Cheese" Kotchi=" Cheesy Kotchi" Marinara="Spicy Marinara" MeltsDiscription="A Crunchy folded dough Loaded with Chicken Bacon, Roast Chicken, Onion," MeltsLink="./src\assets\Ms3.jpg"Price="-RS:1200.00"/>
      
    </div>

    <div class="text-2xl pt-5 m-3 text-center font-bold">
            <h1>Dips</h1>
      </div>
    <div class="relative p-7  grid grid-cols-4 gap-5">
      <MeltsCards MeltsName="Spicy Marinara Dip"  MeltsLink="./src\assets\m5.jpg"Price="-RS:150.00"/>
      <MeltsCards MeltsName="Cheesy Kotchchi Dip"  MeltsLink="./src\assets\m6.jpg"Price="-RS:150.00"/>
      </div>
    </>
   
  )
}

export default MeltsDetails
