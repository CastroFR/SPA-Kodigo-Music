import Mixdiario from '../assets/images/playlist/Mixdiario.png'
import Top2023 from '../assets/images/playlist/Top2023.png'
import RockClásico from '../assets/images/playlist/RockClásico.png'
import ChillOut from '../assets/images/playlist/ChillOut.png'

const Playlist = () => {
  const playlists = [
    {
      id: 1,
      title: "Mix diario",
      description: "Tu mix personalizado con música que te encanta",
      image: Mixdiario
    },
    {
      id: 2,
      title: "Top 2023",
      description: "Las canciones más populares del año",
      image: Top2023
    },
    {
      id: 3,
      title: "Rock Clásico",
      description: "Los mejores temas de rock de todos los tiempos",
      image: RockClásico
    },
    {
      id: 4,
      title: "Chill Out",
      description: "Música relajante para cualquier momento",
      image: ChillOut
    }
  ]

  return (
    <section className="playlists" id="playlists">
      <div className="container">
        <h2 className="section-title">Listas populares</h2>
        <div className="playlist-grid">
          {playlists.map(playlist => (
            <div className="playlist-card" key={playlist.id}>
              <div className="card-img">
                <img src={playlist.image} alt={playlist.title} />
              </div>
              <div className="card-content">
                <h3>{playlist.title}</h3>
                <p>{playlist.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Playlist