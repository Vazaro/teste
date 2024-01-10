import './App.css';
import React from 'react';
import Home from './components/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './components/contato/contato';
import Fotos from './components/fotos/fotos';
import Detalhes from './components/detalhes/detalhes';

function App() {

  return (
  <BrowserRouter> 
    <Routes>
      <Route path='/' element={<Home />}/> 
      <Route path='/contato' element={<Contato />}/> 
      <Route path='/Fotos' element={<Fotos />}/> 
      <Route path='/detalhes/:id' element={<Detalhes />}/> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;