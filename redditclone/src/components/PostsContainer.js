import React, { Component } from "react";
import PostForm from "./PostForm";
import PostListItem from "./PostListItem";
import Search from "./Search";

export default class PostsContainer extends Component {
  state = {
    posts: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(posts => {
        this.setState({
          posts: posts
        });
      });
  }

  newPost = postObj => {
    this.setState({ posts: [...this.state.posts, postObj] });
  };

  filterPosts = e => {
    // console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    });
  };
  filteredPosts = () => {
    let newArr = this.state.posts;
    if (this.state.searchTerm) {
      return newArr.filter(post =>
        post.title.toUpperCase().includes(this.state.searchTerm.toUpperCase())
      );
    }
    return newArr;
  };

  upFunc = (postId, voteNum) => {
    fetch(`http://localhost:3000/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        votes: voteNum + 1
      })
    });
    let modifiedPost = [...this.state.posts];
    let post = modifiedPost.find(post => post.id === postId); //referenced find, not a new object
    post.votes = post.votes + 1;
    this.setState({ posts: modifiedPost });
  };

  downFunc = (postId, voteNum) => {
    fetch(`http://localhost:3000/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        votes: voteNum - 1
      })
    });
    let modifiedPost = [...this.state.posts];
    let post = modifiedPost.find(post => post.id === postId); //referenced find, not a new object
    post.votes = post.votes - 1;
    this.setState({ posts: modifiedPost });
  };

  render() {
    const posts = this.filteredPosts().map(post => (
      <PostListItem
        title={post.title}
        votes={post.votes}
        key={post.id}
        postId={post.id}
        upFunc={this.upFunc}
        downFunc={this.downFunc}
      />
    ));

    return (
      <div>
        <Search filterPosts={this.filterPosts} />
        <div className="posts">
          <ul>{posts}</ul>
        </div>
        <div className="sideContainer">
          <PostForm create={true} newPost={this.newPost} />
        </div>
      </div>
    );
  }
}
