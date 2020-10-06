import React from 'react';

const InfoHero = ({heroe}) => {
    const {image, powerstats, id, name} = heroe;
    const {combat, durability,intelligence,power,speed,strength} = powerstats
  

    const imagen = image ? (
        <div className="card-image">
          <img src={image.url} alt={id} />
        </div>
      ) : null;


    return ( 
       <div className="col s12 m6 l4">
      <div className="card">
        {imagen}

        <div className="card-content">
          <h3>{name}</h3>
    <p>combat: <span>{combat}</span></p>
    <p>durability: <span>{durability}</span></p>
    <p>intelligence: <span>{intelligence}</span></p>
    <p>power: <span>{power}</span></p>
    <p>speed: <span>{speed}</span></p>
    <p>strength: <span>{strength}</span></p>
        </div>
      </div>
    </div>
     );
}
 
export default InfoHero