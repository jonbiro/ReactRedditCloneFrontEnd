import React, { Component } from "react";
import PostForm from "./PostForm";
import { Link } from "react-router-dom";


export default class Post extends Component {
  state = {
    posts: ""
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`https://redditclonebackend.herokuapp.com/posts/${id}`)
      .then(res => res.json())
      .then(posts => {
        this.setState({
          posts: posts
        });
      });
  }

  updatePost = ({ title, content }) => {
    this.setState({ title, content });
  };

  handleDelete = () => {
    return fetch(`https://redditclonebackend.herokuapp.com/posts/${this.props.match.params.id}`, {
      method: "DELETE"
    }).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <div className="post">
            <br/>
          <h2>{this.state.posts.title}</h2>
          <h3>{this.state.posts.content}</h3>
            <br/>
            <h2>Votes:️ {this.state.posts.votes}</h2>


        </div>
        <div className="editForm">
            <br/>
          <PostForm
            create={false}
            updatePost={this.updatePost}
            {...this.props}
          />
        </div>
        <br />
        <div className="deleteButton">
          <button onClick={this.handleDelete}>Delete Post</button>
        </div>
          <div>
              <Link to={'/'}> <button>Go Back Home</button></Link>
          </div>
      </div>
    );
  }
}
