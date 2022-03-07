import React, { Component } from "react";
// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./Comment.css";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch("http://localhost:7777")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  render() {
    // const loadingSpin = this.state.loading ? "MainComment-logo Spin" : "MainComponent-logo";
    
    return (
      <div className="MainComponent container bg-light shadow">
        {/* <header className="MainComponent-header">
          <img src={logo} className={loadingSpin} alt="logo" />
          <h1 className="MainComponent-title">
            React Comments
            <span className="px-2" role="img" aria-label="Chat">
              💬
            </span>
          </h1>
          <p>
            Checkout the tutorial on{" "}
            <a className="text-light" href="https://qcode.in">
              QCode.in
            </a>
          </p>
        </header> */}

        <div className="row">
          <div className="col-4  pt-3 border-right">
            <h6>Leave a comment here</h6>
            <CommentForm addComment={this.addComment} />
          </div>
          <div className="col-8  pt-3 bg-white">
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;