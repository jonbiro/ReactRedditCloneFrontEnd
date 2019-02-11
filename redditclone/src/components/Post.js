import React, { Component } from "react";
import PostForm from "./PostForm";

export default class Post extends Component {
  constructor() {
    super();

    this.state = {
      posts: ""
      // title: "",
      // content: "",
      // votes: 0
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    //do ajax - get post
    // const posts = [{ title: "post title", content: "post content, can span a few lines", votes: { up: 3, down: 1 } }, { title: "post title", content: "post content, can span a few lines", votes: { up: 3, down: 1 } }, { title: "post title", content: "post content, can span a few lines", votes: { up: 3, down: 1 } }, { title: "post title", content: "post content, can span a few lines", votes: { up: 3, down: 1 } }];
    fetch(`http://localhost:3006/posts/${id}`)
      .then(res => res.json())
      .then(posts => {
        this.setState({
          posts: posts
        });
      });

    // let ajaxResponse = posts[id];
    // this.setState(ajaxResponse)
  }

  updatePost = ({ title, content }) => {
    this.setState({ title, content });
  };

  render() {
    return (
      <div>
        <div className="post">
          <h2>{this.state.posts.title}</h2>
          <p>{this.state.posts.content}</p>
            <p><span role="img">⬆️</span>️ {this.state.posts.votes} <span role="img">⬇️</span> </p>

        </div>
        <div className="editForm">
          <PostForm create={false} updatePost={this.updatePost} {...this.props}  />
        </div>
      </div>
    );
  }
}
