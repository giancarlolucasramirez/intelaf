import Banner3 from "./Banner3";

const cards = [
  {
    icon: (
      // Edificio
      <svg
        className="w-10 h-10 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" fill="#e5e7eb" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17h.01M9 13h.01M9 9h.01M15 17h.01M15 13h.01M15 9h.01"
        />
      </svg>
    ),
    title: "Empresa",
    desc: "Intelaf significa Inteligencia Artificial. La empresa se dedica a la venta de productos de tecnología y servicio técnico a computadoras.",
  },
  {
    icon: (
      // Llave inglesa
      <svg
        className="w-10 h-10 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" fill="#e5e7eb" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.72 7.72a2.5 2.5 0 1 1-3.54 3.54l-6.18 6.18a2 2 0 1 1-2.83-2.83l6.18-6.18a2.5 2.5 0 1 1 3.54-3.54z"
        />
      </svg>
    ),
    title: "Soporte",
    desc: "Contamos con centros de servicio para diagnóstico y reparación de computadoras. También tenemos un blog con información técnica...",
  },
  {
    icon: (
      // Megáfono
      <svg
        className="w-10 h-10 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" fill="#e5e7eb" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 8v8m0 0a4 4 0 1 1-8 0V8a4 4 0 1 1 8 0z"
        />
      </svg>
    ),
    title: "Mayoreo",
    desc: "Políticas y condiciones para mayoristas. Si ya eres mayorista puedes entrar al sitio para consultar los precios de mayoreo.",
  },
  {
    icon: (
      // Etiqueta de oferta
      <svg
        className="w-10 h-10 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" fill="#e5e7eb" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 7l-10 10m1-9h.01m9 9h.01"
        />
      </svg>
    ),
    title: "Ofertas",
    desc: "Encuentra las mejores ofertas y promociones que sólo Intelaf tiene para ti.",
  },
];

const Conocer_Mas = () => {
  return (
    <>
      <section className="bg-gray-50 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-lg font-medium text-gray-500 mb-4">
            Conocer más
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 flex flex-col items-start shadow gap-4"
              >
                <div className="bg-gray-100 rounded-lg p-4 mb-2">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{card.desc}</p>
                <a
                  href="#"
                  className="text-xs font-semibold text-gray-500 mt-auto flex items-center gap-1 hover:underline"
                >
                  SABER MÁS <span className="text-base">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-gray-50 py-6">
        <div className="max-w-6xl mx-auto px-4">
          {/* Bloque de recomendaciones */}
          <div className="bg-white border border-dashed border-gray-200 rounded-2xl p-6 mb-6 flex flex-col items-center">
            <span className="text-sm text-gray-700 font-medium mb-4 text-center">
              Para ver recomendaciones personalizadas
            </span>
            <button className="border border-[#F0761D] text-[#F0761D] font-semibold rounded-lg px-6 py-2 mb-2 hover:bg-orange-50 transition">
              Inicia Sesión
            </button>
            <span className="text-xs text-gray-500">
              ¿Eres un cliente nuevo?{" "}
              <a href="#" className="text-[#00b0b9] hover:underline">
                Crea una cuenta aquí.
              </a>
            </span>
          </div>
        </div>
      </div>
      <Banner3 />
      <div className="bg-gray-100 mt-0 px-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-4 divide-x divide-gray-200 text-center">
            {/* Mi cuenta */}
            <div className="flex flex-col items-center">
              <svg
                className="w-8 h-8 text-gray-500 mb-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5a7.5 7.5 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z"
                />
              </svg>
              <span className="text-sm text-[#00b0b9]">Mi cuenta</span>
            </div>
            {/* Políticas */}
            <div className="flex flex-col items-center">
              <svg
                className="w-8 h-8 text-gray-500 mb-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 17v.01M7.5 4.21a2.25 2.25 0 019 0l3.37 6.74a2.25 2.25 0 01-1.99 3.25H6.12a2.25 2.25 0 01-1.99-3.25L7.5 4.21z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v4"
                />
              </svg>
              <span className="text-sm text-[#00b0b9]">Políticas</span>
            </div>
            {/* Sucursales */}
            <div className="flex flex-col items-center">
              <svg
                className="w-8 h-8 text-gray-500 mb-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7V6a2 2 0 012-2h12a2 2 0 012 2v1M4 7v11a2 2 0 002 2h12a2 2 0 002-2V7M4 7h16"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 10h6M9 14h6"
                />
              </svg>
              <span className="text-sm text-[#00b0b9]">Sucursales</span>
            </div>
            {/* Ayuda */}
            <div className="flex flex-col items-center">
              <svg
                className="w-8 h-8 text-gray-500 mb-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 17h.01M12 13a2 2 0 10-2-2"
                />
              </svg>
              <span className="text-sm text-[#00b0b9]">Ayuda</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conocer_Mas;
