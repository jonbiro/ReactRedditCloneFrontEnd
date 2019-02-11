import React, { Component } from 'react'
import PostForm from './PostForm';

export default class Post extends Component {
  constructor(){
    super();

    this.state = {
      title: "",
      content: "",
      votes: {up: 0, down: 0}
    }
  }
  componentDidMount(){
    const id = this.props.match.params.id;
    //do ajax - get post
    const posts = [{ title: "post title", content: "post content, can span a few lines", votes: { up: 3, down: 1 } }, { title: "post title", content: "post content, can span a few lines", votes: { up: 3, down: 1 } }, { title: "post title", content: "post content, can span a few lines", votes: { up: 3, down: 1 } }, { title: "post title", content: "post content, can span a few lines", votes: { up: 3, down: 1 } }];
    let ajaxResponse = posts[id];
    this.setState(ajaxResponse)
  }

  updatePost = ({title, content}) => {
    this.setState({title, content})
  }

  render() {
    return (
      <div>
        <div className="post">
          <h2>{this.state.title}</h2>
          <p>{this.state.content}</p>
          <p>up <span>{this.state.votes.up}</span> | down <span>{this.state.votes.down}</span></p>
        </div>
        <div className="editForm">
          <PostForm create={false} updatePost={this.updatePost} />
        </div>
      </div>
    )
  }
}
