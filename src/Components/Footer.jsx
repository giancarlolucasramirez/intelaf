import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";
// ...otros imports...

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <footer
      style={{
        background: "#fafafa",
        padding: "40px 0",
        fontSize: "14px",
        color: "#444",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {/* Nuestra App */}
        {/* Nuestra App */}
        <div style={{ minWidth: 260 }}>
          <h3 style={{ margin: 0, fontSize: "18px", color: "#444" }}>
            Nuestra App
          </h3>
          <p
            style={{ margin: "4px 0 12px 0", fontSize: "15px", color: "#444" }}
          >
            Descarga gratis nuestra aplicación
          </p>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDC39TsUSlUqvGNhZ38vGdPPqjfpwLROgcJg&s"
                alt="Google Play"
                style={{ width: "120px", height: "auto" }}
              />
            </a>
            <a
              href="https://apps.apple.com/app/id6450431987"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                style={{ width: "120px", height: "auto" }}
              />
            </a>
          </div>
        </div>
        {/* Contáctanos */}
        <div>
          <h3>Contáctanos</h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <button
              style={{
                background: "#ffe5d0",
                border: "none",
                borderRadius: "20px",
                padding: "8px 16px",
                color: "#e67c30",
                cursor: "pointer",
              }}
            >
              Comunicarse a una tienda
            </button>
            <button
              style={{
                background: "#ffe5d0",
                border: "none",
                borderRadius: "20px",
                padding: "8px 16px",
                color: "#e67c30",
                cursor: "pointer",
              }}
            >
              sugerencias@intelaf.com
            </button>
            <button
              style={{
                background: "#ffe5d0",
                border: "none",
                borderRadius: "20px",
                padding: "8px 16px",
                color: "#e67c30",
                cursor: "pointer",
              }}
            >
              Chat en línea
            </button>
          </div>
        </div>
        {/* Opinión */}
        <div style={{ textAlign: "center" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
            alt="Robot"
            style={{ height: "60px", opacity: 0.2 }}
          />
          <p style={{ fontSize: "13px", marginTop: "10px" }}>
            ¿Cómo ha sido tu experiencia con el sitio?
            <br />
            <a href="#" style={{ color: "#888" }}>
              Danos tu opinión acerca de nuestro sitio web
            </a>
          </p>
        </div>
      </div>
      {/* Redes sociales */}
      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <p>
          Síguenos en nuestras redes
          <br />
          <span style={{ color: "#888" }}>#TeConectaHaciaLaTecnologia</span>
        </p>
        <div
          style={{
            fontSize: "22px",
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            margin: "10px 0",
          }}
        >
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaTiktok />
          </a>
          <a href="#">
            <FaWhatsapp />
          </a>
          <a href="#">
            <FaTwitch />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>
      {/* Avisos legales y métodos de pago */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "10px",
          color: "#888",
          fontSize: "12px",
        }}
      >
        <p>
          Todas las imágenes mostradas son de carácter ilustrativo. Los nombres
          comerciales de productos son propiedad de sus respectivas marcas.
          <br />
          La venta de los productos online está sujeta a verificación de stock.
          Los precios y cuotas bancarias en www.intelaf.com así como la
          información del sitio, están sujetos a cambios sin previo aviso.
        </p>
        <div
          style={{
            margin: "10px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <img
            src="https://img.icons8.com/color/512/visa.png"
            alt="Visa"
            style={{ height: "44px" }}
          />
          <img
            src="https://i0.wp.com/elpoderdelasideas.com/wp-content/uploads/master_card_nuevo_logo_2016_pentagram_cambios.png?fit=550%2C268&ssl=1"
            alt="Mastercard"
            style={{ height: "44px" }}
          />
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/413145156718951.Y3JvcCw4MDgsNjMyLDAsMA.png"
            alt="BAC"
            style={{ height: "44px" }}
          />
          <img
            src="https://logowik.com/content/uploads/images/amex-card1708.jpg"
            alt="Amex"
            style={{ height: "44px" }}
          />
        </div>
        <div style={{ margin: "10px 0" }}>
          <a href="#" style={{ margin: "0 10px", color: "#888" }}>
            Términos y condiciones
          </a>
          <a href="#" style={{ margin: "0 10px", color: "#888" }}>
            Política de privacidad
          </a>
          <a href="#" style={{ margin: "0 10px", color: "#888" }}>
            Política de cookies
          </a>
        </div>
        <div style={{ margin: "10px 0" }}>
          Copyright © 1989-2025 Intelaf S.A. Todos los derechos reservados.
        </div>
        <div style={{ color: "#bbb" }}>Versión 1.1.9</div>
      </div>
      <div className="fixed right-6 bottom-24 z-[1000] bg-white rounded-full shadow-lg p-1">
        <img
          src="https://www.intelaf.com/img/chat-icon/06-05-2025-v1.png"
          alt="Robot"
          className="w-14 h-14 rounded-full"
        />
      </div>
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-6 bottom-6 z-[999] bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors"
          aria-label="Subir arriba"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;
