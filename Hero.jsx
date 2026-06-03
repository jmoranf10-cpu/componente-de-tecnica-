import { useState } from 'react'

function Hero() {
  const [mensaje, setMensaje] = useState('')
  const [mostrarBienvenida, setMostrarBienvenida] = useState(false)

  const nombres = ['Desarrollador', 'Estudiante', 'Creador', 'Innovador']
  const [indiceNombre, setIndiceNombre] = useState(0)

  const manejarClick = () => {
    setMostrarBienvenida(true)
    setMensaje(`¡Hola, ${nombres[indiceNombre]}! 👋 Bienvenido a React.`)
    setIndiceNombre((indiceNombre + 1) % nombres.length)
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-contenido">
        <div className="hero-etiqueta">Aprende React desde cero</div>
        <h1 className="hero-titulo">
          Construye interfaces<br />
          <span className="hero-acento">modernas y dinámicas</span>
        </h1>
        <p className="hero-subtitulo">
          Descubre cómo React transforma la manera en que desarrollamos
          aplicaciones web con componentes reutilizables y estado reactivo.
        </p>

        <div className="hero-acciones">
          <button className="btn-primario" onClick={manejarClick}>
            ¡Salúdame! 👋
          </button>
          <a href="#servicios" className="btn-secundario">
            Ver servicios →
          </a>
        </div>

        {mostrarBienvenida && (
          <div className="hero-mensaje">
            {mensaje}
          </div>
        )}
      </div>

      <div className="hero-visual">
        <div className="codigo-bloque">
          <div className="codigo-barra">
            <span className="dot rojo"></span>
            <span className="dot amarillo"></span>
            <span className="dot verde"></span>
            <span style={{marginLeft: 'auto', fontSize: '11px', opacity: 0.5}}>App.jsx</span>
          </div>
          <pre className="codigo-texto">
{`function Saludo() {
  const [texto, setTexto] =
    useState('Hola!')

  return (
    <div>
      <h1>{texto}</h1>
      <button onClick={() =>
        setTexto('React!')}>
        Cambiar
      </button>
    </div>
  )
}`}
          </pre>
        </div>
      </div>
    </section>
  )
}

export default Hero