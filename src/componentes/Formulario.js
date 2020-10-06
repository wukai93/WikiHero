import React, { useState } from "react";
import { AlertTitle, Alert } from '@material-ui/lab';
import Button from "@material-ui/core/Button";

const Formulario = ({ setBusquedaHero }) => {
  const [busqueda, setBusqueda] = useState({
    hero: "",
  });

  const [error, setError] = useState(false);

  const guardarState = (e) => {
    setBusqueda({
      [e.target.name]: e.target.value,
    });
  };

  const buscarInformacion = (e) => {
    e.preventDefault();
    if (busqueda.hero.trim() === "") {
        setError(true);
        return;
    }
    setError(false);

    setBusquedaHero(busqueda);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
        <h1 className="text-align: center">WikiHero</h1>
          <form onSubmit={buscarInformacion}>
            <fieldset>
              <div className="row">
                <div>
                  <label>Heroe</label>
                  <input
                    type="text"
                    className="form-control"
                    name="hero"
                    placeholder="Nombre del superheroe"
                    onChange={guardarState}
                  />
                </div>
              </div>
              <Button type="submit" variant="contained" color="primary">
                Buscar
              </Button>
            </fieldset>
          </form>
          {error ? (
        <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Debe colocar un nombre
      </Alert>
      ) : null}
        </div>
      </div>
    </div>
  );
};

export default Formulario;
