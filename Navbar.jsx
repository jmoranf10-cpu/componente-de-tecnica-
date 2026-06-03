import { useState } from 'react'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto)
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icono">⚡</span>
        <span className="logo-texto">TecnicaCP</span>
      </div>

      <button
        className="navbar-toggle"
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        {menuAbierto ? '✕' : '☰'}
      </button>

      <ul className={`navbar-links ${menuAbierto ? 'abierto' : ''}`}>
        <li><a href="#hero" onClick={() => setMenuAbierto(false)}>Inicio</a></li>
        <li><a href="#servicios" onClick={() => setMenuAbierto(false)}>Servicios</a></li>
        <li><a href="#tecnologias" onClick={() => setMenuAbierto(false)}>Tecnologías</a></li>
        <li><a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Navbar