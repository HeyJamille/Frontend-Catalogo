import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const validate = () => {
    if (!email && !password) {
      setErrors('Por favor, insira um e-mail e uma senha');
      return false;
    } else if (!email) {
      setErrors('Por favor, insira um e-mail');
      return false;
    } else if (!password) {
      setErrors('Por favor, insira uma senha');
      return false;
    }
    setErrors('');
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios.post('http://localhost:3001/login',
          { email, password },
          {
            headers: { 'Content-Type': 'application/json' }
          }
        );
        setSuccess('✅ Login realizado com sucesso!');
        setErrors('');
        setTimeout(() => {
          navigate('/loja');
        }, 1500);
      } catch (error) {
        setSuccess('');
        if (!error?.response) {
          setErrors("Erro ao acessar o servidor.");
        } else if (error.response.status === 401) {
          setErrors("Usuário ou senha inválidos.");
        }
      }
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-4">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-10 transition duration-300">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">Bem-vindo(a) 👋</h1>

        {/* Alerta de sucesso */}
        {success && (
          <div className="mb-6 p-4 rounded-xl bg-green-100 border border-green-300 text-green-800 text-sm text-center transition duration-300">
            {success}
          </div>
        )}

        {/* Alerta de erro */}
        {errors && (
          <div className="mb-6 p-4 rounded-xl bg-red-100 border border-red-300 text-red-700 text-sm text-center transition duration-300">
            {errors}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ${
                errors && !email ? 'border-red-500' : 'border-gray-300'
              }`}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">Senha</label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua senha"
              className={`w-full p-3 pr-12 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ${
                errors && !password ? 'border-red-500' : 'border-gray-300'
              }`}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-[50px] transform -translate-y-1/2 text-gray-500 hover:text-indigo-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
          >
            Entrar
          </button>

          <div className="text-center text-sm text-gray-600 mt-2">
            Não tem uma conta?
            <Link to="/cadastro" className="text-indigo-600 font-semibold hover:underline ml-1">
              Cadastre-se
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
