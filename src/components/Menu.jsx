import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu, IoMdClose } from 'react-icons/io';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-indigo-600 shadow-md">
      {/* Topbar */}
      <div className="flex justify-between items-center px-6 py-4 md:py-5 md:px-10">
        <Link to="/" className="text-2xl font-bold text-white tracking-wide">
          Minha Loja
        </Link>

        {/* Menu button (mobile only) */}
        <button onClick={handleToggle} className="md:hidden text-white">
          {isOpen ? <IoMdClose size={28} /> : <IoIosMenu size={28} />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-10 text-white text-lg font-medium">
          <Link to="/loja" className="hover:text-indigo-300 transition">Itens</Link>
          <Link to="/carrinho" className="hover:text-indigo-300 transition">Carrinho</Link>
          <Link to="/" className="hover:text-indigo-300 transition">Login</Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-white w-full flex flex-col items-center gap-6 py-6 text-xl text-gray-700 border-t shadow-md">
          <Link to="/loja" onClick={handleClose} className="hover:text-indigo-600 transition">🛍️ Itens</Link>
          <Link to="/carrinho" onClick={handleClose} className="hover:text-indigo-600 transition">🧺 Carrinho</Link>
          <Link to="/" onClick={handleClose} className="hover:text-indigo-600 transition">🔐 Login</Link>
        </nav>
      )}
    </header>
  );
};

export default Menu;
