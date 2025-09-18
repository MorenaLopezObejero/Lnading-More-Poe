import React from "react";
import Img from '/src/assets/Imgprstrabajando.png';

const LogosCarousel: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#F7C790" }}>
      <section style={{ padding: "6rem", textAlign: "center" }}>
        <h2>
          Unimos fuerzas para multiplicar el impacto
        </h2>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginTop: "3rem" }}>
          {/* Columna izquierda: texto */}
          <div style={{ flex: 1, textAlign: "left" }}>
            <p style={{ lineHeight: "1.6", fontSize: "1.1rem" }}>
              En <strong>Impulsar<span style={{ color: "#F7C790" }}>+</span></strong> creemos en la colaboración. Por eso trabajamos junto a ONGs, instituciones educativas y organizaciones de apoyo a emprendedores para ampliar el alcance de nuestra misión.
            </p>
            <p style={{ lineHeight: "1.6", fontSize: "1.1rem", marginTop: "1rem" }}>
              Esta red de aliados nos permite brindar capacitación, difusión y acceso a recursos que fortalecen cada emprendimiento que acompaña nuestra plataforma.
            </p>
          </div>

          {/* Columna derecha: imagen */}
          <div style={{ flex: 1 }}>
            <img src={Img} alt="Descripción de la imagen" />
            
          </div>
        </div>
      </section>

      <div style={{ backgroundColor: "#E9D2B5", padding: "4rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "black" }}>
          CARRUSEL DE LOGOS
        </h2>
      </div>
      <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
        <p>Conocé a nuestros aliados</p>
      </div>
    </div>
  );
};

export default LogosCarousel;






{/*
const LogosCarousel: React.FC = () => {
  return (
    
    <section style={{ padding: "6rem", textAlign: "center", backgroundColor: "#F7C790"}}>
      <h2>
        Unimos fuerzas para multiplicar el impacto
      </h2>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        
        {/* Columna izquierda: texto 
        <div style={{ flex: 1 }}>
          <p style={{ lineHeight: "1.6", fontSize: "1.1rem" }}>
                   En <strong>Impulsar<span style={{ color: "orange" }}>+</span></strong> creemos en la colaboración. Por eso trabajamos junto a ONGs, instituciones educativas y organizaciones de apoyo a emprendedores para ampliar el alcance de nuestra misión.
          </p>
          <p style={{ lineHeight: "1.6", fontSize: "1.1rem", marginTop: "2rem" }}>
                   Esta red de aliados nos permite brindar capacitación, difusión y acceso a recursos que fortalecen cada emprendimiento que acompaña nuestra plataforma.
          </p>
        </div>

        {/* Columna derecha: rectángulo gris (imagen luego) 
        <div style={{ flex: 1, backgroundColor: "#ccc", height: "250px", borderRadius: "8px" }}>
          {/* Aquí después ponés <img src="..." alt="mockup" /> *
          <div style={{height: "150px", fontSize: "4rem" }}>Mock Up</div>
        </div>
      </div>

      <div>
        {/* Columna: rectángulo gris (imagen luego) 
        <div style={{ flex: 1, backgroundColor: "#ccc", height: "250px", borderRadius: "10px" }}>
          {/* Aquí después ponés <img src="..." alt="mockup" /> 
          <div style={{height: "150px", fontSize: "4rem" }}>Carrusel de estadisticas</div>
        </div>
      </div>
    </section>

  );
};

export default LogosCarousel;
*/}