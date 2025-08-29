import { useState } from 'react'
import { Link } from 'react-router'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <Link to="/" className="logo-link">
              <div className="logo">
                <i className="fas fa-music"></i>
                <span>Kodigo Music</span>
              </div>
            </Link>
            <ul className="nav-links">
              <li><Link to="/">Inicio</Link></li>
              <li><a href="#playlists">Listas</a></li>
              <li><a href="#artists">Artistas</a></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
            <div className="user-actions">
              <Link to="/login" className="btn">Iniciar sesión</Link>
            </div>
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </nav>
        </div>
      </header>

      {/* Menú móvil */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-menu-close" onClick={toggleMobileMenu}>
          <i className="fas fa-times"></i>
        </button>
        <ul>
          <li><Link to="/" onClick={toggleMobileMenu}>Inicio</Link></li>
          <li><a href="#playlists" onClick={toggleMobileMenu}>Listas</a></li>
          <li><a href="#artists" onClick={toggleMobileMenu}>Artistas</a></li>
          <li><Link to="/contact" onClick={toggleMobileMenu}>Contacto</Link></li>
          <li><Link to="/login" onClick={toggleMobileMenu}>Iniciar sesión</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header