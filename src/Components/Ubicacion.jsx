import { VscVerifiedFilled } from "react-icons/vsc";
import { MdShoppingCartCheckout } from "react-icons/md";

const Ubicacion = () => {
  return (
    <>
      <section className="bg-gray-50 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Columna izquierda */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-6 shadow flex flex-col gap-4">
                <span className="text-base font-semibold text-[#223488]">
                  Horarios de atención, <br /> entrega y pickup
                </span>
                <button className="border border-[#223488] text-[#223488] font-bold rounded-lg px-6 py-2 flex items-center gap-2 self-start hover:bg-[#f5f7fb] transition">
                  <span className="material-icons text-lg">schedule</span>
                  Ver Horarios
                </button>
              </div>
              {/* Políticas con íconos alineados */}
              <div className="bg-white rounded-2xl p-6 shadow">
                <div className="grid grid-cols-3 items-center">
                  {/* Texto a la izquierda */}
                  <div>
                    <span className="text-base font-semibold text-gray-700 block">
                      Conoce <br /> nuestras <br /> políticas
                    </span>
                    <a
                      href="#"
                      className="text-xs text-[#223488] hover:underline mt-2 inline-block"
                    >
                      Ver más
                    </a>
                  </div>
                  {/* Garantías */}
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mb-2">
                      <span className="material-icons text-4xl text-gray-500">
                        <VscVerifiedFilled className="text-6xl" />
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">Garantías</span>
                  </div>
                  {/* Devoluciones */}
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mb-2">
                      <span className="material-icons text-4xl text-gray-500">
                        <MdShoppingCartCheckout className="text-6xl" />
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">Devoluciones</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Columna derecha */}
            <div className="bg-[#e6f5f7] rounded-2xl p-6 flex flex-col gap-4 relative">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-[#00b0b9] leading-tight">
                    ¡Estamos presentes <br /> en toda la república!
                  </h2>
                  <p className="text-[#00b0b9] text-sm italic mt-1">
                    Porque nos encanta rodearte de tecnología.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#00b0b9] text-white rounded-full w-28 h-28 flex flex-col items-center justify-center text-4xl font-bold">
                    <span>+30</span>
                    <span className="text-base font-normal mt-1">Tiendas</span>
                  </div>
                </div>
              </div>
              {/* Sucursal destacada */}
              <div className="bg-[#F0761D] rounded-xl p-4 flex items-center justify-between mt-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://www.intelaf.com/img/intelaf_logotipo.png"
                    alt="Intelaf"
                    className="h-12"
                  />
                  <div className="text-white text-sm">
                    <div>Visita nuestra sucursal en</div>
                    <div className="font-bold">
                      C.C. Metro 15, Vista Hermosa
                    </div>
                    <div>
                      Tel: <span className="font-bold">(502) 2328-0045</span>
                    </div>
                  </div>
                </div>
                <a
                  className="bg-white text-[#223488] font-semibold rounded-lg px-6 py-2 flex items-center gap-2 shadow hover:bg-gray-100 transition cursor-default select-none"
                  tabIndex={-1}
                  style={{ pointerEvents: "none" }} // Hace que no sea clickeable
                >
                  Ir con maps
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5uDUFPgf7p8SojaD68ZbRm5bGqrR94Ps-A&s"
                    alt="Google Maps"
                    className="w-5 h-5"
                    draggable="false"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Ubicacion;
