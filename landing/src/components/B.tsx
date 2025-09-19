import React from "react";
import Iesc from '/src/assets/Iesc.png';
import styles from './B.module.css';

const Mockup: React.FC = () => {
  return (
    <section style={{ padding: "6rem", textAlign: "center", backgroundColor: "#F7C790"  }}>
      {/* contenedor en 2 columnas */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        
        {/* Columna izquierda: texto */}
        <div style={{ flex: 1 }}>
          <p style={{ lineHeight: "1.6", fontSize: "1.1rem" }}>
                   Nuestro objetivo es acompañar a emprendedores neurodivergentes para que puedan organizar su tiempo, recursos y finanzas de manera sencilla.
          </p>
          <p style={{ lineHeight: "1.6", fontSize: "1.1rem", marginTop: "2rem" }}>
                   A través de nuestra aplicación, ofrecemos herramientas claras y adaptadas para facilitar la gestión de productos, materiales, contactos y finanzas, impulsando su autonomía y sostenibilidad económica.
          </p>
        </div>

        {/* Columna derecha: imagen */}
        <div style={{ flex: 1, height: "250px", borderRadius: "8px" }}>
          {<img src={Iesc} alt="Descripción de la imagen" 
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}/>}
          <p style={{ marginTop: "1rem", fontSize: "1rem", color: "#555" }}>
            Organizar tu emprendimiento nunca fue tan fácil
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mockup;
