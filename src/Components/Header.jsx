import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { LuCalendarCheck2 } from "react-icons/lu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-white  ">
      {/* Header principal */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white  px-6 py-3 flex items-center justify-between mx-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://www.intelaf.com/img/intelaf_logotipo.png"
            alt="Intelaf Logo"
            className="h-10"
          />
        </div>
        {/* Categorías y búsqueda */}
        <div className="flex-1 flex items-center gap-4 mx-6">
          <button className="bg-orange-50 text-gray-600 px-4 py-2 rounded-xl font-medium flex items-center gap-2 shadow-none border-none">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              className="inline"
            >
              <rect
                x="2"
                y="2"
                width="5"
                height="5"
                rx="1"
                stroke="#8C8C8C"
                strokeWidth="1.5"
              />
              <rect
                x="2"
                y="10"
                width="5"
                height="5"
                rx="1"
                stroke="#8C8C8C"
                strokeWidth="1.5"
              />
              <rect
                x="10"
                y="10"
                width="5"
                height="5"
                rx="1"
                stroke="#8C8C8C"
                strokeWidth="1.5"
              />
              <rect
                x="15"
                y="2"
                width="5"
                height="5"
                rx="1"
                stroke="#8C8C8C"
                strokeWidth="1.5"
              />
              <rect
                x="10"
                y="2"
                width="5"
                height="5"
                rx="1"
                stroke="#8C8C8C"
                strokeWidth="1.5"
                transform="rotate(45 12.5 4.5)"
              />
            </svg>
            <span className="text-base font-normal">Categorías</span>
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Buscar en Intelaf"
              className="w-full border-none rounded-full px-4 py-2 pl-4 pr-12 bg-gray-100 focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 rounded-full w-8 h-8 flex items-center justify-center shadow">
              <CiSearch className="text-white text-xl font-bold" />
            </button>
          </div>
        </div>
        {/* Acciones */}
        <div className="flex items-center gap-6 mx-24">
          <div className="flex items-center gap-1 text-gray-600 hover:text-orange-500 cursor-pointer">
            <FaRegUserCircle className="text-orange-500 text-4xl" />
            <span className="text-sm">
              Mi
              <br />
              Cuenta
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 hover:text-orange-500 cursor-pointer">
            <FaRegHeart className="text-orange-500 text-3xl" />
            <span className="text-sm">
              Mis
              <br />
              Favoritos
            </span>
          </div>
          <div className="text-orange-500 hover:text-orange-600 cursor-pointer">
            <IoCartOutline className="text-orange-500 text-3xl" />
          </div>
        </div>
      </header>

      {/* Espaciador para el header fijo */}
      <div className="h-[76px]"></div>

      {/* Botón fijo de método de entrega */}
      <button
        className={`flex items-center gap-2 text-sm rounded-full mx-13 px-4 py-2 transition-colors duration-300 backdrop-blur
    ${
      scrolled
        ? "fixed top-[76px] left-8 z-50 bg-[#b8c2e6]/80 text-[#223488] font-semibold shadow"
        : "absolute top-[76px] left-8 bg-white/70 text-gray-500"
    }`}
        style={{ minWidth: 260 }}
      >
       <LuCalendarCheck2 />
        Elegir método de entrega
      </button>
      
      {/* Barra secundaria normal */}
      <div className="w-full flex items-center px-10 py-2 ">
        <div className="mr-[280px]"></div> {/* Espacio para el botón fijo */}
        <nav className="flex-1 flex gap-6 text-gray-500 text-sm justify-end">
          <a href="#" className="hover:text-orange-500">
            Ofertas
          </a>
          <a href="#" className="hover:text-orange-500">
            Ubicaciones
          </a>
          <a href="#" className="hover:text-orange-500">
            Mayoreo
          </a>
          <a href="#" className="hover:text-orange-500">
            Empresa
          </a>
          <a href="#" className="hover:text-orange-500 flex items-center gap-1">
            Soporte <span className="text-xs">&#9660;</span>
          </a>
          <a href="#" className="hover:text-orange-500 flex items-center gap-1">
            Políticas <span className="text-xs">&#9660;</span>
          </a>
          <a href="#" className="hover:text-orange-500">
            Sugerencias
          </a>
          <a href="#" className="hover:text-orange-500">
            Empleos
          </a>
        </nav>
        
      </div>
      <hr className="border-gray-200 border-1 w-full my-4" />
      {/* Espaciador para el botón fijo */}
      <div className={scrolled ? "h-[52px]" : ""}></div>
    </div>
  );
};

export default Header;
