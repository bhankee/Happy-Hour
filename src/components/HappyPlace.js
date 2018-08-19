import React, { Component } from 'react';
import './HappyPlace.css';

const HappyPlace = ({ name, votes, user, handleSelect, handleDeSelect }) => {
  const userHasSelected = votes && Object.keys(votes).includes(user.uid);
  console.log('USER!!: ', user);
  return (
    <div>
      <div className="happyContainer">
        <div className="happyPlace">{name}</div>
        {userHasSelected ? (
          <button onClick={handleDeSelect}>Nope</button>
        ) : (
          <button onClick={handleSelect}>let's Go</button>
        )}
      </div>
      <div>
        <ul>
          {votes &&
            Object.keys(votes).map(key => {
              const vote = votes[key];
              return <li key={key}>{vote}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default HappyPlace;
