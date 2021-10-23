import React from 'react'
import usurario from "../media/foto-usuario.png"
import guardado from "../media/guardado.png";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
const GestionUsuario = () => {
    return (
        
        <div>
            <Navbar></Navbar>
            
        <div className="ordenTablas"><section>
        <div className="margenEspecial">
            <img src={usurario} width="120" height="120" alt="InternetCtrl"/>
            <p className= "parrafo1" >Administrador</p>
            <p className= "parrafo2">NOMBRE Y APELLIDO DE USUARIO</p>
            <p className= "parrafo1">Estado: activo</p>
            
            <Footer/>
        </div>

        <h1 className="titulo"><strong>ADMINISTRADOR DE USUARIOS</strong></h1>
        <table id="tabla">
            <tr>
                <th>Nombre y apellido</th>
                <th>Rol</th>
                <th>Estado</th>
            </tr>
          
            <tr>
                <td>Pedro Mesa</td>
                <td>Administrador</td>
                <td>Activo</td>
             </tr>

             <tr>
                <td>Sandra Castro</td>
                <td>Administrador</td>
                <td>Activo</td>
             </tr>

             <tr>
                <td>Manuel Mejía</td>
                <td>Vendedor</td>
                <td>Activo</td>
             </tr>

             <tr>
                <td>Andrea Ossa</td>
                <td>Vendedor</td>
                <td>Inactivo</td>
             </tr>

             <tr>
                <td>Natalia Diaz</td>
                <td>Vendedor</td>
                <td>Inactivo</td>
             </tr>
         </table></section>

         <section>
        <div className="contenedor">
            <div>
                <ul>
                <h2 className="titulo2"><strong>EDITOR DE USUARIOS</strong></h2>
                <div className="divSpacing buscar cuadroTexto">
                    <input placeholder="Buscar un usuario"/>
                    <i className="fas fa-search button"></i>
                </div>
                <div className="divSpacing">
                    <button className="button botonSecundario">Editar</button>
                </div></ul>

            <ul className="ordenadorFormulario">
                <form action="#" target="" method="get" name="actualizacionUsuarios">
                    <li><label for="NOMBRE Y APELLIDO" >
                        <span>Escriba el nombre y apellido</span>
                        <input type="text" id="nombre" placeholder="Nombre y apellido"/>
                    </label></li>
                    
                    <li><label for="ROL DE USUARIO">
                        <span>Escriba el rol</span>
                        <input type="text" id="rol" placeholder="Rol"/>
                    </label></li>

                    <li><label for="ESTADO">
                        <span>Escriba el estado</span>
                        <input type="text" id="estado" placeholder="Estado"/>
                    </label>
                    </li>
                    <li><input type="submit" className="button botonGuardar" value="Guardar"/></li>
                </form>

            
                <li><a href="#popUp">Guardar</a>
                <div id="popUp" className="popup">
                <div className="pop-up">
                <a href="#">X</a>
                <center>
                    <img src= {guardado} width="50" height="50" alt="InternetCtrl"/>
                <p>Los cambios han sido guardados exitosamente.</p>
                </center>
            
        </div>  
                </div></li>

            </ul>

        </div>

        </div>
    </section>
</div>
    
        </div>
    )
}

export default GestionUsuario;
