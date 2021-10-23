import React from 'react'
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import squeaky from "../media/squeaky.jpg";

const Ventas = () => {
    return (
        <div>
        <Navbar></Navbar>
            
    <div class="contenedor">
        <div class="col">
            <div class="divSpacing buscar cuadroTexto">
                <input placeholder="Buscar un producto" />
                <i class="fas fa-search button"></i>
            </div>

            <div class="divSpacing">
                <div>Identificador venta</div>
                <input class="cuadroTexto" placeholder="Agregue un Identificador" />
            </div>

            <div class="divSpacing">
                <div>Valor total venta</div>
                <input class="cuadroTexto"type="number" min="0" max="500000" step="10000" value="50000" />
            </div>

            <div class="divSpacing">
                <div>Identificador producto vendido</div>
                <input class="cuadroTexto" placeholder="Agregue el id" />
            </div>

            <div class="divSpacing">
                <div>Cantidad vendida</div>
                <input class="cuadroTexto"type="number" min="0" max="100" step="1" value="3" />
            </div>

            <div class="divSpacing">
                <div>Precio unitario producto</div>
                <input class="cuadroTexto"type="number" min="0" max="1000000" step="10000" value="30000" />
            </div>

            <div class="divSpacing">
                <div>Identificador producto vendido</div>
                <input class="cuadroTexto" placeholder="Agregue el id" />
            </div>

            <div class="divSpacing">
                <div>Fecha de venta</div>
                <input class="cuadroTexto" placeholder="AAAA-MM-DD" />
            </div>

            <div class="divSpacing">
                <div>ID comprador</div>
                <input class="cuadroTexto" placeholder="id comprador" />
            </div>

            <div class="divSpacing">
                <div>Nombre comprador</div>
                <input class="cuadroTexto" placeholder="Nombre comprador" />
            </div>

            <div class="divSpacing">
                <div>Vendedor</div>
                <select name="select">
                    <option value="value1">Pepito</option>
                    <option value="value2">Pepito2</option>
                    <option value="value3">Pepito3</option>
                </select>
            </div>

            <div class="divSpacing">
                <button class="button botonSecundario">Editar</button>
                <button class="button botonSecundario">Actualizar</button>
            </div>
        </div>

        <div class="col">
            <img class="imagenProducto" src={squeaky} alt="Avatar"/>
            <div class="divSpacing">
                <button class="centrarButton button botonSecundario">Editar imagen</button>
            </div>
        </div>
        <div class="col">
            <div class="divSpacing">
                <button class="centrarButton button botonSecundario">Actualizar lista de ventas</button>
            </div>
            <div class="tabla-wrap"><table class="tabla">
                <thead>
                <tr>
                    <th class="tabla-encabezado">ID</th>
                    <th class="tabla-encabezado">Valor total venta</th>
                    <th class="tabla-encabezado">ID producto vendido</th>
                    <th class="tabla-encabezado">Cantidad vendida</th>
                    <th class="tabla-encabezado">Precio unitario</th>
                    <th class="tabla-encabezado">Fecha venta</th>
                    <th class="tabla-encabezado">Id Comprador</th>
                    <th class="tabla-encabezado">Vendedor</th>

                </tr>
                </thead>
                <tbody>
                <tr>

                </tr>
                <tr>

                </tr>
                <tr>

                </tr>
                <tr>

                </tr>
                <tr>

                </tr>
                <tr>

                </tr>
                <tr>

                </tr>
                <tr>

                </tr>
                <tr>

                </tr>
                </tbody>
            </table></div>
        </div>

    </div>


        <Footer/>
        </div>
    )
}

export default Ventas;
