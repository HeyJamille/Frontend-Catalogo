import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Loja from './pages/Loja';
import Carrinho from './pages/Carrinho';
import Cadastro from './pages/Cadastro';

const Routes_front = () => {
  return (
    <Routes>
      <Route exact path="/" Component={ Login } />
      <Route path="/cadastro" Component={ Cadastro } />
      <Route path="/loja" Component={ Loja } />
      <Route path="/carrinho" Component={ Carrinho } />
    </Routes>
  );
}

export default Routes_front;
