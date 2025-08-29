
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router'

// Esquema de validación
const schema = yup.object({
  email: yup.string().email("Por favor ingresa un formato correcto: email@email.com").required("El email es requerido"),
  password: yup.string()
    .required("La contraseña es requerida")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[A-Z]/, "Debe contener al menos una mayúscula")
    .matches(/[a-z]/, "Debe contener al menos una minúscula")
    .matches(/[0-9]/, "Debe contener al menos un número")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Debe contener al menos un carácter especial"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Debes confirmar tu contraseña')
})

const registerComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data)
    // Simulamos el registro exitoso
    alert('Registro exitoso')
    // Redirigimos a la página de inicio
    navigate('/')
  }

  return (
    <section className="login">
      <div className="container">
        <div className="form-container">
          <h2 className="section-title">Crear Cuenta</h2>
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
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                placeholder="Confirma tu contraseña"
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && <div className="error-message">{errors.confirmPassword.message}</div>}
            </div>
            <div className="form-submit">
              <button type="submit" className="btn">Registrarse</button>
            </div>
            <div className="form-footer">
              <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default registerComponent