import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as usersActions from "../../actions/usersActions.js";
import * as postsActions from "../../actions/postsActions.js";
import Spinner from "../general/Spinner.js";
import Fatal from "../general/Fatal.js";
import Comments from "../comments/index.js";

const { getAll: usersGetAll } = usersActions;
const { getAllByUser: postsGetByUser, openClose, getComments } = postsActions;
class Posts extends Component {
  async componentDidMount() {
    const {
      usersGetAll,
      postsGetByUser,
      match: {
        params: { key },
      },
    } = this.props;

    if (
      !this.props.userReducer.users.length ||
      this.props.userReducer.users.length === 0
    ) {
      await usersGetAll();
    }
    if (
      this.props.userReducer.error.length === 0 &&
      !this.props.userReducer.users[key].hasOwnProperty("postsKey")
    ) {
      postsGetByUser(key);
    }
  }

  setUserName() {
    const {
      userReducer,
      match: {
        params: { key },
      },
    } = this.props;

    if (userReducer.error) {
      return <Fatal error={userReducer.error} />;
    }

    if (!userReducer.users.length || userReducer.loading) {
      return <Spinner />;
    }
    return <h1>Posts of {userReducer.users[key].name}</h1>;
  }

  showComments = (postsKey, index, comments) => {
    this.props.openClose(postsKey, index);
    if (comments.length === 0) {
      this.props.getComments(postsKey, index);
    }
  };

  setPosts() {
    const {
      userReducer,
      userReducer: { users },
      postReducer,
      postReducer: { posts },
      match: {
        params: { key },
      },
    } = this.props;

    if (postReducer.error) {
      return <Fatal error={postReducer.error} />;
    }

    if (!posts.length || postReducer.loading) {
      return <Spinner />;
    }
    if (posts.length === 0) return;

    if (!users[key].hasOwnProperty("postsKey")) return;

    const { postsKey } = users[key];
    return posts[postsKey].map((item, index) => (
      <div key={index}>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        {item.isOpen ? <Comments comments={item.comments} /> : ""}
        <button
          onClick={() => this.showComments(postsKey, index, item.comments)}>
          {item.isOpen ? "Hide" : "Show"} Comments
        </button>
        <hr />
      </div>
    ));
  }
  render() {
    return (
      <Fragment>
        {this.setUserName()} {this.setPosts()}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ userReducer, postReducer }) => {
  return { userReducer, postReducer };
};

const mapDispatchToProps = {
  usersGetAll,
  postsGetByUser,
  openClose,
  getComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
