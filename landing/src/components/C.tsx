import React from "react";

const StatsCarousel: React.FC = () => {
  return (
    <section style={{ padding: "4rem",textAlign: "center", backgroundColor: "#F7E8D6" }}>

      <div>
      <h1>
        La necesidad es real, la
      </h1>
      <h1>
        solucionar es Impulsar<span style={{ color: "orange" }}>+</span>
      </h1>
      </div>
      <div>
        {/* Columna derecha: rectángulo gris (imagen luego) */}
        <div style={{ flex: 1, backgroundColor: "#ccc", height: "250px", borderRadius: "8px" }}>
          {/* Aquí después ponés <img src="..." alt="mockup" /> */}
        </div>
      </div>
    </section>
  );
};

export default StatsCarousel;
