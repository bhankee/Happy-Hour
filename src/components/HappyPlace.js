import React, { Component } from 'react';
import './HappyPlace.css';

const HappyPlace = ({ name, votes, user, handleSelect, handleDeSelect }) => {
  const userHasSelected = votes && Object.keys(votes).includes(user.uid);

  return (
    <div>
      <div className="happyContainer">
        <div className="happyPlace">{name}</div>
        {userHasSelected ? (
          <button className="voteBtn" onClick={handleDeSelect}>
            Nope
          </button>
        ) : (
          <button className="voteBtn" onClick={handleSelect}>
            let's Go
          </button>
        )}
        <div>
          <ul className="voteList">
            {votes &&
              Object.keys(votes).map(key => {
                const vote = votes[key];

                return <li key={key}>{vote}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HappyPlace;
