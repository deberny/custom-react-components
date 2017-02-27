import React, { Component, propTypes } from 'react';
import MediaBadge  from './MediaBadge';
import Icon  from './Icon';
import './theme-0.2.3.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <i className="fa fa-plus fa-2x"></i>
          <h2>Making things happen</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MediaBadge>
          <MediaBadge color="success" className="img-circle">
            <MediaBadge container>
                <Icon name="user"></Icon>
            </MediaBadge>
          </MediaBadge>
        </MediaBadge>
      </div>
    );
  }
}

export default App;
