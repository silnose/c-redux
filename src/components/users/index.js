import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import * as usersActions from "../../actions/usersActions.js";
import Spinner from "../general/Spinner.js";
import Fatal from "../general/Fatal.js";
import Table from "./Table.js";

class Users extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.getAll();
    }
  }
  setContent() {
    if (this.props.loading) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <Fatal error={this.props.error} />;
    }
    if (this.props.users.length === 0) {
      return (
        <div>
          <h3>No data</h3>
        </div>
      );
    }
    return <Table />;
  }
  render() {
    return (
      <Fragment>
        <h1>Usuarios</h1>
        {this.setContent()}
      </Fragment>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
