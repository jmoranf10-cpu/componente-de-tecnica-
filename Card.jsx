import { useState } from 'react'

function Card({ icono, titulo, descripcion, color }) {
  const [expandido, setExpandido] = useState(false)

  return (
    <div className={`card card-${color}`} onClick={() => setExpandido(!expandido)}>
      <div className="card-icono">{icono}</div>
      <h3 className="card-titulo">{titulo}</h3>
      <p className="card-descripcion">{descripcion}</p>

      {expandido && (
        <div className="card-extra">
          <p>✓ Implementado con React</p>
          <p>✓ Componente reutilizable</p>
          <p>✓ Eventos de JavaScript</p>
        </div>
      )}

      <span className="card-toggle">
        {expandido ? 'Ver menos ▲' : 'Ver más ▼'}
      </span>
    </div>
  )
}

export default Card