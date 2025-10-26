import { NavLink } from "react-router-dom"

export const Login = () => {
  return (
    <>
    <section className="container my-5" >
    <div className="card-2 bg-dark text-light shadow-lg rounded-4 p-4 mx-auto" style={{maxWidth: '600px'}}>
      <h2 className="text-center mb-4" style={{color: '#39FF14'}}>Inicio de Sesion</h2>
      <form id="loginForm" className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="correoreg" className="form-label">Correo</label>
          <input type="email" id="correolog" className="form-control" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="passwordreg" className="form-label">Contraseña</label>
          <input type="password" id="passwordlog" className="form-control" minLength={6} required/>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success fw-bold rounded-pill px-4">Iniciar Sesion</button>
        </div>
        <div className="mt-3"> <p>¿No tienes una cuenta? <NavLink to="/register" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Crea una cuenta</NavLink></p></div>
      </form>
    </div>
  </section>
    </>
  )
}
