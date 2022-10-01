import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './paginas/login/Login';




function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> {/*Antigo Switch*/}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
              {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
            </Routes>
          </div>
        <Footer />
    </BrowserRouter >
  );
}

export default App;
