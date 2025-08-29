import DjHarmony from '../assets/images/artists/djHarmony.png'
import Taylor from '../assets/images/artists/taylor-voice.png'
import Weekend from '../assets/images/artists/weeknd-vibes.png'
import Billie from '../assets/images/artists/billie-beats.png'
import TrenAlSur from '../assets/images/artists/prisioneros.png'

const Artists = () => {
  const artists = [
    {
      id: 1,
      name: "Jairo Vega",
      followers: "65M seguidores",
      image: DjHarmony
    },
    {
      id: 2,
      name: "Taylor Voice",
      followers: "22M seguidores",
      image: Taylor
    },
    {
      id: 3,
      name: "Weeknd Vibes",
      followers: "18M seguidores",
      image: Weekend
    },
    {
      id: 4,
      name: "DJ Harmony",
      followers: "30M seguidores",
      image: DjHarmony
    },
    {
      id: 5,
      name: "Los Prisioneros",
      followers: "55M seguidores",
      image: TrenAlSur
    }
  ]

  return (
    <section className="artists" id="artists">
      <div className="container">
        <h2 className="section-title">Artistas destacados</h2>
        <div className="artist-grid">
          {artists.map(artist => (
            <div className="artist-card" key={artist.id}>
              <div className="artist-img">
                <img src={artist.image} alt={artist.name} />
              </div>
              <h3>{artist.name}</h3>
              <p>{artist.followers}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Artists