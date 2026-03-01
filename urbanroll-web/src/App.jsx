import React from 'react';
// Importamos Bootstrap primero para que nuestros estilos personalizados puedan sobrescribirlo si es necesario
import 'bootstrap/dist/css/bootstrap.min.css'; 
// IMPORTANTE: Importa tu archivo de estilos personalizado aquí
import './App.css'; 

import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const secciones = [
  { id: "intro", titulo: "UrbanRoll", desc: "Cultura underground y movimiento." },
  { id: "paleta", titulo: "Paleta de Colores", desc: "Azul #05172F y Verde #70CBC2." },
  { id: "tipografia", titulo: "Tipografía", desc: "Uso de la fuente 'Owned' estilo graffiti." },
  { id: "logo-principal", titulo: "Logotipo Principal", desc: "Identidad visual completa." },
  { id: "logo-secundario", titulo: "Logotipo Secundario", desc: "Versión adaptable para redes." },
  { id: "simbolo", titulo: "Símbolo", desc: "El Skater: energía y rebeldía." },
  { id: "clearspace", titulo: "Espacio Libre", desc: "Regla de unidad 1x U." },
  { id: "restricciones", titulo: "Restricciones", desc: "Lo que no se debe hacer con la marca." },
  { id: "usos", titulo: "Aplicaciones", desc: "Cómo se ve la marca en el mundo real." },
  { id: "descargas", titulo: "Assets", desc: "Descarga de recursos oficiales." }
];

function App() {
  return (
    <>
      <Navbar variant="dark" sticky="top" style={{ backgroundColor: '#080605' }}>
        <Container>
          <Navbar.Brand href="#intro">URBANROLL</Navbar.Brand>
          <Nav className="ms-auto">
            {secciones.slice(0, 5).map(s => <Nav.Link key={s.id} href={`#${s.id}`}>{s.titulo}</Nav.Link>)}
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5">
        {secciones.map((sec, index) => (
          <section key={sec.id} id={sec.id} className="py-5">
            {/* Aplicación del Punto 3: Grid System de Bootstrap */}
            <Row className={`align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
              <Col md={6}>
                <h2>{sec.titulo}</h2>
                <p>{sec.desc}</p>
              </Col>
              <Col md={6} className="text-center">
                <div style={{ border: '2px dashed #70CBC2', padding: '50px' }}>
                  [Imagen de {sec.titulo}]
                </div>
              </Col>
            </Row>
          </section>
        ))}
      </Container>
    </>
  );
}

export default App;

