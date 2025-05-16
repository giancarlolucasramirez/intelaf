import React from "react";
import baner from '../img/banner.jpg'; // Asegúrate de que la ruta sea correcta
const Banner = () => {
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }} className="mt-8">
        <img
          src={baner} // Cambia esta ruta por la ubicación real de tu imagen
          alt="Banner Corsair"
          style={{
            width: "95%",
            borderRadius: "24px",
          }}
        />
      </div>
    </>
  );
};

export default Banner;
