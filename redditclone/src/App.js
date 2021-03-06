import React, { Component } from 'react';
import './App.css';
import PostsContainer from './components/PostsContainer';
import Post from './components/Post';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={PostsContainer} />
            <Route
              path="/posts/:id"
              render={routerProps => <Post {...routerProps} />}
            />
            <Route path="/posts" component={PostsContainer} />
            <Route path="/*" component={PostsContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
