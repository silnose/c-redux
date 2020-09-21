import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import * as tasksActions from "../../actions/tasksActions.js";
import Fatal from "../general/Fatal.js";
import Spinner from "../general/Spinner.js";
class Save extends Component {
  componentDidMount() {
    const {
      match: {
        params: { userId, taskId },
      },
      tasks,
      updateUserId,
      updateTitle,
      clear,
    } = this.props;
    if (userId && taskId) {
      updateUserId(userId);
      const task = tasks[userId][taskId];
      updateTitle(task.title);
    } else {
      clear();
    }
  }
  updateUserId = (event) => {
    this.props.updateUserId(event.target.value);
  };

  updateTitle = (event) => {
    this.props.updateTitle(event.target.value);
  };

  save = async () => {
    const {
      match: {
        params: { userId, taskId },
      },
      tasks,
      edit,
      save,
      userId: userIdInput,
      title,
    } = this.props;
    if (userId && taskId) {
      const task = tasks[userId][taskId];
      await edit({
        userIdInput,
        title,
        completed: task.completed,
        id: task.id,
      });
    } else {
      await save({ userIdInput, title, completed: false });
    }
  };

  render() {
    if (this.props.redirect) {
      return <Redirect to='/tasks' />;
    }
    if (this.props.loading) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Fatal />;
    }
    return (
      <Fragment>
        <h1>Save Task</h1>
        <label>UserId</label>
        <input
          type='number'
          value={this.props.userId}
          onChange={this.updateUserId}
        />
        <br />
        <label>Title</label>
        <input
          type='text'
          value={this.props.title}
          onChange={this.updateTitle}
        />
        <br />
        <button
          onClick={this.save}
          disabled={this.props.userId === "" || this.props.title === ""}>
          Save
        </button>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ taskReducer }) => taskReducer;

export default connect(mapStateToProps, tasksActions)(Save);
