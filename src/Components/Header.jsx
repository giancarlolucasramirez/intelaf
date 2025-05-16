import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://www.intelaf.com/images/logo.png"
          alt="Intelaf Logo"
          className="h-10"
        />
      </div>

      {/* Categorías y búsqueda */}
      <div className="flex-1 flex items-center gap-4 mx-6">
        <button className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
          <svg width="20" height="20" fill="currentColor" className="inline">
            <circle cx="10" cy="10" r="8" />
          </svg>
          Categorías
        </button>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Buscar en Intelaf"
            className="w-full border rounded-full px-4 py-2 pl-4 pr-10 bg-gray-100"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-orange-500">
            <svg width="20" height="20" fill="currentColor">
              <circle
                cx="9"
                cy="9"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="15"
                y1="15"
                x2="12.5"
                y2="12.5"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Acciones */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1 text-gray-600 hover:text-orange-500 cursor-pointer">
          <FaRegUserCircle className="text-orange-500 text-3xl" />

          <span className="text-sm">
            Mi
            <br />
            Cuenta
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-600 hover:text-orange-500 cursor-pointer">
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="inline"
          >
            <path d="M16 8a4 4 0 01-8 0c0-2.21 1.79-4 4-4s4 1.79 4 4z" />
            <path d="M2 20h20" />
          </svg>
          <span className="text-sm">
            Mis
            <br />
            Favoritos
          </span>
        </div>
        <div className="text-orange-500 hover:text-orange-600 cursor-pointer">
          <svg
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="inline"
          >
            <circle cx="10" cy="22" r="1" />
            <circle cx="18" cy="22" r="1" />
            <path d="M2 2h4l3.6 7.59a1 1 0 00.92.41h7.72a1 1 0 00.92-.59l3.38-6.82H6" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
