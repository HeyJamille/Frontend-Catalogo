import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const validate = () => {
    if (!nome || !email || !senha) {
      setErrors('Preencha todos os campos.');
      return false;
    }
    setErrors('');
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios.post('http://localhost:3001/cadastro', {
          nome,
          email,
          senha
        }, {
          headers: { 'Content-Type': 'application/json' }
        });

        alert('Cadastro realizado com sucesso!');
        navigate('/');
      } catch (error) {
        if (!error?.response) {
          setErrors('Erro ao conectar com o servidor.');
        } else {
          setErrors('Erro ao realizar cadastro. Verifique os dados e tente novamente.');
        }
      }
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-4">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-10 transition duration-300">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">Crie sua conta ✨</h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-1">Nome</label>
            <input
              id="nome"
              type="text"
              placeholder="Seu nome completo"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <label htmlFor="senha" className="block text-sm font-semibold text-gray-700 mb-1">Senha</label>
            <input
              id="senha"
              type={showPassword ? 'text' : 'password'}
              placeholder="Crie uma senha segura"
              className="w-full p-3 pr-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
              onChange={(e) => setSenha(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-[50px] transform -translate-y-1/2 text-gray-500 hover:text-indigo-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {errors && <div className="text-red-600 text-sm">{errors}</div>}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
          >
            Cadastrar
          </button>

          <div className="text-center text-sm text-gray-600 mt-2">
            Já tem uma conta?
            <Link to="/" className="text-indigo-600 font-semibold hover:underline ml-1">
              Faça login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Cadastro;
