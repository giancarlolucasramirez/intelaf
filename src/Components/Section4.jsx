const offers = [
  {
    id: 1,
    image: "https://www.intelaf.com/images/productos/gran/aud-cor-hs35v2c.jpg",
    brand: "CORSAIR",
    title: "Audifono Para Gamers Marca CORSAIR Modelo HS35 v2 Multiplataforma Conexion 3.5mm Color Carbon",
    normalPrice: "Q391",
    promoPrice: "Q285",
    validUntil: "30/05/2025",
  },
  {
    id: 2,
    image:
      "https://www.intelaf.com/images/productos/gran/aud-cor-hs65sc.jpg",
    brand: "CORSAIR",
    title: "Audifono Para Gamers Marca CORSAIR Modelo HS65 SURROUND Multiplataforma Conexion 3.5mm Color Carbon",
    normalPrice: "Q495",
    promoPrice: "Q435",
    validUntil: "30/05/2025",
  },
  {
    id: 3,
    image:
      "https://www.intelaf.com/images/productos/gran/audf-cor-hs55b.jpg ",
    brand: "CORSAIR",
    title: "Audifono Para Gamers Marca CORSAIR Modelo HS55 STEREO Multiplataforma Conexion 3.5mm Color Blanco",
    normalPrice: "Q422",
    promoPrice: "Q360",
    validUntil: "30/05/2025",
  },
  {
    id: 4,
    image:
      "https://www.intelaf.com/images/productos/gran/audf-cor-vrwlrg.jpg",
    brand: "CORSAIR",
    title: "Audifono Inalambrico Para Gamers Marca CORSAIR Modelo VIRTUOSO RGB WIRELESS Color Carbon",
    normalPrice: "Q1,391",
    promoPrice: "Q1,224",
    validUntil: "30/05/2025",
  },
  {
    id: 5,
    image: "https://www.intelaf.com/images/productos/gran/crcqc-gpro-ach2.jpg",
    brand: "CORSAIR",
    title: "Audifono Inalambrico Para Gamers Marca CORSAIR Modelo VIRTUOSO RGB WIRELESS XT Slate",
    normalPrice: "Q1,880",
    promoPrice: "Q1,654",
    validUntil: "30/05/2025",
  },
];

const Section4 = () => {
  return (
    <section className="bg-gray-50 py-6">
      <div className="flex justify-between items-start px-6 mb-2">
        <h2 className="text-xl font-semibold text-gray-500">
          ¡Super Ofertas de locura!
        </h2>
        <div className="flex flex-col items-end">
          <span className="text-xs text-gray-400">Vence en</span>
          <div className="flex gap-2">
            <div className="bg-cyan-100 text-cyan-600 font-bold rounded-md px-2 py-1 text-lg">
              12
            </div>
            <div className="bg-cyan-100 text-cyan-600 font-bold rounded-md px-2 py-1 text-lg">
              21
            </div>
            <div className="bg-cyan-100 text-cyan-600 font-bold rounded-md px-2 py-1 text-lg">
              11
            </div>
          </div>
          <div className="flex gap-6 text-[10px] text-gray-400 mt-1">
            <span>Horas</span>
            <span>Min</span>
            <span>Seg</span>
          </div>
        </div>
      </div>
      <div className="px-6 mb-4">
        <span className="bg-cyan-500 text-white font-semibold rounded-full px-5 py-2 text-sm inline-block">
         Promo CORSAIR


        </span>
      </div>
      <div className="flex items-center gap-2 px-2">
        {/* Left arrow */}
        <button className="text-orange-400 text-3xl px-2">&#60;</button>
        <div className="flex gap-4 overflow-x-auto w-full">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-xl shadow-sm p-4 min-w-[220px] max-w-[240px] flex flex-col"
            >
              <div className="flex justify-end">
                <span className="bg-[#F0761D] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  Oferta Online
                </span>
              </div>
              <img
                src={offer.image}
                alt={offer.title}
                className="h-24 object-contain mx-auto mb-2"
              />
              <div className="flex items-center justify-start mb-2">
                <span className="bg-orange-50 text-orange-400 text-[11px] font-semibold px-2 py-1 rounded-full">
                  OFERTA VÁLIDA HASTA EL {offer.validUntil}
                </span>
              </div>
              <div className="mt-2 flex-1">
                <span className="text-xs text-gray-400 font-bold">
                  {offer.brand}
                </span>
                <p className="text-xs text-gray-700 font-medium mt-1 mb-2 line-clamp-2">
                  {offer.title}
                </p>
                <p className="text-xs text-gray-400">
                  Precio normal{" "}
                  <span className="font-bold">{offer.normalPrice}</span>
                </p>
                <p className="text-sm text-orange-500 font-bold">
                  Promo Solo ONLINE {offer.promoPrice}
                </p>
                <p className="text-[10px] text-gray-300 mt-1">
                  * Precio sujeto a cambios
                </p>
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

export default Section4;
