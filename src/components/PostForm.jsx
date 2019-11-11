import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  };
  render() {
    return (
      <div>
        <h1>Post Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-control">
            <label htmlFor="body">Body: </label>
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propsTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
