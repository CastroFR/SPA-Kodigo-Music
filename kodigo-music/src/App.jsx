import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Header from './components/header'
import HeroSection from './components/herosection'
import Playlist from './components/playlist'
import Artists from './components/artists'
import Contact from './components/contact'
import Footer from './components/footer'
import Login from './views/session/components/loginComponent'
import Register from './views/session/components/registerComponent'
import SessionView from './views/session/SessionView'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <Playlist />
                <Artists />
              </>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/session" element={<SessionView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App