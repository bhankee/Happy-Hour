import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">Happy Hour</h1>
      <span className="awesome">
        <FontAwesomeIcon icon={faBeer} />
      </span>
    </div>
  );
};

export default Header;
