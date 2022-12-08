import React from "react";
import { BrowserRouter,Route,Routes, } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Caja from "./components/Caja";

function App() {
  return (
   <>
   <p>hola</p>
    <Navbar/>
    <ItemListContainer>
    <Caja valor="$5500">
    </Caja>
    </ItemListContainer>  
    <Footer/>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
      </Routes>
    </BrowserRouter>
   </>  
  );
}

export default App;
