import React, { Component, propTypes } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';
import MediaBadge  from './MediaBadge';
import Icon  from './Icon';
import './theme-0.2.3.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Making things happen <i className="fa fa-leaf fa-2x"></i></h2>
        </div>
        <ListGroup>
          <ListGroupItem className="justify-content-between">Two tweeting birds <Badge pill color="success">14</Badge></ListGroupItem>
          <ListGroupItem className="justify-content-between">sitting on a tree branch <Badge pill color ="warning">2</Badge></ListGroupItem>
          <ListGroupItem className="justify-content-between">looking at the world from above <Badge pill color="primary">1</Badge></ListGroupItem>
          <ListGroupItem active>
            <ListGroupItemHeading>First we build components</ListGroupItemHeading>
            <ListGroupItemText>
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </ListGroupItemText>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading color="primary">Then we build components that contain other components</ListGroupItemHeading>
            <ListGroupItemText>
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </ListGroupItemText>
          </ListGroupItem>
          <ListGroupItem>
            <MediaBadge color="success" size="sm" className="img-circle">
              <div className="media-badge-container">
                  <Icon name="user"></Icon>
              </div>
            </MediaBadge>
          </ListGroupItem>
          <ListGroupItem>
            <MediaBadge color="warning" size="sm" className="img-circle">
              <div className="media-badge-container">
                  <Icon name="exclamation" inverse></Icon>
              </div>
              <Badge color="success">4</Badge>
            </MediaBadge>
          </ListGroupItem>
          <ListGroupItem>
            <MediaBadge color="default" size="sm" className="img-circle">
              <span className="media-badge-container">
                  <Icon name="exclamation" inverse></Icon>
              </span>
              <Badge color="primary">
                <Icon name="gear"></Icon>
              </Badge>
            </MediaBadge>
          </ListGroupItem>
        </ListGroup>

      </div>
    );
  }
}

export default App;
