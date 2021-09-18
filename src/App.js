import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import Landing from "./screens/Landing";
import Clubs from "./screens/Clubs";
import Music from "./screens/Music";
import Sport from "./screens/Sport";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  async componentDidMount() {    
    
  };  

  componentDidUpdate(prevProps, prevState) {
    
  };  

  render() {
    const {
      
    } = this.state;      

    return (
      <Fragment>
        <Switch>
          {/* <Route
            path="/:userId"
            render={(props) => (
              <PDF
                {...props}                
              />
            )}
          /> */}
          <Route
            path="/clubs/music"
            render={(props) => (
              <Music
                {...props}
              />
            )}
          />
          <Route
            path="/clubs/sport"
            render={(props) => (
              <Sport
                {...props}
              />
            )}
          />
          <Route
            path="/clubs"
            render={(props) => (
              <Clubs
                {...props}                
              />
            )}
          />
          <Route
            path="/"
            render={(props) => (
              <Landing
                {...props}                
              />
            )}
          />          
        </Switch>
      </Fragment>
    );
  }

}
