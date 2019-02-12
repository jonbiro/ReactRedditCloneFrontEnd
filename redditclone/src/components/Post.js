import React, { Component } from "react";
import PostForm from "./PostForm";
import Voting from "./Voting";

export default class Post extends Component {
  state = {
    posts: ""
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:3000/posts/${id}`)
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
    return fetch(`http://localhost:3000/posts/${this.props.match.params.id}`, {
      method: "DELETE"
    }).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="post">
          <br />
          <h2>{this.state.posts.title}</h2>
          <p>{this.state.posts.content}</p>
          <br />
          <h3>Votes:️ {this.state.posts.votes}</h3>
            {/*<Voting         postId={this.props.match.params.id}*/}
                            {/*votes={this.state.posts.votes}*/}
                            {/*upFunc={this.props.upFunc}*/}
                            {/*downFunc={this.props.downFunc}/>*/}
        </div>
        <div className="editForm">
          <br />
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
      </div>
    );
  }
}
