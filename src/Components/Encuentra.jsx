import {
  MdHeadphones,
  MdCameraAlt,
  MdPhoneIphone,
  MdPrint,
  MdWifiTethering,
  MdSportsEsports,
} from "react-icons/md";

const categories = [
  {
    icon: <MdHeadphones size={48} className="mx-auto text-gray-400" />,
    label: "Audio",
  },
  {
    icon: <MdCameraAlt size={48} className="mx-auto text-gray-400" />,
    label: "Cámaras",
  },
  {
    icon: <MdPhoneIphone size={48} className="mx-auto text-gray-400" />,
    label: "Celulares y accesorios",
  },
  {
    icon: <MdPrint size={48} className="mx-auto text-gray-400" />,
    label: "Impresoras y suministros",
  },
  {
    icon: <MdWifiTethering size={48} className="mx-auto text-gray-400" />,
    label: "Streaming",
  },
  {
    icon: <MdSportsEsports size={48} className="mx-auto text-gray-400" />,
    label: "Gaming",
  },
];

const Encuentra = () => {
  return (
    <section className="bg-gray-50 py-6">
        <hr  className="border-gray-200 opacity-60" />
        
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <h2 className="text-lg font-medium text-gray-500 mb-4">
          ¿Qué te gustaría encontrar?
        </h2>
        <div className="flex gap-6 justify-center">
          {categories.map((cat, idx) => (
            <div
              key={cat.label}
              className={`flex flex-col items-center justify-center w-48 h-48 bg-white rounded-2xl shadow-sm transition 
        ${idx === 1 ? "bg-gray-100" : "hover:bg-gray-100"}`}
            >
              {cat.icon}
              <span className="mt-4 text-gray-600 font-medium text-base text-center">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Encuentra;
