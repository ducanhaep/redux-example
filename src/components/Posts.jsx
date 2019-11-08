import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        {this.state.post.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

// const mapStatetoProps(state) {
//   this.props.posts: state.items
// }
export default connect(
  null,
  { fetchPosts }
)(Posts);
