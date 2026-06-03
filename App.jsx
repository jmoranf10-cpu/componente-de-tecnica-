import { useState } from 'react'
import './App.css'
import Navbar from './Componentes/Navbar'
import Hero from './Componentes/Hero'
import Card from './Componentes/Card'
import Footer from './Componentes/Footer'

// ─── COMPONENTE: Sección de Servicios ────────────────────────────────────────
function Servicios() {
  const servicios = [
    {
      icono: '🧩',
      titulo: 'Componentes React',
      descripcion: 'Bloques reutilizables de UI que encapsulan lógica y presentación en un solo lugar.',
      color: 'azul',
    },
    {
      icono: '⚡',
      titulo: 'Estado Reactivo',
      descripcion: 'Con useState y useEffect tu interfaz se actualiza automáticamente al cambiar los datos.',
      color: 'morado',
    },
    {
      icono: '🔗',
      titulo: 'Props y Datos',
      descripcion: 'Pasa información entre componentes usando props para crear interfaces dinámicas.',
      color: 'verde',
    },
    {
      icono: '🎯',
      titulo: 'Eventos JavaScript',
      descripcion: 'onClick, onChange, onSubmit... maneja cualquier interacción del usuario con facilidad.',
      color: 'naranja',
    },
  ]

  return (
    <section id="servicios" className="seccion servicios">
      <div className="seccion-encabezado">
        <span className="seccion-etiqueta">¿Qué aprenderás?</span>
        <h2 className="seccion-titulo">Conceptos clave de React</h2>
        <p className="seccion-subtitulo">Haz clic en cada tarjeta para ver más información</p>
      </div>
      <div className="cards-grid">
        {servicios.map((s, i) => (
          <Card
            key={i}
            icono={s.icono}
            titulo={s.titulo}
            descripcion={s.descripcion}
            color={s.color}
          />
        ))}
      </div>
    </section>
  )
}

// ─── COMPONENTE: Contador interactivo ────────────────────────────────────────
function ContadorInteractivo() {
  const [contador, setContador] = useState(0)
  const [historial, setHistorial] = useState([])

  const incrementar = () => {
    setContador(c => c + 1)
    setHistorial(h => [...h, `+1 → ${contador + 1}`].slice(-5))
  }
  const decrementar = () => {
    setContador(c => c - 1)
    setHistorial(h => [...h, `-1 → ${contador - 1}`].slice(-5))
  }
  const reiniciar = () => {
    setContador(0)
    setHistorial([])
  }

  const color = contador > 0 ? '#22c55e' : contador < 0 ? '#ef4444' : '#94a3b8'

  return (
    <div className="contador-widget">
      <h3 className="contador-label">Contador en tiempo real</h3>
      <div className="contador-numero" style={{ color }}>{contador}</div>
      <div className="contador-botones">
        <button className="btn-contador restar" onClick={decrementar}>−</button>
        <button className="btn-contador reiniciar" onClick={reiniciar}>↺</button>
        <button className="btn-contador sumar" onClick={incrementar}>+</button>
      </div>
      {historial.length > 0 && (
        <div className="contador-historial">
          <p className="historial-label">Últimas acciones:</p>
          {historial.map((h, i) => (
            <span key={i} className="historial-item">{h}</span>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── COMPONENTE: Sección de Tecnologías ──────────────────────────────────────
function Tecnologias() {
  const techs = [
    { nombre: 'React', version: '19', icono: '⚛️', descripcion: 'Biblioteca UI' },
    { nombre: 'JavaScript', version: 'ES2024', icono: '🟡', descripcion: 'Lenguaje base' },
    { nombre: 'Vite', version: '8', icono: '🔥', descripcion: 'Bundler rápido' },
    { nombre: 'CSS3', version: 'Modern', icono: '🎨', descripcion: 'Estilos visuales' },
    { nombre: 'JSX', version: 'Sintaxis', icono: '📝', descripcion: 'HTML en JS' },
    { nombre: 'HTML5', version: 'Semántico', icono: '🏗️', descripcion: 'Estructura web' },
  ]

  const [techActiva, setTechActiva] = useState(null)

  return (
    <section id="tecnologias" className="seccion tecnologias">
      <div className="seccion-encabezado">
        <span className="seccion-etiqueta">Stack del proyecto</span>
        <h2 className="seccion-titulo">Tecnologías utilizadas</h2>
        <p className="seccion-subtitulo">Haz clic para ver la descripción</p>
      </div>
      <div className="tech-grid">
        {techs.map((t, i) => (
          <button
            key={i}
            className={`tech-chip ${techActiva === i ? 'activo' : ''}`}
            onClick={() => setTechActiva(techActiva === i ? null : i)}
          >
            <span className="tech-icono">{t.icono}</span>
            <span className="tech-nombre">{t.nombre}</span>
            <span className="tech-version">{t.version}</span>
            {techActiva === i && <span className="tech-desc">{t.descripcion}</span>}
          </button>
        ))}
      </div>
      <ContadorInteractivo />
    </section>
  )
}

// ─── COMPONENTE RAÍZ: App ─────────────────────────────────────────────────────
function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Tecnologias />
      </main>
      <Footer />
    </div>
  )
}

export default App