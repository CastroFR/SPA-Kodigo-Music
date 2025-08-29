

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Kodigo Music</h3>
            <p>Disfruta de la mejor experiencia musical con millones de canciones y podcasts.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Enlaces útiles</h3>
            <ul>
              <li><a href="#">Soporte</a></li>
              <li><a href="#">Reproductor web</a></li>
              <li><a href="#">App móvil gratis</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Planes</h3>
            <ul>
              <li><a href="#">Premium Individual</a></li>
              <li><a href="#">Premium Duo</a></li>
              <li><a href="#">Premium Familiar</a></li>
              <li><a href="#">Premium Estudiantil</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Kodigo Music. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer