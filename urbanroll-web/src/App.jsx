import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function App() {
  // Estados para la interactividad
  const [imgColores, setImgColores] = useState('/1.svg'); 
  const [imgTamanos, setImgTamanos] = useState('/3.svg'); 
  const [imgVariantes, setImgVariantes] = useState('/2.svg'); 
  const [imgApp, setImgApp] = useState('/3F.svg');
  const [imgTipo,setImgTipo]=useState('/Tipografia.png');
  
  // Estado para la sección de Restricciones (Mal uso)
  const [esMalo, setEsMalo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('section').forEach(s => observer.observe(s));
  }, []);

  const secciones = [
    { 
      id: "intro", 
      titulo: "Cultura y Movimiento", 
      img: "/LogoOriginal_Fondo.svg", 
      desc: "Urban Roll no es solo skate; es una celebración de la libertad. Nuestra filosofía se basa en desafiar la gravedad y abrazar la energía underground de la ciudad." 
    },
     { 
      id: "simbolo", 
      titulo: "Nuestro Simbolo", 
      img: "/LogoOriginal_Sinfondo.svg", 
      desc: "Seleccionamos el logo principal porque cuenta con las siguientes características: Ilustración(símbolo),Logotipo,Composición dinámica,Transmite la esencia de una auténtica marca de skate." 
    },
    { 
      id: "colores", 
      titulo: "Paleta de Colores", 
      renderColores: true, 
      img: imgColores, 
      onClick: () => setImgColores(imgColores === '/LogoOriginal_Fondo.svg' ? '/PaletaColores.png' : '/LogoOriginal_Fondo.svg'), 
      desc: "Basado en el Azul Urbano Profundo (#05172F), que representa el asfalto nocturno, y el Verde Urbano (#70CBC2) para aportar energía juvenil y contraste." 
    },
    { 
      id: "tipografia", 
      titulo: "Tipografia", 
      renderColores: true, 
      img: imgTipo, 
      onClick: () => setImgTipo(imgTipo === '/Tipografia.png' ? '/LogoLetras_Fondo.svg' : '/Tipografia.png'), 
      desc: "La tipografía Owned fue seleccionada desde la página ffonts.net ,se puede ver como elemento principal del logotipo por su estética urbana inspirada en los graffitis y la cultura skate. Sus formas dinámicas transmiten energía, rebeldía y movimiento, pilares fundamentales de la identidad UrbanRoll." 
    },
     { 
      id: "Estilo", 
      titulo: "Estilo visual urbano", 
      img: "/Dinamismo.png", 
      desc: "Usando la fotografia urbana de alto contraste para definir el estilo que tendra Urbanroll, captando la cultura del skate, brindando autenticidad y energia." 
    },
    { 
  id: "tamanos", 
  titulo: "Tamaños Mínimos", 
  img: imgTamanos, 
  onClick: () => {
    setImgTamanos(prev => {
      if (prev === '/LogoLetrasM_Fondo.svg') return '/TamañoR.png';
      if (prev === '/TamañoR.png') return '/LogoSkaterM_Fondo.svg';
      return '/LogoLetrasM_Fondo.svg'; // Vuelve al inicio
    });
  }, 
  desc: "Para dimensiones reducidas como favicons o avatares, se debe usar únicamente el Isotipo del Skater (Símbolo) para garantizar la legibilidad. Haz clic para ver la comparativa entre versiones." 
},
 { 
      id: "Planimetria", 
      titulo: "Planimetria", 
      img: "/Planimetria.png", 
      desc: "Esta planimetría, diseñada en hoja milimetrada y con un estilo técnico de CAD, detalla la identidad visual de URBAN SKATE PARK, una marca con una fuerte identidad urbana y skater." 
    },
    { 
      id: "variantes", 
      titulo: "Variantes del Logo", 
      img: imgVariantes, 
      onClick: () => setImgVariantes(imgVariantes === '/LogoOriginal_Fondo.svg' ? '/LogoAlternativo.png' : '/LogoOriginal_Fondo.svg'), 
      desc: "El logotipo secundario es más adaptable y tiene mejor desempeño en redes sociales. Haz clic para alternar con la versión principal." 
    },
    { 
      id: "restricciones", 
      titulo: "Usos No Permitidos", 
      img: "/LogoOriginal_Fondo.svg", 
      onClick: () => setEsMalo(!esMalo), // Activa la deformación
      esRestriccion: true,
      desc: "¡Peligro! Haz clic en el logo para ver lo que NO debes hacer: No deformar, no estirar, ni aplicar sombras excesivas que alteren la tipografía 'Owned'." 
    },
    { 
      id: "aplicaciones", 
      titulo: "Aplicaciones Finales", 
      img: imgApp, 
      onClick: () => setImgApp(imgApp === '/Producto1.png' ? '/Producto2.png' : '/Producto1.png'), 
      desc: "La marca transmite la esencia de una auténtica marca de skate en cualquier soporte, desde tablas hasta aplicaciones digitales." 
    }
  ];

  return (
    <div className="bg-dark text-white">
      <Navbar variant="dark" sticky="top" style={{ backgroundColor: '#080605', borderBottom: '2px solid #70CBC2' }}>
        <Container>
          <Navbar.Brand href="#intro">
            <img src="/UrbanSkate.svg" width="30" height="30" className="d-inline-block align-top me-2" alt="logo" />
            URBANROLL
          </Navbar.Brand>
          <Nav className="ms-auto">
            {secciones.slice(0, 5).map(s => <Nav.Link key={s.id} href={`#${s.id}`}>{s.titulo}</Nav.Link>)}
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5">
        {secciones.map((sec, index) => (
          <section key={sec.id} id={sec.id} className="py-5">
            <Row className={`align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
              <Col md={6}>
                <h2 style={{ color: '#70CBC2' }}>{sec.titulo}</h2>
                <p className="lead">{sec.desc}</p>
                {sec.renderColores && (
                  <div className="d-flex gap-3 mt-3">
                    <div className="color-ball" style={{background: '#05172F', border: '1px solid white'}} title="Azul Urbano"></div>
                    <div className="color-ball" style={{background: '#70CBC2'}} title="Verde Urbano"></div>
                    <div className="color-ball" style={{background: '#080605'}} title="Negro Profundo"></div>
                  </div>
                )}
              </Col>
              <Col md={6} className="text-center">
                <div className="img-container" onClick={sec.onClick} style={{ cursor: 'pointer' }}>
                  <img 
                    src={sec.img} 
                    className={`img-fluid animar-imagen ${sec.id === 'restricciones' && esMalo ? 'logo-deformado' : ''}`} 
                    alt={sec.titulo} 
                  />
                  <div className="tap-hint">{sec.id === 'restricciones' ? (esMalo ? '¡Arréglalo!' : '¡Deformar!') : 'Clic para alternar'}</div>
                </div>
              </Col>
            </Row>
          </section>
        ))}
      </Container>
    </div>
  );
}

export default App;