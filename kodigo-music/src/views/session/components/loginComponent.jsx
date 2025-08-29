
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router'

// Esquema de validación
const schema = yup.object({
  email: yup.string().email("Por favor ingresa un formato correcto: email@email.com").required("El email es requerido"),
  password: yup.string().required("La contraseña es requerida")
})

const loginComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data)
    // Simulamos un login exitoso
    alert('Inicio de sesión exitoso')
    // Redirigimos a la página de inicio
    navigate('/')
  }

  return (
    <section className="login">
      <div className="container">
        <div className="form-container">
          <h2 className="section-title">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="tu@email.com"
                {...register('email')}
              />
              {errors.email && <div className="error-message">{errors.email.message}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Tu contraseña"
                {...register('password')}
              />
              {errors.password && <div className="error-message">{errors.password.message}</div>}
            </div>
            <div className="form-submit">
              <button type="submit" className="btn">Iniciar Sesión</button>
            </div>
            <div className="form-footer">
              <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default loginComponent