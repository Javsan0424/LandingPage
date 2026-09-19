import './App.css'

function App() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <>
      <section id="center">
        <div className="hero"></div>
        <div>
          <h1>Javier Santos Pérez - A01198909</h1>
          <h1>Javsan</h1>
          <p>Estudiante del TEC 7to semestre</p>

          <div>
            Proyectos destacados:
            <p>Portafolio 1</p>
            <p>Portafolio 2</p>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href={`${baseUrl}icons.svg#documentation-icon`}></use>
          </svg>
          <h2>Portafolio 1</h2>
          <p>
            <a 
              href="https://drive.google.com/drive/folders/1fb9PE_rN9aIeQrcTryo9Rhz6Fl4xbE_l?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ver Carpeta de Google Drive
            </a>
          </p>
        </div>
      </section>

      <br />

      <section id="portafolio-2">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href={`${baseUrl}icons.svg#documentation-icon`}></use>
          </svg>
          <h2>Portafolio 2: Juego de la Independencia de México</h2>
          <p>
            Como reto se nos encargó hacer un juego sobre la Independencia de México.
          </p>

          <div className="portfolio-content">
            <article className="portfolio-card">
              <h3>Descripción del Reto</h3>
              <p>
                Eres un general de la rebelión en la Independencia de México. Tu deber es trazar una estrategia para ganar la batalla cuando llegue el momento. Morir significa que la estrategia no funcionará y la rebelión fracasará.
              </p>
            </article>

            <article className="portfolio-card">
              <h3>Concepto y Relación con la Independencia de México</h3>
              <p>
                El general está planeando una estrategia viable para la batalla, estando en clara desventaja de armamento y personal.
              </p>
            </article>

            <article className="portfolio-card">
              <h3>Estética Core, Dinámicas y Mecánicas</h3>
              <p><strong>Estética Core: Challenge</strong></p>
              <p>
                El juego aumenta su dificultad progresivamente con oleadas de enemigos. Se prueba en el combate por turnos, donde solo controlas tres personajes.
              </p>
              <p><strong>Dinámicas:</strong></p>
              <ul>
                <li><strong>Estrategia:</strong> El jugador decide entre atacar, defenderse o descansar para recuperar MP.</li>
                <li><strong>Frustración:</strong> Al tener máximo tres personajes, el jugador está destinado a perder algunos durante las oleadas.</li>
              </ul>
              <p><strong>Mecánicas:</strong></p>
              <ul>
                <li><strong>Combate:</strong> Selección de acciones por turnos (Ataque, Ataque Especial, Proteger, Descansar).</li>
                <li><strong>Ataque:</strong> Una acción por turno, orden ascendente según la velocidad del personaje.</li>
                <li><strong>Ataque Especial:</strong> Inflige estados como quemado (baja ataque) o desangrado (daño por turno) consumiendo MP.</li>
              </ul>
            </article>

            <article className="portfolio-card">
              <h3>Gameplay</h3>
              <div className="media-container">
                <img 
                  src={`${baseUrl}Captura de pantalla 2026-09-18 193730.png`} 
                  alt="Captura de pantalla de Gameplay" 
                />
              </div>
            </article>

            <article className="portfolio-card">
              <h3>Patrones de Diseño Implementados</h3>
              <p>
                <strong>State (Parcial):</strong> Gestiona si un personaje está vivo o muerto para omitir su turno o eliminarlo de la escena (<code>BattleField</code>, <code>TeamManager</code>, <code>EnemyManager</code>).
              </p>
              <p>
                <strong>Strategy:</strong> Gestiona distintos tipos de ataques especiales desde un mismo método mediante Scriptable Objects (<code>BattleField</code>, <code>Characterstat</code>, <code>EnemyIA</code>, <code>Attack</code>).
              </p>
            </article>

            <article className="portfolio-card">
              <h3>Principales Decisiones y Retos Técnicos</h3>
              <p>
                Por limitaciones de tiempo se descartaron: sistema de robo para ataques, subida de nivel, animaciones complejas y ataques de curación o debuffeo.
              </p>
            </article>

            <article className="portfolio-card">
              <h3>Resultados de las Pruebas y Cambios Realizados</h3>
              <p>
                El juego funciona de forma estable sin errores fatales, salvo un bug menor al desplegar el panel de victoria si la lista de turnos de enemigos se vacía. Los ataques especiales requieren un rebalanceo para optimizar su uso frente al ataque estándar.
              </p>
            </article>
          </div>

          <h3 style={{ marginTop: '2rem' }}>Enlaces del Proyecto</h3>
          <ul>
            <li>
              <a href="https://javsan.itch.io/plan-attack" target="_blank" rel="noopener noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href={`${baseUrl}icons.svg#documentation-icon`}></use>
                </svg>
                Juego Publicado
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/1fjPeTHmb0LuLwBh7lnoT2cT41wCFw5EKXXXzIedpVLo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href={`${baseUrl}icons.svg#documentation-icon`}></use>
                </svg>
                Game Design Document (GDD)
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/16CtuIt0z6bANAnuBGnBC0kyfO44NyYuO12rQrK2vlgs/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href={`${baseUrl}icons.svg#documentation-icon`}></use>
                </svg>
                Documentación Técnica
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App