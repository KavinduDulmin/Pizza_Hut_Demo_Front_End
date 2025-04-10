import './App.css'

import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home';
import Deals from './Pages/Deals';
import Pizza from './Pages/Pizza';
import Desserts from './Pages/Desserts';
import Appetizers from './Pages/Appetizers';
import Drinks from './Pages/Drinks';
import RiceAndPasta from './Pages/RiceAndPasta';
import Melts from './Pages/Melts';




function App() {
  

  return (
    <div class="bg-gray-200"> 
   
    <Navbar/>
    
  
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/desserts" element={<Desserts />} />
      <Route path="/appetizers" element={<Appetizers />} />
      <Route path="/drinks" element={<Drinks />} />
      <Route path="/riceandpasta" element={<RiceAndPasta />} />
      <Route path="/melts" element={<Melts />} />
      <Route path="/pizza" element={<Pizza />} />
      
    </Routes>
  </BrowserRouter>


 
     
     


      </div>
  )
}

export default App
