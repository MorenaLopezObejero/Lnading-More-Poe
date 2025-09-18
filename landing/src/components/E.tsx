import React from "react";
import Icpinterest from '/src/assets/Icpinterest.png';
import Iclnk from '/src/assets/Iclnk.png';
import Icig from '/src/assets/Icig.png';
import Icfc from '/src/assets/IcFC.png';
import Ictw from '/src/assets/Ictw.png';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#F2B482' }}>
      {/* Sección superior del footer */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '2rem 6rem',
        borderBottom: '1px solid #EA7E40' // Línea de separación
      }}>
        {/* Logo */}
        <div style={{ fontWeight: 'bold', fontSize: '2rem', color: '#000' }}>
          impulsar<span style={{ color: '#F49B44' }}>+</span>
        </div>
        {/* Íconos de redes sociales */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
            <img src={Icpinterest} alt="Descripción de la imagen" />
            <img src={Iclnk} alt="Descripción de la imagen" />
            <img src={Icig} alt="Descripción de la imagen" />
            <img src={Icfc} alt="Descripción de la imagen" />
            <img src={Ictw} alt="Descripción de la imagen" />
        </div>
      </div>

      {/* Sección central: enlaces de navegación y newsletter */}
      <div style={{ display: 'flex', padding: '2rem 6rem', gap: '3rem' }}>
        {/* Grupo 1: Nosotros */}
        <div style={{ flex: 1 }}>
          <div style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <p style={{ textDecoration: 'none', color: '#000' }}>Nosotros</p>
            <p style={{ textDecoration: 'none', color: '#000' }}>Alianzas</p>
            <p style={{ textDecoration: 'none', color: '#000' }}>Resultados</p>
          </div>
        </div>
        {/* Grupo 2: Noticias */}
        <div style={{ flex: 1 }}>
          <div style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <p style={{ textDecoration: 'none', color: '#000' }}>Noticias</p>
            <p style={{ textDecoration: 'none', color: '#000' }}>Proyectos</p>
            <p style={{ textDecoration: 'none', color: '#000' }}>Eventos</p>
          </div>
        </div>
        {/* Grupo 3: Contacto */}
        <div style={{ flex: 1 }}>
          <div style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <p style={{ textDecoration: 'none', color: '#000' }}>Centros</p>
            <p style={{ textDecoration: 'none', color: '#000' }}>Contacto</p>
            <p style={{ textDecoration: 'none', color: '#000' }}>Unite al equipo</p>
          </div>
        </div>
        {/* Sección de Newsletter */}
        <div style={{ borderLeft: '1px solid #EA7E40', paddingLeft: '2rem' }}>
          <p style={{ margin: 0, fontWeight: 'bold' }}>MANTÉNGASE AL DÍA CON NUESTRO NEWS PAPER</p>
          <button style={{ 
            backgroundColor: '#F49B44', 
            border: 'none', 
            color: 'white', 
            padding: '0.7rem 2rem', 
            marginTop: '1rem', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Suscribite
          </button>
        </div>
      </div>
      
      {/* Sección inferior del footer */}
      <div style={{ 
        backgroundColor: '#F2B482', 
        padding: '1.5rem 6rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
      }}>
        {/* Copyright */}
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          © 2025 grupo impulso a.a.. Todos los derechos reservados.
        </p>
        {/* Enlaces legales */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#000', fontSize: '0.9rem' }}>Legal</a>
          <a href="#" style={{ textDecoration: 'none', color: '#000', fontSize: '0.9rem' }}>Privacidad</a>
          <a href="#" style={{ textDecoration: 'none', color: '#000', fontSize: '0.9rem' }}>Accesibilidad</a>
          <a href="#" style={{ textDecoration: 'none', color: '#000', fontSize: '0.9rem' }}>Quejas</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
