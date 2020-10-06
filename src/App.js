import React, { useState, useEffect } from "react";
import Formulario from "./componentes/Formulario";
import ListadoHero from "./componentes/ListadoHero";
import axios from "axios";
import { AlertTitle, Alert } from '@material-ui/lab';
function App() {
  const [busquedaHero, setBusquedaHero] = useState({});
  const [requestHero, setRequestHero] = useState([]);
  const [mostrar, setMostrar] = useState(false);
  const [errorBusqueda, setErrorBusqueda] = useState(false);

  useEffect(() => {
    if (Object.keys(busquedaHero).length === 0) {
      setMostrar(false)
      return;
    }
    
    setMostrar(true);
    const consultarAPIasync = async () => {
      const key = "763595607552078";
      const url = `https://superheroapi.com/api/${key}/search/${busquedaHero.hero}`;
      const resultado = await axios.get(url);
      if(resultado.data.results === undefined){
        setErrorBusqueda(true);
        return;
      }
      setErrorBusqueda(false);
      setRequestHero(resultado.data.results);
    };
    consultarAPIasync();
  }, [busquedaHero]);

  return (
    <div>
      <Formulario setBusquedaHero={setBusquedaHero} />

      <div className="container">
        <div className="row">
          {errorBusqueda ? (<Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        No se encontro ningun Heroe
      </Alert>) : (mostrar ? (
          <ListadoHero 
          requestHero={requestHero}
          />
          ) : null)}
          
        </div>
      </div>
    </div>
  );
}

export default App;
