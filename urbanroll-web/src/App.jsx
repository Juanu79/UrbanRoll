import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function App() {
  // Estados para controlar el cambio de imágenes en las secciones interactivas
  const [imgColores, setImgColores] = useState('/1.svg'); // Alterna con 1F o similar
  const [imgTamanos, setImgTamanos] = useState('/3.svg'); // Alterna con el detalle
  const [imgVariantes, setImgVariantes] = useState('/2.svg'); // Alterna con el completo
  const [imgApp, setImgApp] = useState('/3F.svg'); // Alterna entre producto 1 y 2

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('section').forEach(s => observer.observe(s));
  }, []);

  const secciones = [
    { id: "intro", titulo: "Cultura y Movimiento", img: "/1.svg", desc: "Urban Roll es una celebración de la libertad. Nuestra filosofía desafía la gravedad." },
    { id: "isotipo", titulo: "Isotipo: Dinamismo", img: "/Dinamismo.png", desc: "El skater en movimiento simboliza energía y libertad." },
    { id: "colores", titulo: "Paleta de Colores", renderColores: true, 
      img: imgColores, 
      onClick: () => setImgColores(imgColores === '/LogoOriginal_Sinfondo.svg' ? 'PaletaColores.png' : '/LogoOriginal_Sinfondo.svg'),
      desc: "Haz clic en la imagen para ver la aplicación de color. Usamos Azul Medianoche (#081528) y Cian Urbano (#5C25C6)." },
    { id: "tipografia", titulo: "Tipografía Corporativa", img: "/Tipografia.png", desc: "Montserrat (Bold, Regular, Italic) por su modernidad." },
    { id: "tamanos", titulo: "Tamaños Mínimos", 
      img: imgTamanos, 
      onClick: () => setImgTamanos(imgTamanos === '/LogoLetrasM_Sinfondo.svg' ? '/TamañoR.png' : '/LogoLetrasM_Sinfondo.svg'),
      desc: "Haz clic para ver el detalle técnico. No reducir a menos de 180px para mantener legibilidad." },
    { id: "variantes", titulo: "Variantes del Logo", 
      img: imgVariantes, 
      onClick: () => setImgVariantes(imgVariantes === '/LogoOriginal_Sinfondo.svg' ? '/LogoAlternativo.png' : '/LogoOriginal_Sinfondo.svg'),
      desc: "Haz clic para alternar versiones. Contamos con variantes horizontales y completas." },
    { id: "restricciones", titulo: "Usos No Permitidos", img: "/4.svg", desc: "Prohibido deformar o cambiar los colores por otras que desentonen." },
    { id: "aplicaciones", titulo: "Aplicaciones Finales", 
      img: imgApp, 
      onClick: () => setImgApp(imgApp === '/Producto1.png' ? '/Producto2.png' : '/Producto1.png'),
      desc: "Haz clic para ver distintos productos. La marca se adapta a cualquier entorno urbano." }
  ];

  return (
    <div className="bg-dark text-white min-vh-100">
      <Navbar variant="dark" sticky="top" style={{ backgroundColor: '#080605', borderBottom: '2px solid #5C25C6' }}>
        <Container>
          <Navbar.Brand href="#intro">
            <img src="/UrbanSkate.svg" width="30" height="30" className="d-inline-block align-top me-2" alt="logo" />
            URBANROLL
          </Navbar.Brand>
          <Nav className="ms-auto">
            {secciones.slice(0, 6).map(s => (
              <Nav.Link key={s.id} href={`#${s.id}`}>{s.titulo}</Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5">
        {secciones.map((sec, index) => (
          <section key={sec.id} id={sec.id} className="py-5">
            <Row className={`align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
              <Col md={6}>
                <h2 style={{ color: '#5C25C6' }}>{sec.titulo}</h2>
                <p className="lead">{sec.desc}</p>
                {sec.renderColores && (
                  <div className="d-flex gap-3 mt-3">
                    <div style={{width: 50, height: 50, borderRadius: '50%', background: '#081528', border: '2px solid white'}}></div>
                    <div style={{width: 50, height: 50, borderRadius: '50%', background: '#5C25C6'}}></div>
                  </div>
                )}
              </Col>
              <Col md={6} className="text-center">
                {sec.img && (
                  <div className="position-relative" onClick={sec.onClick} style={{ cursor: sec.onClick ? 'pointer' : 'default' }}>
                    <img 
                      src={sec.img} 
                      alt={sec.titulo} 
                      className={`img-fluid animar-imagen ${sec.img.includes('F') ? 'img-con-fondo' : ''}`} 
                      style={{ maxHeight: '350px', transition: '0.3s' }} 
                    />
                    {sec.onClick && <div className="click-hint">Clic para alternar</div>}
                  </div>
                )}
              </Col>
            </Row>
          </section>
        ))}
      </Container>
      
      <footer className="text-center py-5" style={{ color: '#5C25C6' }}>
        <p>© 2026 Urban Roll - Identidad Visual Digital</p>
      </footer>
    </div>
  );
}

export default App;