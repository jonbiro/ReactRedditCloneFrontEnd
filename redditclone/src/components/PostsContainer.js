import React, { Component } from 'react'
import PostForm from "./PostForm";
import PostListItem from './PostListItem'; 

export default class PostsContainer extends Component {
  constructor(){
    super();

    this.state = {
      posts: []
    }
  }
  
  componentDidMount(){
    //FAKE AJAX
    const posts = [{ title: "post title", content: "post content, can span a few lines", votes: { up: 3, down: 1 } }, { title: "post title", content: "post content, can span a few lines", votes: { up: 3, down: 1 } }, { title: "post title", content: "post content, can span a few lines", votes: { up: 3, down: 1 } }, { title: "post title", content: "post content, can span a few lines", votes: { up: 3, down: 1 }}];
    //end fake ajax

    this.setState({ posts: posts });
  }

  render() {
    const posts = this.state.posts.map((post, i) => <PostListItem title={post.title} votes={post.votes} key={i} postId={i} />)

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
