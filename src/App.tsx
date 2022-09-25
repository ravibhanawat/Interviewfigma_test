import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Screen/Home/Home';
import Login from './components/Screen/Login/Login';
import Products from './components/Screen/Products/Products';

function App() {
  

  return (
  
  <>
  {/* hello */}
  <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/'  element={<Login />}/>
      {/* <Main /> */}

        
      </Routes>
  {/* <Login /> */}
  </>
  );
}

export default App;
