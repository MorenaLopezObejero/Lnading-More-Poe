import React from "react";

const Descripcion: React.FC = () => {
  return (
    <section style={{ padding: "2rem", textAlign: "center", backgroundColor: "#F7E8D6"  }}>
      {/* contenedor en 2 columnas */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        
        {/* Columna izquierda: texto */}
        <div style={{ flex: 1 }}>
          <p style={{ lineHeight: "1.6", fontSize: "1.1rem" }}>
            En <strong>Impulsar+</strong> creemos que todas las personas merecen las herramientas 
            necesarias para que sus ideas crezcan. Somos un equipo joven, multidisciplinario 
            y comprometido con la inclusión laboral y el desarrollo de emprendedores, 
            especialmente aquellos que enfrentan desafíos para organizar y gestionar sus proyectos.
          </p>
          <p style={{ lineHeight: "1.6", fontSize: "1.1rem", marginTop: "1rem" }}>
            Combinamos tecnología accesible, diseño intuitivo y asesoramiento especializado para 
            transformar emprendimientos en historias de éxito.
          </p>
        </div>

        {/* Columna derecha: rectángulo gris (imagen luego) */}
        <div style={{ flex: 1, backgroundColor: "#ccc", height: "250px", borderRadius: "8px" }}>
          {/* Aquí después ponés <img src="..." alt="mockup" /> */}
        </div>
      </div>
    </section>
  );
};

export default Descripcion;
