import React, { Component } from 'react';

export default class PostForm extends Component {
    constructor(){
        super();

        this.state = {
            title: "",
            content: ""
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.props.create){
            //do ajax to create post
            //add post to page dom
        } else {
            //do ajax to edit post
            //edit post within dom
            this.props.updatePost(this.state);
        }

        this.emptyForm()
    }

    emptyForm = () => {
        this.setState({title: "", content: ""})
    }

    render() {
        return (
            <div>
                <h3>{this.props.create ? "Create" : "Edit"} Post</h3>
                
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="title" onChange={this.handleChange}  value={this.state.title}/>
                    <textarea name="content" onChange={this.handleChange} value={this.state.content}></textarea>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
