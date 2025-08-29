import { useState } from 'react'

const contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      name: name,
      email: email,
      message: message
    })
    alert('Mensaje enviado con éxito')
    // Limpiar formulario
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre completo</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                className="form-control"
                rows="5"
                placeholder="Tu mensaje..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="form-submit">
              <button type="submit" className="btn">Enviar mensaje</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default contact