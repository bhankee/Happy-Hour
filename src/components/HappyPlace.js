import React, { Component } from 'react';

const HappyPlace = ({ name, votes, handleSelect, handleDeSelect }) => {
  return (
    <div>
      <div>{name}</div>
      <ul>
        {votes &&
          Object.keys(votes).map(key => {
            const vote = votes[key];
            return <li key={key}>{vote}</li>;
          })}
      </ul>
      <button onClick={handleSelect}>let's Go</button>
      <button onClick={handleDeSelect}>Nope</button>
    </div>
  );
};

export default HappyPlace;
