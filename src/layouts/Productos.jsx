import React from 'react';
import squeaky from "../media/squeaky.jpg";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";

const Productos = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className="contenedor">
            <div className="col">
                <div className="divSpacing buscar cuadroTexto">
                    <input placeholder="Buscar un producto" />
                    <i className="fas fa-search button"></i>
                </div>

                <div className="divSpacing">
                    <div>Identificador de producto</div>
                    <input className="cuadroTexto" placeholder="Agregue un Identificador" />
                </div>

                <div className="divSpacing">
                    <div>Nombre del producto</div>
                    <input className="cuadroTexto" placeholder="Agregue nombre del producto" />
                </div>

                <div className="divSpacing">
                    <div>Precio</div>
                    <input className="cuadroTexto" placeholder="Agregue un precio" />
                </div>

                <div className="divSpacing">
                    <div>Stock</div>
                    <input className="cuadroTexto" placeholder="Agregue el stock" />
                </div>

                <div className="divSpacing">
                    <button className="button botonSecundario">Editar</button>
                    <button className="button botonSecundario">Actualizar</button>
                </div>
            </div>

            <div className="col">
                <img className="imagenProducto" src={squeaky} alt="Avatar"/>
                <div className="divSpacing">
                    <button className="centrarButton button botonSecundario">Editar imagen</button>
                </div>
            </div>

            <div className="col">
                <div className="divSpacing">
                    <button className="centrarButton button botonSecundario">Actualizar lista de productos</button>
                </div>
                <div className="tabla-wrap"><table className="tabla">
                    <thead>
                      <tr>
                        <th className="tabla-encabezado">ID</th>
                        <th className="tabla-encabezado">Producto</th>
                        <th className="tabla-encabezado">Precio</th>
                        <th className="tabla-encabezado">Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="tabla-fila">001</td>
                        <td className="tabla-fila">Hueso</td>
                        <td className="tabla-fila">5000</td>
                        <td className="tabla-fila">20</td>
                      </tr>
                      <tr>
                        <td className="tabla-fila">002</td>
                        <td className="tabla-fila">Collar</td>
                        <td className="tabla-fila">20000</td>
                        <td className="tabla-fila">10</td>
                      </tr>
                      <tr>
                        <td className="tabla-fila">003</td>
                        <td className="tabla-fila">Pelota</td>
                        <td className="tabla-fila">3000</td>
                        <td className="tabla-fila">30</td>
                      </tr>
                      <tr>
                        <td className="tabla-fila">004</td>
                        <td className="tabla-fila"></td>
                        <td className="tabla-fila"></td>
                        <td className="tabla-fila"></td>
                      </tr>
                      <tr>
                        <td className="tabla-fila">005</td>
                        <td className="tabla-fila"></td>
                        <td className="tabla-fila"></td>
                        <td className="tabla-fila"></td>
                      </tr>
                      <tr>
                        <td className="tabla-fila">006</td>
                        <td className="tabla-fila"></td>
                        <td className="tabla-fila"></td>
                        <td className="tabla-fila"></td>
                      </tr>
                      <tr>
                        <td className="tabla-fila">007</td>
                        <td className="tabla-fila"></td>
                        <td className="tabla-fila"></td>
                        <td className="tabla-fila"></td>
                      </tr>
                      <tr>
                        <td className="tabla-fila">008</td>
                        <td className="tabla-fila"></td>
                        <td className="tabla-fila"></td>
                        <td className="tabla-fila"></td>
                      </tr>
                      <tr>
                        <td className="tabla-fila">009</td>
                        <td className="tabla-fila"></td>
                        <td className="tabla-fila"></td>
                        <td className="tabla-fila"></td>
                      </tr>
                    </tbody>
                    </table></div>
            </div>

        </div>
        <Footer/>
    
        </div>
    )
}

export default Productos;
