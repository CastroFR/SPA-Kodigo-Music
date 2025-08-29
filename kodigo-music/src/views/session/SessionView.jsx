import { useState } from 'react'
import { useNavigate } from 'react-router'
import Song1 from '../../assets/images/songs/song1.png'
import Song2 from '../../assets/images/songs/song2.png'

const SessionView = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const navigate = useNavigate()

  // Datos de ejemplo para las canciones
  const songs = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      image: Song1
    },
    {
      id: 2,
      title: "Save Your Tears",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:35",
      image: Song2
    },
    {
      id: 3,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      image: Song1
    },
    {
      id: 4,
      title: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      album: "F*CK LOVE 3: OVER YOU",
      duration: "2:21",
      image: Song2
    },
    {
      id: 5,
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      duration: "2:58",
      image: Song1
    }
  ]

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const playNext = () => {
    setCurrentSongIndex((prevIndex) => 
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    )
  }

  const playPrevious = () => {
    setCurrentSongIndex((prevIndex) => 
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    )
  }

  const currentSong = songs[currentSongIndex]

  return (
    <div className="session-view">
      <div className="session-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <i className="fas fa-arrow-left"></i> Volver al inicio
        </button>
        <h1>Sesión de Reproducción</h1>
      </div>

      <div className="session-content">
        <div className="player-large">
          <div className="album-art">
            <img src={currentSong.image} alt={currentSong.album} />
          </div>
          <div className="song-info-large">
            <h2>{currentSong.title}</h2>
            <p>{currentSong.artist}</p>
            <p className="album-name">{currentSong.album}</p>
          </div>
          <div className="player-controls-large">
            <div className="control-buttons-large">
              <button onClick={playPrevious}><i className="fas fa-step-backward"></i></button>
              <button className="play-pause-large" onClick={togglePlay}>
                <i className={isPlaying ? "fas fa-pause" : "fas fa-play"}></i>
              </button>
              <button onClick={playNext}><i className="fas fa-step-forward"></i></button>
            </div>
            <div className="progress-container">
              <div className="progress-time">0:00</div>
              <div className="progress-bar-large">
                <div className="progress-large"></div>
              </div>
              <div className="progress-time">{currentSong.duration}</div>
            </div>
          </div>
          <div className="additional-controls-large">
            <button><i className="fas fa-heart"></i></button>
            <button><i className="fas fa-random"></i></button>
            <button><i className="fas fa-repeat"></i></button>
            <button><i className="fas fa-volume-up"></i></button>
          </div>
        </div>

        <div className="playlist-container">
          <h3>Lista de reproducción</h3>
          <div className="playlist-songs">
            {songs.map((song, index) => (
              <div 
                key={song.id} 
                className={`song-item ${index === currentSongIndex ? 'active' : ''}`}
                onClick={() => setCurrentSongIndex(index)}
              >
                <div className="song-number">{index + 1}</div>
                <div className="song-image">
                  <img src={song.image} alt={song.title} />
                </div>
                <div className="song-details">
                  <h4>{song.title}</h4>
                  <p>{song.artist}</p>
                </div>
                <div className="song-album">{song.album}</div>
                <div className="song-duration">{song.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SessionView