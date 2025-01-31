import React from "react";
import "./Card.css";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} />
        <h3 className="cardName">{pokemon.name}</h3>
        <div className="cardTypes">
          <div>Type</div>
          <div>
            {pokemon.types.map((type) => {
              return (
                <div key={type.type.name}>
                  <span className="typeName">{type.type.name}</span>
                </div>
              );
            })}
          </div>
          <div className="cardInfo"></div>
          <div className="cardData">
            <p className="title">weight: {pokemon.weight}</p>
          </div>
          <div className="cardData">
            <p className="title">height: {pokemon.height}</p>
          </div>
          <div className="cardData">
            <p className="title">
              ability:
              {pokemon.abilities.map((ability) => {
                return (
                  <div>
                    <span>{ability.ability.name}</span>
                  </div>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
