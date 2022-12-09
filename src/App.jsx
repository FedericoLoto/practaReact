import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import Footer from "./components/Footer";
import Caja from "./components/Caja";

function App() {
  return (
   <>
    
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/juegos" element={<ItemList/>} />
        <Route path="/juegos/mario" element={<Item/>} />
      </Routes>
      <ItemListContainer>
    <Caja valor="$5500">
    </Caja>
    </ItemListContainer>  
    <Footer/>
    </BrowserRouter>
   </>  
  );
}

export default App;
