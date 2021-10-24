import React from 'react'

const Login = () => {
    return (
        <div>
            <section className="form-login">
    <h1> Iniciar sesión CodeMakers</h1>
      <br/>
      <input className="controls loginCont" type="text" name="usuario" value="" placeholder="Usuario"/>
      <input className="controls loginCont" type="password" name="contraseña" value="" placeholder="Contraseña"/>
      <input className="button botonPrincipal" type="submit" name="" value="Ingresar con Gmail"/>
      <input className="button botonPrincipal" type="submit" name="" value="Ingresar"/>
      <p><a href="#">¿Olvidastes tu Contraseña?</a></p>

    </section>
            
        </div>
    )
}

export default Login;
