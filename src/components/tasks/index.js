import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Spinner from "../general/Spinner.js";
import Fatal from "../general/Fatal.js";
import * as tasksActions from "../../actions/tasksActions.js";
import { Link } from "react-router-dom";
class Tasks extends Component {
  async componentDidMount() {
    if (Object.entries(this.props.tasks).length === 0) {
      await this.props.getAll();
    }
  }
  async componentDidUpdate() {
    const { tasks, loading, getAll } = this.props;
    if (Object.entries(tasks).length === 0 && !loading) {
      await getAll();
    }
  }
  showContent = () => {
    const { tasks, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal error={error} />;
    }
    // TODO: this implementation can be improved. Check after the couse
    return (
      <Fragment>
        <div>
          <Link to='/tasks/new'>Add</Link>
        </div>
        {Object.entries(tasks).map((userId) => (
          <div key={userId[0]}>
            User {userId[0]}
            {Object.entries(userId[1]).map((item, index) => (
              <div key={index}>
                <input
                  type='checkbox'
                  defaultChecked={item[1].completed}
                  onChange={() =>
                    this.props.updateCheckBox(userId[0], item[1].id)
                  }
                />{" "}
                {item[1].title}
                <button>
                  {" "}
                  <Link to={`/tasks/edit/${userId[0]}/${item[1].id}`}>
                    Edit
                  </Link>
                </button>
                <button onClick={() => this.props.remove(item[1].id)}>
                  Delete
                </button>
                <br />
              </div>
            ))}
            <hr />
          </div>
        ))}
        ;
      </Fragment>
    );
  };
  render() {
    return <Fragment>{this.showContent()}</Fragment>;
  }
}

const mapStateToProps = ({ taskReducer }) => taskReducer;

export default connect(mapStateToProps, tasksActions)(Tasks);
