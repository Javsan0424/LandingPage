import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
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
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Portafolio 1</h2>
          <p>https://drive.google.com/drive/folders/1fb9PE_rN9aIeQrcTryo9Rhz6Fl4xbE_l?usp=sharing</p>
        </div>
      </section>



      

      <br />

      <section id="portafolio-2">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Portafolio 2: Juego de la Independencia de México</h2>
          <p>
            Como reto se nos encargo hacer un juego sobre la independencia de México
          </p>

          {/* Información principal del reto y concepto */}
          <div className="portfolio-content">
            <article className="portfolio-card">
              <h3>Descripción del Reto</h3>
              <p>
                Eres un general de la rebelión en la independencia de México. Tu deber es la de hacer una estrategia para ganar la batalla cuando el momento llegué. Morir significa que la estrategia no funcionará y por ende la rebelión fracasa si se ejecuta ese plan.
              </p>
            </article>

            <article className="portfolio-card">
              <h3>Concepto y Relación con la Independencia de México</h3>
              <p>
               El general está planeando una estrategia que sea viable para la batalla que está por venir estando en desventaja debido a su armamento y personal.
              </p>
            </article>

            <article className="portfolio-card">
              <h3>Estética Core, Dinámicas y Mecánicas</h3>
              <p>Una estética core: Challenge
El juego está hecho para ser progresivamente más difícil para que el jugador con cada vez más enemigos que tiene que eliminar y tiene que pensar en una estrategia para poder ganar la batalla.
Restricción de diseño: Esta estética se puede probar en el combate por turnos ya que solo tienes tres personajes que controlas mientras que los enemigos vienen en oleadas.
Dos dinámicas
Define al menos dos dinámicas que emerjan durante la partida. Explica:
La primera dinámica es la estrategia. El jugador está fomentado a tomar diferentes acciones según le convenga si atacar al enemigo, defenderse o descansar para recuperar MP.
Frustración. El jugador solo tiene máximo tres personajes no importa lo que haga por lo que está destinado a perder a alguno de sus personajes a lo largo de la partida con la oleadas de enemigos.

Ambas dinámicas ayudan a la estética de challenge ya que hacen a la experiencia más difícil y fomentan la estética de reto haciendo que la cantidad de enemigos hagan una dificultad más alta y recursos limitados que tienes que manejar..
Tres mecánicas


Mecánica de combate: el jugador tiene que seleccionar su acción del turno con los botones disponibles:
Entradas: Ataque, ataque especial, proteger y descansar
Tu ataque está limitado por tu stat de ataque y tu ataque especial por su stat de Ataque.
No puedes recuperar más mana de máximo mana.
Retroalimentación: Necesita más balanceo para que se sienta justo.
Esto hace que el jugador sienta frustración como dinámica al tener muchos enemigos y la estética de challenge
Mecánica de ataque: Un personaje solo puede atacar una vez por turno
Entradas: N/A
Todos los personajes solo pueden hacer una acción una vez por turnos y avanza primero quien tenga más velocidad.
Como no se sube de nivel no hay manera de que haya dinámicas con la velocidad que fomenten el challenge.
Relación con la dinámica y estática es que esto fomenta que el jugador tenga acciones limitadas por lo que fomenta la estrategia y la frustración ya que los enemigos en la oleada tres te superan en número y por ende tienen más acciones.
Mecánica de ataque especial: un jugador tiene un ataque especial que puede infligir un estado a un enemigo como desangrado o quemado.
Entrada del jugador: ataque especial
Cada ataque especial tiene sus atributos y estados que puede infligir. Quemado hace que tengas menos ataque y desangrado hace que se pierda vida cada turno que pasa. También requieren que gastes puntos de MP para usarse por lo que si no tienes MP disponible no puedes usar el ataque.
Los ataques hacen muy poco daño para lo que deberían por lo que la estrategia óptima es usar el ataque normal.
Esto fomenta la estrategia ya que le da al jugador una opción más al combatir y como el mp es limitado genera frustración cuando no lo tienes en un punto crítico del enfrentamiento lo que ayuda con la estética challenge.
</p>
            </article>

            {/* Multimedia */}
            <article className="portfolio-card">
              <h3>Gameplay</h3>
              <div className="media-container">
                {/* Reemplaza con tus imágenes o video */}
                <img src="Captura de pantalla 2026-09-18 193730.png" />
                {/* <iframe src="URL_DEL_VIDEO" title="Video de Gameplay" allowFullScreen></iframe> */}
              </div>
            </article>

            {/* Arquitectura Técnica */}
            <article className="portfolio-card">
              <h3>Patrones de Diseño Implementados</h3>
              <p>
                State: Parcialmente
Problema: Necesito saber el estado de los personajes si están vivos o muertos, saltarme sus turnos y si son enemigos eliminarlos de la escena
Este patrón es adecuado debido a que necesito saber si un personaje está vivo para que pueda hacer su turno de lo contrario no puede hacer su accion.
BattleField, TeamManager y EnemyManager

              </p>

              <p>Strategy
Problema: Necesito gestionar ataques dependiendo de qué tipo de ataque especial 
Este patrón me ayuda mucho ya que puedo manejar de forma efectiva diferentes ataques con el mismo método con ayuda de un scriptable object
BattleField, Characterstat, EnemyIA, Attack
</p>
            </article>

            <article className="portfolio-card">
              <h3>Principales Decisiones y Retos Técnicos</h3>
              <p>
                Decisiones técnicas relevantes y alternativas descartadas.
Las ideas descartadas se debieron a falta de tiempo por lo que se optó por una versión más corta:
Sistema de robo para obtener ataques especiales
Sistema de subida de nivel
Animación más complejas con sprites específicos
Más ataques especiales que podía curar o nerfear estadísticas del enemigo.

              </p>
            </article>

            <article className="portfolio-card">
              <h3>Resultados de las Pruebas y Cambios Realizados</h3>
              <p>
                El resumen de las Pruebas es que mayoría funciona bien y no hay nigun error fatal que destruya la experiencia aunque si hay un error al justo cuando sale el panel de la victoria con un error debido a que no hay enemigos en la lista de turnos
              </p>

              <p>El juego es facil. Y por el momento los ataques especiales requieren de balanceo para que la experiencia de juego sea mejor.</p>
            </article>
          </div>

          {/* Enlaces y Recursos Externos */}
          <h3 style={{ marginTop: '2rem' }}>Enlaces del Proyecto</h3>
          <ul>
            <li>
              <a href="https://javsan.itch.io/plan-attack" target="_blank" rel="noopener noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#documentation-icon"></use>
                </svg>
                Juego Publicado
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/1fjPeTHmb0LuLwBh7lnoT2cT41wCFw5EKXXXzIedpVLo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#documentation-icon"></use>
                </svg>
                Game Design Document (GDD)
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/16CtuIt0z6bANAnuBGnBC0kyfO44NyYuO12rQrK2vlgs/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#documentation-icon"></use>
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