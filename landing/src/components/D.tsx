import React from "react";
import Img from '/src/assets/reunion 1.png';

const LogosCarousel: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#F7C790" }}>
      <section style={{ padding: "4rem", textAlign: "center" }}>
        <h2>
          Unimos fuerzas para multiplicar el impacto
        </h2>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginTop: "3rem" }}>
          {/* Columna izquierda: texto */}
          <div style={{ flex: 1, textAlign: "left" }}>
            <p style={{ lineHeight: "1.6", fontSize: "1.1rem" }}>
              En <strong>Impulsar<span style={{ color: "orange" }}>+</span></strong> creemos en la colaboración. Por eso trabajamos junto a ONGs, instituciones educativas y organizaciones de apoyo a emprendedores para ampliar el alcance de nuestra misión.
            </p>
            <p style={{ lineHeight: "1.6", fontSize: "1.1rem", marginTop: "1rem" }}>
              Esta red de aliados nos permite brindar capacitación, difusión y acceso a recursos que fortalecen cada emprendimiento que acompaña nuestra plataforma.
            </p>
          </div>

          {/* Columna derecha: imagen */}
          <div style={{ flex: 1 }}>
            <img src={Img} alt="Descripción de la imagen" 
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}/>
            
          </div>
        </div>

        <div>
        {/* Columna: rectángulo gris (imagen luego) */}
        <div style={{ flex: 1, backgroundColor: "#ccc", height: "250px", borderRadius: "8px" }}>
          {/* Aquí después ponés <img src="..." alt="mockup" /> */}
          <h2 style={{ fontSize: "2rem" }}>
            CARRUSEL DE LOGOS
          </h2>
        </div>
      </div>
      
      <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
        <p>Conocé a nuestros aliados</p>
      </div>

      </section>
    </div>
  );
};

export default LogosCarousel;