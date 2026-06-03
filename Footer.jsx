import { useState } from 'react'

// ─── COMPONENTE: CambiaColor ─────────────────────────────────────────────────
function CambiaColor() {
  const colores = ['#6366f1', '#ec4899', '#14b8a6', '#f59e0b', '#22c55e', '#ef4444']
  const nombres = ['Índigo', 'Rosa', 'Teal', 'Ámbar', 'Verde', 'Rojo']
  const [colorActual, setColorActual] = useState(colores[0])
  const [nombreColor, setNombreColor] = useState(nombres[0])

  const cambiarColor = () => {
    const idx = (colores.indexOf(colorActual) + 1) % colores.length
    setColorActual(colores[idx])
    setNombreColor(nombres[idx])
  }

  return (
    <div className="cambia-color" style={{ borderColor: colorActual }}>
      <div className="color-muestra" style={{ background: colorActual }}></div>
      <div className="color-info">
        <h4>Demo: Cambio de color</h4>
        <p>Color actual: <strong style={{ color: colorActual }}>{nombreColor}</strong></p>
        <button
          className="btn-color"
          style={{ background: colorActual }}
          onClick={cambiarColor}
        >
          Cambiar color 🎨
        </button>
      </div>
    </div>
  )
}

// ─── COMPONENTE: Footer ───────────────────────────────────────────────────────
function Footer() {
  const año = new Date().getFullYear()
  const [mostrarInfo, setMostrarInfo] = useState(false)

  return (
    <footer id="contacto" className="footer">
      <div className="footer-contenido">
        <div className="footer-brand">
          <span className="logo-icono">⚡</span>
          <span className="logo-texto">TecnicaCP</span>
          <p className="footer-desc">
            Proyecto de actividad práctica — Fundamentos de React
          </p>
        </div>

        <div className="footer-links">
          <h4>Componentes</h4>
          <ul>
            <li>Navbar</li>
            <li>Hero</li>
            <li>Card</li>
            <li>Footer</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Conceptos</h4>
          <ul>
            <li>useState</li>
            <li>Props</li>
            <li>Eventos</li>
            <li>JSX</li>
          </ul>
        </div>

        <div className="footer-cta">
          <h4>¿Sabías que?</h4>
          <button
            className="btn-footer"
            onClick={() => setMostrarInfo(!mostrarInfo)}
          >
            {mostrarInfo ? 'Ocultar ▲' : 'Ver dato curioso ▼'}
          </button>
          {mostrarInfo && (
            <p className="footer-dato">
              React fue creado por Facebook en 2013 y actualmente
              es una de las bibliotecas más usadas del mundo. 🚀
            </p>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <CambiaColor />
        <p className="footer-copy">© {año} TecnicaCP · Hecho con React ⚛️</p>
      </div>
    </footer>
  )
}

export default Footer