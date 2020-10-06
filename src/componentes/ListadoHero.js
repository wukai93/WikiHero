import React from "react";
import InfoHero from "./InfoHero";

const ListadoHero = ({ requestHero }) => {
  return (
    <div className="row">
       {requestHero.map(heroe =>(
                <InfoHero
                key={heroe.id}
                heroe={heroe}
                />
            ))}
    </div>
  );
};

export default ListadoHero;
