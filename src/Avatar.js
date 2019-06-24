import React from 'react';

function Extras(props){
  return(
    <div className="extra-info">
      <h3>Food: {props.plusinfo.food}</h3>
      <h3>Movie: {props.plusinfo.movie}</h3>
      <h3>Board game: {props.plusinfo.board_game}</h3>
    </div>
  )
}

function Avatar(props){
  return (
    <div className="details-container">
      <h1>Name: {props.name}</h1>
      <h2>Job: {props.job}</h2>
      <Extras plusinfo={props.extra}></Extras>
    </div>
  );
}

export default Avatar