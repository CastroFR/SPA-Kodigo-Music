
import { useNavigate } from 'react-router'

const heroSection = () => {
  const navigate = useNavigate()

  const handleStartClick = () => {
    navigate('/session')
  }

  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Tu música, a tu manera</h1>
        <p>Descubre millones de canciones, podcasts y artistas con Kodigo Music. Disfruta de tu música en cualquier lugar, incluso sin conexión.</p>
        <button className="btn" onClick={handleStartClick}>Comenzar ahora</button>
      </div>
    </section>
  )
}

export default heroSection