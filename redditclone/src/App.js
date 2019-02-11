import React, { Component } from 'react';
import './App.css';
import PostsContainer from './components/PostsContainer';
import Post from './components/Post';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
        <div>
            <Search/>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={PostsContainer} />
            <Route
              path="/posts/:id"
              render={routerProps => <Post {...routerProps} />}
            />
            <Route path="/posts" component={PostsContainer} />
          </Switch>
        </div>
      </Router>
        </div>
    );
  }
}

export default App;
