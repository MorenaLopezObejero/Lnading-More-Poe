import React from "react";

const LogosCarousel: React.FC = () => {
  return (

    

    <section style={{ padding: "6rem", textAlign: "center", backgroundColor: "#F7C790"}}>
      <h2>
        Unimos fuerzas para multiplicar el impacto
      </h2>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        
        {/* Columna izquierda: texto */}
        <div style={{ flex: 1 }}>
          <p style={{ lineHeight: "1.6", fontSize: "1.1rem" }}>
                   En <strong>Impulsar<span style={{ color: "orange" }}>+</span></strong> creemos en la colaboración. Por eso trabajamos junto a ONGs, instituciones educativas y organizaciones de apoyo a emprendedores para ampliar el alcance de nuestra misión.
          </p>
          <p style={{ lineHeight: "1.6", fontSize: "1.1rem", marginTop: "2rem" }}>
                   Esta red de aliados nos permite brindar capacitación, difusión y acceso a recursos que fortalecen cada emprendimiento que acompaña nuestra plataforma.
          </p>
        </div>

        {/* Columna derecha: rectángulo gris (imagen luego) */}
        <div style={{ flex: 1, backgroundColor: "#ccc", height: "250px", borderRadius: "8px" }}>
          {/* Aquí después ponés <img src="..." alt="mockup" /> */}
          <div style={{height: "150px", fontSize: "4rem" }}>Mock Up</div>
        </div>
      </div>

      <div>
        {/* Columna: rectángulo gris (imagen luego) */}
        <div style={{ flex: 1, backgroundColor: "#ccc", height: "250px", borderRadius: "10px" }}>
          {/* Aquí después ponés <img src="..." alt="mockup" /> */}
          <div style={{height: "150px", fontSize: "4rem" }}>Carrusel de estadisticas</div>
        </div>
      </div>
    </section>

  );
};

export default LogosCarousel;
