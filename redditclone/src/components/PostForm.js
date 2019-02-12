import React, { Component } from "react";
import { withRouter } from "react-router";
class PostForm extends Component {
  state = {
    title: "",
    content: "",
    votes: 0
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    e.persist();
    if (this.props.create) {
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
      })
        .then(res => res.json())
        .then(res => {
          this.props.newPost(res);
          this.emptyForm();
        });
    } else {
      this.props.updatePost(this.state);

      fetch(`http://localhost:3006/posts/${this.props.match.params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: e.target.title.value,
          content: e.target.content.value
        })
      }).then(() => {
        this.props.history.push("/");
      });
    }
  };

  emptyForm = () => {
    this.setState({ title: "", content: "" });
  };

  render() {
    // console.log(this.props);
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
          <input
            name="content"
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
            placeholder="Content"
          />
          <br />
          <input type="submit" className="button" />
        </form>
      </div>
    );
  }
}
export default withRouter(PostForm);
