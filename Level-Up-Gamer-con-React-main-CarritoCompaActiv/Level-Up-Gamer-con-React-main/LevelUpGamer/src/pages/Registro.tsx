import { NavLink } from "react-router-dom"

export const Registro = () => {
    return (
      <>
                <section className="container my-5">
            <div className="card-2 bg-dark text-light shadow-lg rounded-4 p-4 mx-auto" style={{ maxWidth: "600px" }}>
                <h2 className="text-center mb-4" style={{color: "#39FF14;"}}>Crear una cuenta</h2>
                <h6 className="text-center mb-5 text-light"> ¡Advertencia, necesitas ser mayor de 18 años para registrarte!</h6>
                <form id="loginForm" className="needs-validation" noValidate>
                <div id="regAlert" className="alert d-none" role="alert"></div>
                    <form id="formRegistro" noValidate />
                    <div className="mb-3">
                        <label htmlFor="runlog" className="form-label">Run</label>
                        <input type="text" id="runlog" className="form-control" required/>
                        <div className="invalid-feedback">Sin puntos, sin Guiones y sin digito verificador.</div>
                    </div>
                <div className="mb-3">
                    <label htmlFor="nomcomlog" className="form-label">Nombre Completo</label>
                    <input type="text" id="nomcomlog" className="form-control" required/>
                    <div className="invalid-feedback">Sólo letras y espacios, máximo 50 caracteres.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="correolog" className="form-label">Correo</label>
                    <input type="email" id="correolog" className="form-control" required/>
                    <div className="invalid-feedback">Debe ser un correo válido @duocuc.cl y no estar registrado.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordlog" className="form-label">Contraseña</label>
                    <input type="password" id="passwordlog" className="form-control" minLength={6} required/>
                    <div className="form-text text-info">Mín. 8 y Max. 10 carácteres, con mayúscula, minúscula, número y símbolo.</div>
                    <div className="invalid-feedback">La contraseña no cumple los requisitos.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmlog" className="form-label">Confirmar contraseña</label>
                    <input type="password" id="confirmlog" className="form-control" minLength={6} required/>
                    <div className="invalid-feedback">Las contraseñas no coinciden.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="comuna">Comuna</label>
                    <select id="comuna" className="form-select" required>
                    <option value="">Selecciona tu comuna…</option>
                    </select>
                    <div className="invalid-feedback">Selecciona una comuna.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="fecha" className="form-label">Fecha de nacimiento</label>
                    <input type="date" id="fecha" className="form-control" required/>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-success fw-bold rounded-pill px-4">Crear cuenta</button>
                </div>
                <div className="mt-3"> <p>¿Ya tienes una cuenta? <NavLink to="/Login" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Sesión inicial</NavLink></p></div>
                
                </form>
            </div>
            </section>
      </>
    )
  }
  