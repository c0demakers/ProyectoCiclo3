import './styles/AllStyles.css';
import GestionUsuarios from "./layouts/GestionUsuario";
import Producto from "./layouts/Productos";
import Ventas from "./layouts/Ventas";
import Login from "./layouts/Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/gestionUsuarios">
          <GestionUsuarios/>
        </Route>
        <Route path = "/productos">
          <Producto/>
        </Route>
        <Route path = "/ventas">
          <Ventas/>
        </Route>
        <Route path = "/">
          <Login/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
