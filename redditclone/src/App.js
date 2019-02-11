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
            <Route exact path='/' component={PostsContainer} />
            <Route path='/posts/:id' component={Post} />
            <Route path='/posts' component={PostsContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
