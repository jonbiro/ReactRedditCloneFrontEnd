import React, { Component } from 'react'
import PostForm from "./PostForm";
import PostListItem from './PostListItem'; 

export default class PostsContainer extends Component {
state = {
      posts: []
    };

  
  componentDidMount(){

fetch("http://localhost:3006/posts")
    .then(res => res.json())
    .then( posts => {
        this.setState({
            posts: posts
        })
    })
  };

  render() {
    const posts = this.state.posts.map((post) => <PostListItem title={post.title} votes={post.votes} key={post.id} postId={post.id} />)

    return (
        <div>
            <div className="posts">
              <ul>
                {posts}
              </ul>
            </div>
            <div className="sideContainer">
                <PostForm create={true} />
            </div>
        </div>
    )
  }
}
