import React, { Component } from 'react';

import HappyPlace from './HappyPlace';

class App extends Component {
  render() {
    const { currentUser, pubs } = this.props;
    // Cannot use .map over object so Object.keys will work
    const pubList = Object.keys(pubs).map(key => {
      const pub = pubs[key];
      return <HappyPlace key={key} {...pub} />;
    });
    return <div className="App">{pubList}</div>;
  }
}

export default App;
