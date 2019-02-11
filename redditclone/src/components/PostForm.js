import React, { Component } from "react";

export default class PostForm extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      content: "",
      votes: 0
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    if (this.props.create) {
      //do ajax to create post
      fetch("http://localhost:3006/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: e.target.title.value,
          content: e.target.content.value,
          votes: 0
        })
      }); //.then(//add post to page dom)
    } else {
      //do ajax to edit post
      //edit post within dom
      this.props.updatePost(this.state);
      {
        fetch(`http://localhost:3006/posts/${this.props.match.params.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title: e.target.title.value,
            content: e.target.content.value

          })
        });
      }
    }

    this.emptyForm();
  };

  emptyForm = () => {
    this.setState({ title: "", content: "" });
  };

  render() {
      console.log(this.props)
    return (
      <div>
        <h3>{this.props.create ? "Create" : "Edit"} Post:</h3>

        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
            placeholder="Title"
          />
          <br />
          <textarea
            name="content"
            onChange={this.handleChange}
            value={this.state.content}
            placeholder="Content"
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
