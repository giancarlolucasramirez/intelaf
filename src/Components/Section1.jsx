const products = [
  {
    id: 1,
    image: "https://www.intelaf.com//images/productos/img_adicionales/mou-raz-bslvpn/mou-raz-bslvpn_0105251314207400_preview..webp",
    title: "Mouse Inalambrico Para Gamers Marca Razer Modelo Basilisk V3 Pro Sensor Optico De 30K De D...",
    normalPrice: "Q1,120",
    benefitPrice: "Q1,075",
  },
  {
    id: 2,
    image: "https://www.intelaf.com//images/productos/img_adicionales/aud-raz-blsv2pb/aud-raz-blsv2pb_0905250956323910_preview..webp",
    title: "Audifono Marca Razer Modelo BlackShark V2 X Sonido Envolvente 7.1 Conexion 3.5mm...",
    normalPrice: "Q401",
    benefitPrice: "Q385",
  },
  {
    id: 3,
    image: "https://www.intelaf.com//images/productos/img_adicionales/aud-raz-wbv2hn/aud-raz-wbv2hn_0105251313308740_preview..webp",
    title: "Audifono Gamer Inalambrico Marca Razer Modelo BlackShark V2 Hyperspeed Conexion...",
    normalPrice: "Q1,052",
    benefitPrice: "Q1,010",
  },
  {
    id: 4,
    image: "https://www.intelaf.com//images/productos/img_adicionales/gampd-raz-w3pbx/gampd-raz-w3pbx_0105251312212980_preview..webp",
    title: "Gamepad Inalambrico Marca Razer Modelo Wolverine V3 Pro Color Blanco Para Xbox Y PC",
    normalPrice: "Q1,552",
    benefitPrice: "Q1,490",
  },
  {
    id: 5,
    image: "https://www.intelaf.com//images/productos/img_adicionales/gampd-raz-wl3bx/gampd-raz-wl3bx_0105251309176620_preview..webp",
    title: "Gamepad Alambrico Marca Razer Modelo Wolverine V3 Tournament Edition Color...",
    normalPrice: "Q797",
    benefitPrice: "Q765",
  },
];

const Section1 = () => {
  return (
    <section className="bg-gray-50 py-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 px-6">Recién ingreso</h2>
      <div className="flex items-center gap-2 px-2">
        {/* Left arrow */}
        <button className="text-orange-400 text-3xl px-2">&#60;</button>
        <div className="flex gap-4 overflow-x-auto w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm p-4 min-w-[220px] max-w-[240px] flex flex-col"
            >
              <div className="flex justify-end">
                <span className="bg-cyan-100 text-cyan-600 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  Recién Ingreso
                </span>
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="h-24 object-contain mx-auto mb-2"
              />
              <div className="mt-2 flex-1">
                <span className="text-xs text-gray-400 font-bold">RAZER</span>
                <p className="text-xs text-gray-700 font-medium mt-1 mb-2 line-clamp-2">{product.title}</p>
                <p className="text-xs text-gray-400">Precio normal <span className="font-bold">{product.normalPrice}</span></p>
                <p className="text-sm text-orange-500 font-bold">Beneficio Efectivo {product.benefitPrice}</p>
                <p className="text-[10px] text-gray-300 mt-1">* Precio sujeto a cambios</p>
              </div>
            </div>
          ))}
        </div>
        {/* Right arrow */}
        <button className="text-orange-400 text-3xl px-2">&#62;</button>
      </div>
    </section>
  );
};

export default Section1;